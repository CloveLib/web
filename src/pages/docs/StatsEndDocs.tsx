import { Layout } from "@/components/Layout";
import { DocSection, Command } from "@/components/DocSection";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BarChart3, ArrowLeft, Download, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/use-page-title";

const StatsEndDocs = () => {
  usePageTitle("StatsEnd - Docs");
  
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
              <BarChart3 className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">StatsEnd</h1>
              <p className="text-muted-foreground">Dragon Event Tracking</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">
            A Minecraft Paper plugin for tracking dragon event achievements and rewarding 
            players for their End dimension accomplishments.
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
                  href="https://www.modrinth.com/plugin/statsend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  Modrinth
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://www.curseforge.com/minecraft/mc-mods/statsend"
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
            <p className="mb-4">
              Start a dragon event with <code className="bg-muted px-1 rounded">/estart</code> and 
              the plugin will track achievements for 24 hours after the first dragon dies. 
              Use the generated file to reward your users manually.
            </p>
            <ul className="space-y-2">
              <li><span className="text-xl mr-2">🥚</span> Anyone who enters the End during the event</li>
              <li><span className="text-xl mr-2">🗡️</span> The person who does the final strike to the first dragon</li>
              <li><span className="text-xl mr-2">⚔️</span> Players who do any final strike to any dragon within 24 hours after the first dragon dies</li>
              <li><span className="text-xl mr-2">💪🏻</span> The person who does the most damage to the dragon (excluding the final striker)</li>
              <li><span className="text-xl mr-2">🪽</span> The person to get the first Elytra</li>
              <li><span className="text-xl mr-2">📦</span> The person to get the first Shulker Box</li>
            </ul>
          </DocSection>

          <DocSection title="Features">
            <ul className="list-disc list-inside space-y-1">
              <li>Dragon event tracking</li>
              <li>Achievement-based rewards system</li>
              <li>First Elytra and Shulker Box tracking</li>
              <li>Damage contribution tracking</li>
              <li>File output for manual rewards</li>
              <li>No configuration required</li>
            </ul>
          </DocSection>

          <DocSection title="Installation">
            <ol className="list-decimal list-inside space-y-2">
              <li>Download StatsEnd.jar</li>
              <li>Place in <code className="bg-muted px-1 rounded">plugins</code> folder</li>
              <li>Start your server</li>
              <li>Use <code className="bg-muted px-1 rounded">/estart</code> to begin an event</li>
            </ol>
          </DocSection>

          <DocSection title="Commands">
            <div className="space-y-0">
              <Command
                name="/estart"
                description="Start the dragon event"
                permission="statsend.admin"
              />
              <Command
                name="/estop"
                description="Stop and reset the dragon event"
                permission="statsend.admin"
              />
            </div>
          </DocSection>

          <DocSection title="Permissions">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><code className="bg-muted px-1 rounded">statsend.admin</code> - Admin permissions for dragon event (default: op)</li>
              <li><code className="bg-muted px-1 rounded">statsend.participate</code> - Permission to participate in dragon events (default: all players)</li>
            </ul>
          </DocSection>
        </div>
      </section>
    </Layout>
  );
};

export default StatsEndDocs;