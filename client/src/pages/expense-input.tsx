import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";

export default function ExpenseInput() {
  const [, setLocation] = useLocation();
  
  const [bills, setBills] = useState({
    rent: "",
    utilities: "",
    loans: "",
    subscriptions: ""
  });

  const [spending, setSpending] = useState({
    groceries: "",
    dining: "",
    personal: ""
  });

  const handleBillChange = (category: string, value: string) => {
    setBills(prev => ({ ...prev, [category]: value }));
  };

  const handleSpendingChange = (category: string, value: string) => {
    setSpending(prev => ({ ...prev, [category]: value }));
  };

  const handleNext = () => {
    console.log('Next clicked with:', { bills, spending });
    // TODO: Navigate to next step
  };

  const handleSkip = () => {
    console.log('Skip and add later clicked');
    // TODO: Navigate to next step
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="bg-card border rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-semibold">What are your monthly bills?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="rent" className="text-base">Rent</Label>
                <Input
                  id="rent"
                  type="number"
                  placeholder="$0"
                  value={bills.rent}
                  onChange={(e) => handleBillChange('rent', e.target.value)}
                  className="h-11"
                  data-testid="input-rent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="utilities" className="text-base">Utilities</Label>
                <Input
                  id="utilities"
                  type="number"
                  placeholder="$0"
                  value={bills.utilities}
                  onChange={(e) => handleBillChange('utilities', e.target.value)}
                  className="h-11"
                  data-testid="input-utilities"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="loans" className="text-base">Loans</Label>
                <Input
                  id="loans"
                  type="number"
                  placeholder="$0"
                  value={bills.loans}
                  onChange={(e) => handleBillChange('loans', e.target.value)}
                  className="h-11"
                  data-testid="input-loans"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subscriptions" className="text-base">Subscriptions</Label>
                <Input
                  id="subscriptions"
                  type="number"
                  placeholder="$0"
                  value={bills.subscriptions}
                  onChange={(e) => handleBillChange('subscriptions', e.target.value)}
                  className="h-11"
                  data-testid="input-subscriptions"
                />
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-semibold">About how much do you spend on these each month?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="groceries" className="text-base">Groceries</Label>
                <Input
                  id="groceries"
                  type="number"
                  placeholder="$0"
                  value={spending.groceries}
                  onChange={(e) => handleSpendingChange('groceries', e.target.value)}
                  className="h-11"
                  data-testid="input-groceries"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dining" className="text-base">Dining/Entertainment</Label>
                <Input
                  id="dining"
                  type="number"
                  placeholder="$0"
                  value={spending.dining}
                  onChange={(e) => handleSpendingChange('dining', e.target.value)}
                  className="h-11"
                  data-testid="input-dining"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="personal" className="text-base">Personal Items</Label>
                <Input
                  id="personal"
                  type="number"
                  placeholder="$0"
                  value={spending.personal}
                  onChange={(e) => handleSpendingChange('personal', e.target.value)}
                  className="h-11"
                  data-testid="input-personal"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={handleSkip}
              data-testid="button-skip"
            >
              Skip and add later
            </Button>
            <Button
              size="lg"
              className="flex-1"
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
