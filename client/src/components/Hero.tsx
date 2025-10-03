import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Turning Second Chances to Strong Finances
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <div className="flex items-start gap-3 text-left">
            <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-lg lg:text-xl text-muted-foreground">
              Get smart money guidance tailored to your goals.
            </p>
          </div>
          <div className="flex items-start gap-3 text-left">
            <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-lg lg:text-xl text-muted-foreground">
              Track your savings progress with ease.
            </p>
          </div>
          <div className="flex items-start gap-3 text-left">
            <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-lg lg:text-xl text-muted-foreground">
              Build lasting confidence through financial skills.
            </p>
          </div>
        </div>
        
        <Button
          size="lg"
          className="text-lg px-8 py-6 h-auto"
          data-testid="button-build-plan"
          onClick={() => console.log('Build me a plan clicked')}
        >
          Build me a plan
        </Button>
      </div>
    </section>
  );
}
