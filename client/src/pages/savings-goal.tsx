import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navigation from "@/components/Navigation";

export default function SavingsGoal() {
  const [, setLocation] = useLocation();
  
  const [goalType, setGoalType] = useState("emergency fund");
  const [amount, setAmount] = useState("");
  const [months, setMonths] = useState("");

  const handleCreatePlan = () => {
    console.log('Create plan clicked with:', { goalType, amount, months });
    // TODO: Create budget and savings plan
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            Set your savings goal
          </h1>

          <div className="bg-card border rounded-xl p-8 space-y-8">
            <div className="space-y-4">
              <Label className="text-lg font-medium">What are you saving toward?</Label>
              <RadioGroup value={goalType} onValueChange={setGoalType}>
                <div className="flex items-center space-x-3 p-4 rounded-lg hover-elevate border">
                  <RadioGroupItem value="emergency fund" id="emergency" data-testid="radio-emergency" />
                  <Label htmlFor="emergency" className="cursor-pointer flex-1 font-normal">
                    Emergency Fund
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg hover-elevate border">
                  <RadioGroupItem value="travel" id="travel" data-testid="radio-travel" />
                  <Label htmlFor="travel" className="cursor-pointer flex-1 font-normal">
                    Travel
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg hover-elevate border">
                  <RadioGroupItem value="car" id="car" data-testid="radio-car" />
                  <Label htmlFor="car" className="cursor-pointer flex-1 font-normal">
                    Car
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg hover-elevate border">
                  <RadioGroupItem value="education" id="education" data-testid="radio-education" />
                  <Label htmlFor="education" className="cursor-pointer flex-1 font-normal">
                    Education
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg hover-elevate border">
                  <RadioGroupItem value="other" id="other" data-testid="radio-other" />
                  <Label htmlFor="other" className="cursor-pointer flex-1 font-normal">
                    Other
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label htmlFor="amount" className="text-lg font-medium">
                How much do you want to save?
              </Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg h-12"
                data-testid="input-amount"
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="months" className="text-lg font-medium">
                How many months to reach your goal?
              </Label>
              <Input
                id="months"
                type="number"
                placeholder="Enter number of months"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                className="text-lg h-12"
                data-testid="input-months"
              />
            </div>

            <Button
              size="lg"
              className="w-full text-lg"
              onClick={handleCreatePlan}
              data-testid="button-create-plan"
            >
              Create my budget and savings plan
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
