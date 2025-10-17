import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(token);

    if (authError || !user) {
      throw new Error("Unauthorized");
    }

    const { type, context } = await req.json();

    let systemPrompt = "";
    let userPrompt = "";

    switch (type) {
      case "proposal":
        systemPrompt = "You are an expert business proposal writer. Create professional, compelling proposals that win clients.";
        userPrompt = `Generate a detailed project proposal based on the following context:\n\n${context}`;
        break;
      case "follow-up":
        systemPrompt = "You are a professional communication expert. Write polite, persuasive follow-up emails.";
        userPrompt = `Generate a follow-up email based on this context:\n\n${context}`;
        break;
      case "social":
        systemPrompt = "You are a social media content expert. Create engaging posts that drive engagement.";
        userPrompt = `Generate engaging social media content based on:\n\n${context}`;
        break;
      case "pricing":
        systemPrompt = "You are a pricing strategy consultant. Provide clear, justified pricing recommendations.";
        userPrompt = `Analyze and suggest pricing for the following:\n\n${context}`;
        break;
      default:
        systemPrompt = "You are a helpful business assistant for creators and freelancers.";
        userPrompt = context;
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add more credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.choices?.[0]?.message?.content || "";

    // Log usage
    await supabaseClient.from("ai_usage_logs").insert({
      user_id: user.id,
      model: "google/gemini-2.5-flash",
      tokens_used: data.usage?.total_tokens || 0,
      endpoint: type,
      success: true,
    });

    return new Response(
      JSON.stringify({ content: generatedText }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error) {
    console.error("Error in generate-ai-content:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
