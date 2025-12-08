import { Layout } from "@/components/Layout";
import { DocSection, Command } from "@/components/DocSection";
import { Button } from "@/components/ui/button";
import { Users, ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/use-page-title";

const CPCDocs = () => {
  usePageTitle("ClovesPluralCraft - Docs");
  
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
              <h1 className="text-3xl md:text-4xl font-display font-bold">ClovesPluralCraft</h1>
              <p className="text-muted-foreground">Plural System Support (CPC)</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">
            A plugin for plural users to help proxy their messages in Minecraft, 
            allowing system members to communicate with their own identities.
          </p>
          <Button variant="hero" asChild>
            <a href="https://www.modrinth.com/plugin/cpc" target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4" />
              Download on Modrinth
            </a>
          </Button>
        </div>
      </section>

      {/* Content */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl space-y-6">
          <DocSection title="About">
            <p>
              ClovesPluralCraft (CPC) provides tools for plural systems to manage their 
              identities while playing Minecraft. Players can create systems, manage members, 
              and proxy messages as different system members.
            </p>
          </DocSection>

          <DocSection title="Features">
            <ul className="list-disc list-inside space-y-1">
              <li>Create and manage plural systems</li>
              <li>Proxy messages as different system members</li>
              <li>Easy front management</li>
              <li>Simple command-based interface</li>
              <li>No configuration required</li>
            </ul>
          </DocSection>

          <DocSection title="Installation">
            <ol className="list-decimal list-inside space-y-2">
              <li>Download ClovesPluralCraft.jar</li>
              <li>Place in <code className="bg-muted px-1 rounded">plugins</code> folder</li>
              <li>Restart your server</li>
              <li>Players can start using commands immediately</li>
            </ol>
          </DocSection>

          <DocSection title="Commands">
            <div className="space-y-0">
              <Command
                name="/system create"
                description="Create a new system"
                usage="/system create <name>"
                permission="clovespluralcraft.system"
              />
              <Command
                name="/system rename"
                description="Rename your system"
                usage="/system rename <new name>"
                permission="clovespluralcraft.system"
              />
              <Command
                name="/system remove"
                description="Remove your system"
                usage="/system remove"
                permission="clovespluralcraft.system"
              />
              <Command
                name="/front add"
                description="Add a member to the front"
                usage="/front add <name>"
                permission="clovespluralcraft.front"
              />
              <Command
                name="/front delete"
                description="Delete a member from your system"
                usage="/front delete <name>"
                permission="clovespluralcraft.front"
              />
              <Command
                name="/front set"
                description="Set who is currently fronting"
                usage="/front set <name>"
                permission="clovespluralcraft.front"
              />
              <Command
                name="/front clear"
                description="Clear the current front"
                usage="/front clear"
                permission="clovespluralcraft.front"
              />
            </div>
          </DocSection>

          <DocSection title="Command Aliases">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><code className="bg-muted px-1 rounded">/system</code> can also be used as <code className="bg-muted px-1 rounded">/sys</code></li>
              <li><code className="bg-muted px-1 rounded">/front</code> can also be used as <code className="bg-muted px-1 rounded">/member</code>, <code className="bg-muted px-1 rounded">/proxy</code>, <code className="bg-muted px-1 rounded">/f</code>, or <code className="bg-muted px-1 rounded">/fr</code></li>
            </ul>
          </DocSection>

          <DocSection title="Permissions">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><code className="bg-muted px-1 rounded">clovespluralcraft.system</code> - Manage your system (default: all players)</li>
              <li><code className="bg-muted px-1 rounded">clovespluralcraft.front</code> - Manage your front (default: all players)</li>
            </ul>
          </DocSection>
        </div>
      </section>
    </Layout>
  );
};

export default CPCDocs;
