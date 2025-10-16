import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, FileText, Calendar, DollarSign, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Business Assistant",
    description: "Generate proposals, pricing, and follow-ups. Get intelligent next-best-action suggestions.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Users,
    title: "Client CRM",
    description: "Manage contacts, projects, and relationships in one centralized hub.",
    gradient: "from-accent to-primary",
  },
  {
    icon: FileText,
    title: "Smart Invoicing",
    description: "Create beautiful invoices, track payments, and get paid faster with Stripe integration.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Calendar,
    title: "Content Calendar",
    description: "Plan, schedule, and automate your content across all platforms.",
    gradient: "from-accent to-primary",
  },
  {
    icon: DollarSign,
    title: "Revenue Tracking",
    description: "Real-time insights into income, outstanding payments, and financial health.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Reduce admin time by 60% with intelligent automation and templates.",
    gradient: "from-accent to-primary",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              run your business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            All your tools in one place. No more juggling spreadsheets, apps, and platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 backdrop-blur-sm bg-card/50"
            >
              <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
