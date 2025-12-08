import { Layout } from "@/components/Layout";
import { DocSection, CodeBlock, Command } from "@/components/DocSection";
import { Button } from "@/components/ui/button";
import { Gavel, ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/use-page-title";

const EstrocordDocs = () => {
  usePageTitle("Estrocord - Docs");
  
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
              <Gavel className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">Estrocord</h1>
              <p className="text-muted-foreground">Roleplay & Moderation System</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">
            A comprehensive roleplay and server moderation plugin with vein mining, 
            base management, flight zones, teleportation, and fun social commands.
          </p>
          <Button variant="hero" asChild>
            <a href="https://www.modrinth.com/plugin/estrocord" target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4" />
              Download on Modrinth
            </a>
          </Button>
        </div>
      </section>

      {/* Content */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl space-y-6">
          <DocSection title="Features">
            <ul className="list-disc list-inside space-y-1">
              <li>Vein miner for trees and ores with configurable limits</li>
              <li>Base system with teleportation and visiting</li>
              <li>Flight management with base radius and communal zones</li>
              <li>Teleport request system (tpask/tpaccept/tpdeny)</li>
              <li>Playtime tracking</li>
              <li>Ban management system</li>
              <li>Fun roleplay commands (kiss, kitty)</li>
              <li>Growth and shrink potions</li>
              <li>Jail system integration</li>
            </ul>
          </DocSection>

          <DocSection title="Installation">
            <ol className="list-decimal list-inside space-y-2">
              <li>Ensure CloveLib is installed</li>
              <li>Download Estrocord.jar</li>
              <li>Place in <code className="bg-muted px-1 rounded">plugins</code> folder</li>
              <li>Restart your server</li>
              <li>Configure in <code className="bg-muted px-1 rounded">plugins/EstrocordPlugin/config.yml</code></li>
            </ol>
          </DocSection>

          <DocSection title="Configuration">
            <CodeBlock>{`# Estrocord Plugin Config

# ========================
# Global Flight Settings
# ========================
flight:
  allflight: false # Enable global flight for all players
  base-radius: 100 # Radius around base where flight is allowed
  communal-zones:
    enabled: true # Enable communal fly zones

# ========================
# Vein-Miner Configuration
# ========================
veinminer:
  enabled: true
  tree-remover:
    max-blocks: 100
    max-height: 30
  ore-remover:
    max-blocks: 100
    max-height: 30

# ========================
# Spawn Configuration
# ========================
spawn:
  world: "world"
  x: 0.0
  y: 65.0
  z: 0.0
  yaw: 0.0
  pitch: 0.0

# ========================
# Base Configuration
# ========================
base-teleport:
  cooldown-hours: 1

# ========================
# Sounds Configuration
# ========================
sounds:
  base: "ENTITY_ENDERMAN_TELEPORT"

# ========================
# Playtime Tracking
# ========================
playtime-tracking:
  enabled: true

# ========================
# Kitty Command Messages
# ========================
kitty-command:
  messages:
    - "mrrp!"
    - "bwaa!"
    - "uwu X3 rwar *pounces on you*"
    - "nya!"
    - "meow"
    - ":3"

# ========================
# Permissions Settings
# ========================
permissions:
  enable-setspawn: true
  enable-visitbase: true
  veinminer:
    enable-trees: true
    enable-ores: true

# ========================
# Jail Configuration
# ========================
jail:
  enable-jail-checks: true`}</CodeBlock>
          </DocSection>

          <DocSection title="Commands">
            <h3 className="font-semibold text-foreground mb-3">Moderation</h3>
            <div className="space-y-0 mb-6">
              <Command
                name="/ban"
                description="Ban a player from the server"
                usage="/ban <player> [reason]"
                permission="estrocord.ban"
              />
              <Command
                name="/unban"
                description="Unban a player"
                usage="/unban <player>"
                permission="estrocord.unban"
              />
              <Command
                name="/banlist"
                description="View all banned players"
                permission="estrocord.banlist"
              />
            </div>

            <h3 className="font-semibold text-foreground mb-3">Teleportation</h3>
            <div className="space-y-0 mb-6">
              <Command
                name="/spawn"
                description="Teleport to spawn"
              />
              <Command
                name="/setspawn"
                description="Set the spawn location"
                permission="estrocord.setspawn"
              />
              <Command
                name="/tpask"
                description="Request to teleport to another player"
                usage="/tpask <player>"
                permission="estrocord.tpask"
              />
              <Command
                name="/tpaccept"
                description="Accept a teleport request"
                permission="estrocord.tpaccept"
              />
              <Command
                name="/tpdeny"
                description="Deny a teleport request"
                permission="estrocord.tpdeny"
              />
            </div>

            <h3 className="font-semibold text-foreground mb-3">Base System</h3>
            <div className="space-y-0 mb-6">
              <Command
                name="/setbase"
                description="Set your base location"
              />
              <Command
                name="/base"
                description="Teleport to your base"
              />
              <Command
                name="/visitbase"
                description="Visit another player's base"
                usage="/visitbase <player>"
                permission="estrocord.visitbase"
              />
              <Command
                name="/basefly"
                description="Toggle flight within your base radius"
                usage="/basefly <on|off>"
              />
            </div>

            <h3 className="font-semibold text-foreground mb-3">Flight Zones</h3>
            <div className="space-y-0 mb-6">
              <Command
                name="/flyzone"
                description="Create a communal flight zone"
                usage="/flyzone <x1> <y1> <z1> <x2> <y2> <z2> <name>"
                permission="estrocord.flyzone"
              />
              <Command
                name="/rmflyzone"
                description="Remove a flight zone"
                usage="/rmflyzone <name>"
                permission="estrocord.flyzone"
              />
            </div>

            <h3 className="font-semibold text-foreground mb-3">Vein Miner</h3>
            <div className="space-y-0 mb-6">
              <Command
                name="/veinminer"
                description="Toggle vein mining for ores or trees"
                usage="/veinminer <ores|trees>"
              />
            </div>

            <h3 className="font-semibold text-foreground mb-3">Utility</h3>
            <div className="space-y-0 mb-6">
              <Command
                name="/playtime"
                description="Check your total playtime"
                permission="estrocord.playtime"
              />
              <Command
                name="/spawnbook"
                description="Get a book showing all mob crafts"
              />
              <Command
                name="/estrocord"
                description="Show help information"
                usage="/estrocord <page>"
                permission="estrocord.use"
              />
              <Command
                name="/estrocordreload"
                description="Reload the plugin configuration"
                permission="estrocord.reload"
              />
            </div>

            <h3 className="font-semibold text-foreground mb-3">Fun & Roleplay</h3>
            <div className="space-y-0 mb-6">
              <Command
                name="/kiss"
                description="Kiss another player"
                usage="/kiss <player>"
                permission="estrocord.kiss"
              />
              <Command
                name="/kitty"
                description="Send a cute kitty message"
                permission="estrocord.kitty"
              />
              <Command
                name="/growthpotion"
                description="Get a growth potion"
                permission="estrocord.growthpotion"
              />
              <Command
                name="/shrinkpotion"
                description="Get a shrink potion"
                permission="estrocord.shrinkpotion"
              />
            </div>
          </DocSection>

          <DocSection title="Permissions">
            <div className="space-y-2 text-sm">
              <p><code className="bg-muted px-1 rounded">estrocord.ban</code> - Ban players (default: op)</p>
              <p><code className="bg-muted px-1 rounded">estrocord.unban</code> - Unban players (default: op)</p>
              <p><code className="bg-muted px-1 rounded">estrocord.banlist</code> - View ban list (default: op)</p>
              <p><code className="bg-muted px-1 rounded">estrocord.reload</code> - Reload config (default: op)</p>
              <p><code className="bg-muted px-1 rounded">estrocord.setspawn</code> - Set spawn (default: op)</p>
              <p><code className="bg-muted px-1 rounded">estrocord.visitbase</code> - Visit bases (default: op)</p>
              <p><code className="bg-muted px-1 rounded">estrocord.flyzone</code> - Manage flight zones (default: op)</p>
              <p><code className="bg-muted px-1 rounded">estrocord.growthpotion</code> - Get growth potion (default: op)</p>
              <p><code className="bg-muted px-1 rounded">estrocord.shrinkpotion</code> - Get shrink potion (default: op)</p>
              <p><code className="bg-muted px-1 rounded">estrocord.use</code> - Use help command (default: true)</p>
              <p><code className="bg-muted px-1 rounded">estrocord.playtime</code> - Check playtime (default: true)</p>
              <p><code className="bg-muted px-1 rounded">estrocord.tpask</code> - Request teleports (default: true)</p>
              <p><code className="bg-muted px-1 rounded">estrocord.kiss</code> - Use kiss command (default: true)</p>
              <p><code className="bg-muted px-1 rounded">estrocord.kitty</code> - Use kitty command (default: true)</p>
            </div>
          </DocSection>
        </div>
      </section>
    </Layout>
  );
};

export default EstrocordDocs;
