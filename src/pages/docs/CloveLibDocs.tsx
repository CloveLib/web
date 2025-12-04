import { Layout } from "@/components/Layout";
import { DocSection, CodeBlock } from "@/components/DocSection";
import { Button } from "@/components/ui/button";
import { Library, ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/use-page-title";

const CloveLibDocs = () => {
  usePageTitle("CloveLib - Docs");
  
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
              <Library className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">CloveLib</h1>
              <p className="text-muted-foreground">Core Library</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">
            The foundation library providing essential utilities, APIs, and shared functionality 
            used across all Clove plugins.
          </p>
          <Button variant="hero" asChild>
            <a href="https://www.modrinth.com/plugin/clovelib" target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4" />
              Download on Modrinth
            </a>
          </Button>
        </div>
      </section>

      {/* Content */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl space-y-6">
          <DocSection title="Overview">
            <p>
              CloveLib is the core dependency required by all other Clove plugins. It provides 
              shared utilities, configuration management, database connections, and common APIs 
              that other plugins build upon.
            </p>
            <p className="mt-4">
              <strong className="text-foreground">Important:</strong> This plugin must be installed 
              before any other Clove plugin.
            </p>
          </DocSection>

          <DocSection title="Installation">
            <ol className="list-decimal list-inside space-y-2">
              <li>Download the latest CloveLib.jar</li>
              <li>Place it in your server&apos;s <code className="bg-muted px-1 rounded">plugins</code> folder</li>
              <li>Restart your server</li>
            </ol>
          </DocSection>

          <DocSection title="Dependencies">
            <ul className="list-disc list-inside space-y-1">
              <li>Spigot/Paper 1.16.5+</li>
              <li>Java 17 or higher</li>
            </ul>
          </DocSection>
        </div>
      </section>
    </Layout>
  );
};

export default CloveLibDocs;
