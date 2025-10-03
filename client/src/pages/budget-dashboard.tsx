import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { DollarSign, TrendingUp, Target, Wallet, CheckCircle, AlertTriangle } from "lucide-react";

export default function BudgetDashboard() {
  const [, setLocation] = useLocation();

  // Sample data - in a real app, this would come from user input
  const monthlyIncome = 3000;
  const expenses = {
    rent: 1200,
    utilities: 150,
    loans: 300,
    subscriptions: 50,
    groceries: 400,
    dining: 200,
    personal: 100
  };
  
  const savingsGoal = {
    type: "Emergency Fund",
    target: 5000,
    months: 12
  };

  const totalExpenses = Object.values(expenses).reduce((sum, val) => sum + val, 0);
  const availableForSavings = monthlyIncome - totalExpenses;
  const monthlySavingsNeeded = savingsGoal.target / savingsGoal.months;
  const currentSavings = 0; // Starting point

  // Calculate savings progress percentage
  const savingsProgressPercentage = (currentSavings / savingsGoal.target) * 100;

  // Expense breakdown data for pie chart
  const expenseData = [
    { name: 'Rent', value: expenses.rent, color: '#10b981' },
    { name: 'Utilities', value: expenses.utilities, color: '#3b82f6' },
    { name: 'Loans', value: expenses.loans, color: '#8b5cf6' },
    { name: 'Subscriptions', value: expenses.subscriptions, color: '#f59e0b' },
    { name: 'Groceries', value: expenses.groceries, color: '#ec4899' },
    { name: 'Dining/Entertainment', value: expenses.dining, color: '#14b8a6' },
    { name: 'Personal Items', value: expenses.personal, color: '#f97316' },
  ].filter(item => item.value > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl lg:text-4xl font-bold">Your Budget Dashboard</h1>
            <p className="text-muted-foreground">Track your spending and savings progress</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card data-testid="card-income">
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="text-income-value">${monthlyIncome.toLocaleString()}</div>
              </CardContent>
            </Card>

            <Card data-testid="card-expenses">
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="text-expenses-value">${totalExpenses.toLocaleString()}</div>
              </CardContent>
            </Card>

            <Card data-testid="card-available">
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Available to Save</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="text-available-value">${availableForSavings.toLocaleString()}</div>
              </CardContent>
            </Card>

            <Card data-testid="card-goal">
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Savings Goal</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" data-testid="text-goal-value">${savingsGoal.target.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">{savingsGoal.type}</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card data-testid="card-spending-chart">
              <CardHeader>
                <CardTitle>Spending Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `$${value}`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-savings-chart">
              <CardHeader>
                <CardTitle>Savings Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Current Progress</span>
                    <span className="text-sm font-medium" data-testid="text-progress-percentage">{savingsProgressPercentage.toFixed(0)}%</span>
                  </div>
                  <Progress value={savingsProgressPercentage} className="h-4" data-testid="progress-savings" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>${currentSavings.toLocaleString()} saved</span>
                    <span>${savingsGoal.target.toLocaleString()} goal</span>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <p className="text-sm text-muted-foreground">Monthly savings needed: ${monthlySavingsNeeded.toFixed(2)}</p>
                  <p className={`flex items-center gap-2 ${availableForSavings >= monthlySavingsNeeded ? "text-primary font-medium" : "text-destructive font-medium"}`}>
                    {availableForSavings >= monthlySavingsNeeded ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        <span>You can meet your goal!</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="h-4 w-4" />
                        <span>Consider adjusting expenses or timeline</span>
                      </>
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setLocation('/')}
              data-testid="button-back-home"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
