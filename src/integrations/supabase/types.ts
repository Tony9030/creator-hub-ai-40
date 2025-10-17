export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      ai_templates: {
        Row: {
          created_at: string
          id: string
          name: string
          output: string | null
          prompt: string
          template_type: string
          updated_at: string
          usage_count: number | null
          user_id: string
          visibility: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          output?: string | null
          prompt: string
          template_type: string
          updated_at?: string
          usage_count?: number | null
          user_id: string
          visibility?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          output?: string | null
          prompt?: string
          template_type?: string
          updated_at?: string
          usage_count?: number | null
          user_id?: string
          visibility?: string | null
        }
        Relationships: []
      }
      ai_usage_logs: {
        Row: {
          cost_usd: number | null
          created_at: string
          endpoint: string | null
          error_message: string | null
          id: string
          model: string
          success: boolean | null
          tokens_used: number
          user_id: string
        }
        Insert: {
          cost_usd?: number | null
          created_at?: string
          endpoint?: string | null
          error_message?: string | null
          id?: string
          model: string
          success?: boolean | null
          tokens_used: number
          user_id: string
        }
        Update: {
          cost_usd?: number | null
          created_at?: string
          endpoint?: string | null
          error_message?: string | null
          id?: string
          model?: string
          success?: boolean | null
          tokens_used?: number
          user_id?: string
        }
        Relationships: []
      }
      clients: {
        Row: {
          company: string | null
          created_at: string
          email: string | null
          id: string
          name: string
          notes: string | null
          phone: string | null
          tags: string[] | null
          updated_at: string
          user_id: string
          value_estimate: number | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id: string
          value_estimate?: number | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id?: string
          value_estimate?: number | null
        }
        Relationships: []
      }
      content_items: {
        Row: {
          ai_generated: boolean | null
          attachments: string[] | null
          content: string | null
          created_at: string
          drafts: Json | null
          id: string
          platform: string | null
          published_date: string | null
          scheduled_date: string | null
          status: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_generated?: boolean | null
          attachments?: string[] | null
          content?: string | null
          created_at?: string
          drafts?: Json | null
          id?: string
          platform?: string | null
          published_date?: string | null
          scheduled_date?: string | null
          status?: Database["public"]["Enums"]["content_status"]
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_generated?: boolean | null
          attachments?: string[] | null
          content?: string | null
          created_at?: string
          drafts?: Json | null
          id?: string
          platform?: string | null
          published_date?: string | null
          scheduled_date?: string | null
          status?: Database["public"]["Enums"]["content_status"]
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      invoices: {
        Row: {
          client_id: string | null
          created_at: string
          currency: string
          due_date: string | null
          id: string
          invoice_number: string
          line_items: Json
          notes: string | null
          paid_date: string | null
          pdf_url: string | null
          project_id: string | null
          status: Database["public"]["Enums"]["invoice_status"]
          stripe_invoice_id: string | null
          stripe_payment_intent_id: string | null
          subtotal: number
          tax: number | null
          total: number
          updated_at: string
          user_id: string
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          currency?: string
          due_date?: string | null
          id?: string
          invoice_number: string
          line_items?: Json
          notes?: string | null
          paid_date?: string | null
          pdf_url?: string | null
          project_id?: string | null
          status?: Database["public"]["Enums"]["invoice_status"]
          stripe_invoice_id?: string | null
          stripe_payment_intent_id?: string | null
          subtotal?: number
          tax?: number | null
          total?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          client_id?: string | null
          created_at?: string
          currency?: string
          due_date?: string | null
          id?: string
          invoice_number?: string
          line_items?: Json
          notes?: string | null
          paid_date?: string | null
          pdf_url?: string | null
          project_id?: string | null
          status?: Database["public"]["Enums"]["invoice_status"]
          stripe_invoice_id?: string | null
          stripe_payment_intent_id?: string | null
          subtotal?: number
          tax?: number | null
          total?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          message: string
          metadata: Json | null
          read: boolean | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          metadata?: Json | null
          read?: boolean | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          metadata?: Json | null
          read?: boolean | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          business_name: string | null
          created_at: string
          default_hourly_rate: number | null
          display_name: string | null
          email: string
          id: string
          onboarding_completed: boolean | null
          plan_tier: Database["public"]["Enums"]["plan_tier"]
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          business_name?: string | null
          created_at?: string
          default_hourly_rate?: number | null
          display_name?: string | null
          email: string
          id: string
          onboarding_completed?: boolean | null
          plan_tier?: Database["public"]["Enums"]["plan_tier"]
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          business_name?: string | null
          created_at?: string
          default_hourly_rate?: number | null
          display_name?: string | null
          email?: string
          id?: string
          onboarding_completed?: boolean | null
          plan_tier?: Database["public"]["Enums"]["plan_tier"]
          updated_at?: string
        }
        Relationships: []
      }
      project_comments: {
        Row: {
          attachments: string[] | null
          author_name: string
          content: string
          created_at: string
          id: string
          mentions: string[] | null
          project_id: string
          resolved: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          attachments?: string[] | null
          author_name: string
          content: string
          created_at?: string
          id?: string
          mentions?: string[] | null
          project_id: string
          resolved?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          attachments?: string[] | null
          author_name?: string
          content?: string
          created_at?: string
          id?: string
          mentions?: string[] | null
          project_id?: string
          resolved?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_comments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          budget: number | null
          client_id: string | null
          created_at: string
          deliverables: string[] | null
          description: string | null
          due_date: string | null
          id: string
          scope: string | null
          status: Database["public"]["Enums"]["project_status"]
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          budget?: number | null
          client_id?: string | null
          created_at?: string
          deliverables?: string[] | null
          description?: string | null
          due_date?: string | null
          id?: string
          scope?: string | null
          status?: Database["public"]["Enums"]["project_status"]
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          budget?: number | null
          client_id?: string | null
          created_at?: string
          deliverables?: string[] | null
          description?: string | null
          due_date?: string | null
          id?: string
          scope?: string | null
          status?: Database["public"]["Enums"]["project_status"]
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
          workspace_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
          workspace_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
          workspace_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "owner" | "admin" | "editor" | "viewer"
      content_status: "draft" | "scheduled" | "published"
      invoice_status: "draft" | "sent" | "paid" | "overdue" | "cancelled"
      plan_tier: "free" | "pro" | "studio" | "enterprise"
      project_status: "proposal" | "active" | "completed" | "cancelled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["owner", "admin", "editor", "viewer"],
      content_status: ["draft", "scheduled", "published"],
      invoice_status: ["draft", "sent", "paid", "overdue", "cancelled"],
      plan_tier: ["free", "pro", "studio", "enterprise"],
      project_status: ["proposal", "active", "completed", "cancelled"],
    },
  },
} as const
