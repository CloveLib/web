import { Layout } from "@/components/Layout";
import { DocSection, CodeBlock, Command } from "@/components/DocSection";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Lock, ArrowLeft, Download, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/use-page-title";

const JailedWingsDocs = () => {
  usePageTitle("JailedWings - Docs");
  
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
              <Lock className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">JailedWings</h1>
              <p className="text-muted-foreground">Simple Jail System</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">
            A simple and lightweight jail plugin for Minecraft servers with 
            easy-to-use commands and configurable jail/unjail locations.
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
                  href="https://www.modrinth.com/plugin/jailedwings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  Modrinth
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://www.curseforge.com/minecraft/bukkit-plugins/jailedwinds"
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
          <DocSection title="Features">
            <ul className="list-disc list-inside space-y-1">
              <li>Simple jail and unjail system</li>
              <li>Configurable jail and release locations</li>
              <li>Easy command-based management</li>
              <li>Permission-based access control</li>
              <li>Lightweight and efficient</li>
            </ul>
          </DocSection>

          <DocSection title="Installation">
            <ol className="list-decimal list-inside space-y-2">
              <li>Ensure CloveLib is installed</li>
              <li>Download JailedWings.jar</li>
              <li>Place in your <code className="bg-muted px-1 rounded">plugins</code> folder</li>
              <li>Restart your server</li>
              <li>Set jail and unjail locations using commands</li>
            </ol>
          </DocSection>

          <DocSection title="Configuration">
            <CodeBlock>{`# Copyright (c) 2025 Clove Twilight
# Licensed under the MIT License

# Jail location - where players are sent when jailed
jail:
  world: world
  x: 0.0
  y: 64.0
  z: 0.0
  yaw: 0.0
  pitch: 0.0

# Unjail location - where players are teleported when released
unjail:
  world: world
  x: 0.0
  y: 64.0
  z: 0.0
  yaw: 0.0
  pitch: 0.0`}</CodeBlock>
          </DocSection>

          <DocSection title="Commands">
            <div className="space-y-0">
              <Command
                name="/setjail"
                description="Set the jail location"
                usage="/setjail [x y z]"
                permission="jailplugin.setjail"
              />
              <Command
                name="/setunjail"
                description="Set the unjail/release location"
                usage="/setunjail [x y z]"
                permission="jailplugin.setunjail"
              />
              <Command
                name="/jail"
                description="Send a player to jail"
                usage="/jail <player>"
                permission="jailplugin.jail"
              />
              <Command
                name="/unjail"
                description="Release a player from jail"
                usage="/unjail <player>"
                permission="jailplugin.unjail"
              />
              <Command
                name="/jailreload"
                description="Reload the plugin configuration"
                permission="jailplugin.reload"
              />
              <Command
                name="/jailhelp"
                description="Display help for JailedWings commands"
              />
            </div>
          </DocSection>

          <DocSection title="Permissions">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><code className="bg-muted px-1 rounded">jailplugin.setjail</code> - Set the jail location (default: op)</li>
              <li><code className="bg-muted px-1 rounded">jailplugin.setunjail</code> - Set the unjail location (default: op)</li>
              <li><code className="bg-muted px-1 rounded">jailplugin.jail</code> - Jail players (default: op)</li>
              <li><code className="bg-muted px-1 rounded">jailplugin.unjail</code> - Release players from jail (default: op)</li>
              <li><code className="bg-muted px-1 rounded">jailplugin.reload</code> - Reload plugin configuration (default: op)</li>
            </ul>
          </DocSection>
        </div>
      </section>
    </Layout>
  );
};

export default JailedWingsDocs;