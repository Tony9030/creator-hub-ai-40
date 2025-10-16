import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Free to start, no credit card required",
  "Full access to AI assistant",
  "Unlimited clients and projects",
  "14-day money-back guarantee",
];

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Ready to transform your
            <span className="block mt-2">creative business?</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of creators who've reduced admin time by 60% and increased 
            revenue with Creator OS.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-all text-lg px-10 h-14 shadow-2xl shadow-black/20"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-white/70">
            No credit card required • Set up in 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
};
