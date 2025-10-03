import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold">ReentryRiches</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              data-testid="button-login"
              onClick={() => console.log('Login clicked')}
            >
              Log In
            </Button>
            <Button
              data-testid="button-signup"
              onClick={() => console.log('Sign up clicked')}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
