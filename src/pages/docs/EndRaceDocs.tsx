import { Layout } from "@/components/Layout";
import { DocSection } from "@/components/DocSection";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Trophy, ArrowLeft, Download, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/use-page-title";

const EndRaceDocs = () => {
  usePageTitle("EndRace - Docs");
  
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
              <Trophy className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">EndRace</h1>
              <p className="text-muted-foreground">End Portal Speedrun Tracker</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">
            Track how long players take to reach the End portal with the required Eyes of Ender 
            from the moment they join the server.
          </p>
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
                  href="https://www.modrinth.com/plugin/endrace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  Modrinth
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://www.curseforge.com/minecraft/mc-mods/endrace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  CurseForge
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* Content */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl space-y-6">
          <DocSection title="How It Works">
            <p>
              EndRace automatically tracks each player&apos;s journey from when they first join the server 
              until they reach the End portal with the required Eyes of Ender. The timer starts 
              on join and stops when the player is ready to enter the End.
            </p>
          </DocSection>

          <DocSection title="Features">
            <ul className="list-disc list-inside space-y-1">
              <li>Automatic timer from server join</li>
              <li>Tracks time to reach End portal</li>
              <li>Requires Eyes of Ender to complete</li>
              <li>No configuration required</li>
              <li>Lightweight and simple</li>
            </ul>
          </DocSection>

          <DocSection title="Installation">
            <ol className="list-decimal list-inside space-y-2">
              <li>Download EndRace.jar</li>
              <li>Place in <code className="bg-muted px-1 rounded">plugins</code> folder</li>
              <li>Start your server</li>
              <li>Tracking begins automatically for all players</li>
            </ol>
          </DocSection>
        </div>
      </section>
    </Layout>
  );
};

export default EndRaceDocs;