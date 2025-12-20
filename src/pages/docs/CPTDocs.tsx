import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Users, ArrowLeft, Download, ChevronDown, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/use-page-title";

const CPTDocs = () => {
  usePageTitle("ClovePluralTale - Docs");
  
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
              <h1 className="text-3xl md:text-4xl font-display font-bold">ClovePluralTale</h1>
              <p className="text-muted-foreground">Plural System Support for Hytale (CPT)</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">
            A plugin for plural users to help proxy their messages in Hytale, 
            allowing system members to communicate with their own identities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="hero" size="lg">
                  <Download className="h-4 w-4" />
                  Download
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <a
                    href="https://www.orbis.place/plugin/clovespluraltale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    Orbis
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://www.unifiedhytale.com/project/clovespluraltale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    UnifiedHytale
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://www.modtale.com/plugin/clovespluraltale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    ModTale
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://www.curseforge.com/hytale/mods/clovespluraltale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    CurseForge
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="lg" asChild>
              <a href="https://api.clovelib.win" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Web Dashboard
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
            Documentation for ClovePluralTale is currently being prepared.
          </p>

          <div className="rounded-xl border border-border/50 bg-card p-8 mb-8">
            <h3 className="font-display text-xl font-semibold mb-4">What to Expect</h3>
            <ul className="text-left text-muted-foreground space-y-3 max-w-lg mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Complete installation guide</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Command reference and usage examples</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Configuration options</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Permissions guide</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span>Web dashboard integration</span>
              </li>
            </ul>
          </div>

          <p className="text-muted-foreground mb-6">
            In the meantime, check out our other plugin documentation, use the web dashboard, or join our Discord for support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <Link to="/">Browse Other Plugins</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://api.clovelib.win" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Web Dashboard
              </a>
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

export default CPTDocs;