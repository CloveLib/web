import { Layout } from "@/components/Layout";
import { DocSection, CodeBlock, Command } from "@/components/DocSection";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/use-page-title";

const WingSyncDocs = () => {
  usePageTitle("WingSync - Docs");
  
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
              <MessageSquare className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">WingSync</h1>
              <p className="text-muted-foreground">Discord Whitelist Sync</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">
            Synchronize your Minecraft server whitelist with Discord, allowing users 
            to add themselves via Discord bot commands.
          </p>
          <Button variant="hero" asChild>
            <a href="https://www.modrinth.com/plugin/wingsync" target="_blank" rel="noopener noreferrer">
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
              <li>Discord bot integration for whitelist management</li>
              <li>Players can whitelist themselves via Discord</li>
              <li>Admin controls for removing players</li>
              <li>File-based or MySQL storage options</li>
              <li>Customizable messages</li>
            </ul>
          </DocSection>

          <DocSection title="Installation">
            <ol className="list-decimal list-inside space-y-2">
              <li>Download WingSync.jar</li>
              <li>Place in <code className="bg-muted px-1 rounded">plugins</code> folder</li>
              <li>Restart your server to generate config</li>
              <li>Create a Discord bot at <code className="bg-muted px-1 rounded">discord.com/developers/applications</code></li>
              <li>Copy the bot token to the config</li>
              <li>Set your Discord admin ID</li>
              <li>Use <code className="bg-muted px-1 rounded">/wsreload</code> in-game to connect the bot</li>
            </ol>
          </DocSection>

          <DocSection title="Configuration">
            <CodeBlock>{`# WingSync - Discord Whitelist Sync Plugin

# ========================================
# DISCORD BOT CONFIGURATION
# ========================================
# To get your bot token:
# 1. Go to https://discord.com/developers/applications
# 2. Create a new application or select existing one
# 3. Go to "Bot" section
# 4. Click "Reset Token" or "Copy" to get your token
# 5. Paste it below (keep the quotes!)
#
# After updating this file, use /wsreload in-game to connect the bot.
# ========================================

discord:
  # Your Discord bot token - REQUIRED
  token: "YOUR_DISCORD_BOT_TOKEN"

  # Your Discord user ID (for admin permissions on /remove command)
  # To get your ID: Enable Developer Mode in Discord settings,
  # then right-click yourself and click "Copy User ID"
  admin_id: "YOUR_DISCORD_ADMIN_ID"

# ========================================
# DATABASE CONFIGURATION
# ========================================
# By default, WingSync uses file-based storage (playerdata.json)
# Enable MySQL below if you want database storage instead.

mysql:
  enabled: false
  host: localhost
  port: 3306
  database: minecraft
  username: root
  password: password123

# ========================================
# MESSAGES
# ========================================
plugin:
  messages:
    enabled: "WingSync has been enabled!"
    disabled: "WingSync has been disabled!"
    whitelist_added: "Player {player} has been added to the whitelist by {user}."
    whitelist_removed: "Player {player} has been removed from the whitelist by {user}."
    no_permission: "You do not have permission to perform this action."`}</CodeBlock>
          </DocSection>

          <DocSection title="Commands">
            <div className="space-y-0">
              <Command
                name="/wsreload"
                description="Reload configuration and reconnect the Discord bot"
                permission="wingsync.admin"
              />
            </div>
          </DocSection>

          <DocSection title="Discord Commands">
            <p className="mb-4">Users can use these commands in your Discord server:</p>
            <div className="space-y-0">
              <Command
                name="/whitelist"
                description="Add yourself to the server whitelist"
                usage="/whitelist <minecraft_username>"
              />
              <Command
                name="/remove"
                description="Remove a player from the whitelist (admin only)"
                usage="/remove <minecraft_username>"
              />
            </div>
          </DocSection>

          <DocSection title="Setup Guide">
            <h3 className="font-semibold text-foreground mb-2">Creating a Discord Bot:</h3>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>Go to the Discord Developer Portal</li>
              <li>Create a new application</li>
              <li>Navigate to the "Bot" section</li>
              <li>Click "Reset Token" to generate a new token</li>
              <li>Copy the token to your config file</li>
              <li>Enable "Message Content Intent" under Privileged Gateway Intents</li>
            </ol>
            <h3 className="font-semibold text-foreground mb-2">Getting Your Admin ID:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open Discord Settings</li>
              <li>Go to Advanced and enable Developer Mode</li>
              <li>Right-click your username</li>
              <li>Click "Copy User ID"</li>
              <li>Paste into the config</li>
            </ol>
          </DocSection>
        </div>
      </section>
    </Layout>
  );
};

export default WingSyncDocs;
