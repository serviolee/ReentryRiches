import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navigation from "@/components/Navigation";

export default function IncomeInput() {
  const [, setLocation] = useLocation();
  const [income, setIncome] = useState("");
  const [frequency, setFrequency] = useState("monthly");

  const handleNext = () => {
    console.log('Next clicked with:', { income, frequency });
    setLocation('/expense-input');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            Let's build your budget and savings plan
          </h1>

          <div className="bg-card border rounded-xl p-8 space-y-8">
            <div className="space-y-4">
              <Label htmlFor="income" className="text-lg font-medium">
                What's your take home pay?
              </Label>
              <Input
                id="income"
                type="number"
                placeholder="Enter amount"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="text-lg h-12"
                data-testid="input-income"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-medium">How often do you get paid?</Label>
              <RadioGroup value={frequency} onValueChange={setFrequency}>
                <div className="flex items-center space-x-3 p-4 rounded-lg hover-elevate border">
                  <RadioGroupItem value="weekly" id="weekly" data-testid="radio-weekly" />
                  <Label htmlFor="weekly" className="cursor-pointer flex-1 font-normal">
                    Weekly
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg hover-elevate border">
                  <RadioGroupItem value="biweekly" id="biweekly" data-testid="radio-biweekly" />
                  <Label htmlFor="biweekly" className="cursor-pointer flex-1 font-normal">
                    Biweekly (Every 2 weeks)
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg hover-elevate border">
                  <RadioGroupItem value="monthly" id="monthly" data-testid="radio-monthly" />
                  <Label htmlFor="monthly" className="cursor-pointer flex-1 font-normal">
                    Monthly
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              size="lg"
              className="w-full text-lg"
              onClick={handleNext}
              data-testid="button-next"
            >
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
