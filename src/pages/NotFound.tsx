import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Unplug, Home, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "CloveLib Studios - Page Not Found";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in opacity-0" style={{ animationDelay: "0ms" }}>
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Unplug className="h-24 w-24 md:h-32 md:w-32 text-primary/20 animate-float" />
          </div>
        </div>

        {/* Error message */}
        <div className="space-y-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground">
            Oops! The page you're looking for seems to have wandered off into the void.
            Let's get you back to where you belong.
          </p>
          <p className="text-sm text-muted-foreground bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 font-mono">
            <span className="text-destructive">Error:</span> Could not find route <span className="text-primary">{location.pathname}</span>
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/support">
              <Search className="h-4 w-4" />
              Get Help
            </Link>
          </Button>
        </div>

        {/* Quick links */}
        <div className="mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <p className="text-sm text-muted-foreground mb-4">Quick Links:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/docs/clovelibapi" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
              CloveLibAPI Docs
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link to="/docs/estrocord" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
              Estrocord Docs
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link to="/support" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
              Support Center
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;