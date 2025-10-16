import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, CheckCircle2, AlertCircle } from "lucide-react";

export const Dashboard = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your business at a glance
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time dashboard with AI-powered insights and recommendations
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Revenue Card */}
            <Card className="border-border/50 hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Revenue (30d)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$12,450</div>
                <p className="text-xs text-green-600 mt-1">+23% from last month</p>
              </CardContent>
            </Card>

            {/* Active Projects */}
            <Card className="border-border/50 hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Active Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
                <p className="text-xs text-muted-foreground mt-1">3 due this week</p>
              </CardContent>
            </Card>

            {/* Completed Tasks */}
            <Card className="border-border/50 hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24</div>
                <p className="text-xs text-muted-foreground mt-1">This month</p>
              </CardContent>
            </Card>

            {/* Outstanding */}
            <Card className="border-border/50 hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Outstanding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$3,200</div>
                <p className="text-xs text-orange-600 mt-1">2 invoices overdue</p>
              </CardContent>
            </Card>
          </div>

          {/* AI Suggestion Card */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white text-sm">AI</span>
                </div>
                Next Best Action
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Based on your pipeline, I recommend following up with <span className="font-semibold text-foreground">Acme Corp</span> on the 
                $8,500 proposal sent 3 days ago. Success probability: <span className="text-green-600 font-semibold">82%</span>
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-medium hover:opacity-90 transition-opacity">
                  Generate Follow-up
                </button>
                <button className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors">
                  View Proposal
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
