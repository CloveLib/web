import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Users, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/use-page-title";

const CPWDocs = () => {
  usePageTitle("CloveLibWeb - Docs");
  
  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero">
        <div className="container py-12 md:py-16">
          <div className="mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" />
                Back to Plugins
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Users className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">CloveLibWeb</h1>
              <p className="text-muted-foreground">Web Dashboard for Plural Systems (CPW)</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">
            A web-based dashboard for managing plural systems across Minecraft and Hytale servers. 
            Provides an easy-to-use interface for system and member management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://fancyspaces.net/spaces/cpp" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Visit FancySpaces
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://api.clovelib.win" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Open Web Dashboard
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative mb-8">
            {/* Animated circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-32 rounded-full border-4 border-primary/20 animate-ping" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-24 rounded-full border-4 border-primary/40 animate-pulse" />
            </div>
            <div className="relative flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary animate-bounce" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            COMING SOON!
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Documentation for CloveLibWeb is currently being prepared.
          </p>

          <div className="rounded-xl border border-border/50 bg-card p-8 mb-8">
            <h3 className="font-display text-xl font-semibold mb-4">What to Expect</h3>
            <ul className="text-left text-muted-foreground space-y-3 max-w-lg mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Getting started guide for the web dashboard</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>System and member management instructions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Integration with CPC and CPT</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Privacy and data management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Troubleshooting and FAQ</span>
              </li>
            </ul>
          </div>

          <p className="text-muted-foreground mb-6">
            In the meantime, you can start using the web dashboard or join our Discord for support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <a href="https://api.clovelib.win" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Open Dashboard
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">Browse Other Plugins</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://discord.gg/k8HrBvDaQn" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CPWDocs;