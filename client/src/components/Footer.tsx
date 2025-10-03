export default function Footer() {
  return (
    <footer className="border-t py-12 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <span className="text-lg font-bold">ReentryRiches</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Empowering financial futures, one step at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
