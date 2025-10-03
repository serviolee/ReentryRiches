import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet, LineChart, BookOpen } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Smart Budget Management",
    description: "Take control of your money with personalized budgeting tools that adapt to your unique situation. Track every dollar and see where your money goes.",
    cta: "Start Budgeting",
    testId: "button-start-budgeting"
  },
  {
    icon: LineChart,
    title: "Track Your Progress",
    description: "Watch your savings grow with visual progress tracking. Set milestones, celebrate wins, and stay motivated on your journey to financial freedom.",
    cta: "See Your Progress",
    testId: "button-see-progress"
  },
  {
    icon: BookOpen,
    title: "Learn Financial Skills",
    description: "Build confidence with educational resources designed for your success. From credit building to investment basics, we've got you covered.",
    cta: "Explore Resources",
    testId: "button-explore-resources"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How We Help You Achieve Your Goals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three powerful ways to transform your financial future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 hover-elevate">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full"
                data-testid={benefit.testId}
                onClick={() => console.log(`${benefit.cta} clicked`)}
              >
                {benefit.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
