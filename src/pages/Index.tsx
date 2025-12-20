import { Layout } from "@/components/Layout";
import { PluginCard } from "@/components/PluginCard";
import { usePageTitle } from "@/hooks/use-page-title";
import { AdSense } from "@/components/AdSense";
import { Button } from "@/components/ui/button";
import {
  Library,
  MessageSquare,
  Lock,
  Gavel,
  Users,
  BarChart3,
  Trophy,
  ArrowRight,
} from "lucide-react";

const minecraftPlugins = [
  {
    name: "CloveLibAPI",
    description: "Core library providing essential utilities used across all Clove plugins.",
    icon: <Library className="h-6 w-6" />,
    version: "5.0.0",
    docsUrl: "/docs/clovelibapi",
    downloadStores: [
      { name: "Modrinth", url: "https://www.modrinth.com/plugin/clovelibapi" },
      { name: "CurseForge", url: "https://www.curseforge.com/minecraft/bukkit-plugins/clovelibapi" },
    ],
  },
  {
    name: "Estrocord",
    description: "Roleplay and moderation system with vein mining, base management, flight zones, and social commands.",
    icon: <Gavel className="h-6 w-6" />,
    version: "5.0.0",
    docsUrl: "/docs/estrocord",
    downloadStores: [
      { name: "Modrinth", url: "https://www.modrinth.com/plugin/estrocord" },
      { name: "CurseForge", url: "https://www.curseforge.com/minecraft/bukkit-plugins/estrocord" },
    ],
  },
  {
    name: "JailedWings",
    description: "Simple and lightweight jail system with configurable jail and release locations.",
    icon: <Lock className="h-6 w-6" />,
    version: "5.0.0",
    docsUrl: "/docs/jailedwings",
    downloadStores: [
      { name: "Modrinth", url: "https://www.modrinth.com/plugin/jailedwings" },
      { name: "CurseForge", url: "https://www.curseforge.com/minecraft/bukkit-plugins/jailedwinds" },
    ],
  },
  {
    name: "WingSync",
    description: "Discord to Minecraft whitelist sync, allowing users to whitelist themselves via Discord.",
    icon: <MessageSquare className="h-6 w-6" />,
    version: "5.0.0",
    docsUrl: "/docs/wingsync",
    downloadStores: [
      { name: "Modrinth", url: "https://www.modrinth.com/plugin/wingsync" },
//      { name: "CurseForge", url: "https://www.curseforge.com/minecraft/bukkit-plugins/wingsync" },
    ],
  },
  {
    name: "ClovesPluralCraft",
    description: "Plural system support for Minecraft servers, enabling identity management for plural users.",
    icon: <Users className="h-6 w-6" />,
    version: "5.0.0",
    docsUrl: "/docs/cpc",
    downloadStores: [
      { name: "Modrinth", url: "https://www.modrinth.com/plugin/cpc" },
      { name: "CurseForge", url: "https://www.curseforge.com/minecraft/bukkit-plugins/cpc" },
    ],
    shortName: "CPC",
  },
  {
    name: "StatsEnd",
    description: "Comprehensive End dimension statistics tracking and leaderboards.",
    icon: <BarChart3 className="h-6 w-6" />,
    version: "5.0.0",
    docsUrl: "/docs/statsend",
    downloadStores: [
//      { name: "Modrinth", url: "https://www.modrinth.com/plugin/statsend" },
//      { name: "CurseForge", url: "https://www.curseforge.com/minecraft/mc-mods/statsend" },
    ],
  },
  {
    name: "EndRace",
    description: "Track how long players take to reach the End portal with Eyes of Ender from server join.",
    icon: <Trophy className="h-6 w-6" />,
    version: "5.0.0",
    docsUrl: "/docs/endrace",
    downloadStores: [
//      { name: "Modrinth", url: "https://www.modrinth.com/plugin/endrace" },
//      { name: "CurseForge", url: "https://www.curseforge.com/minecraft/mc-mods/endrace" },
    ],
  },
];

const hytalePlugins = [
  {
    name: "ClovePluralTale",
    description: "Plural system support for Hytale servers, enabling identity management for plural users.",
    icon: <Users className="h-6 w-6" />,
    version: "1.0.0 BETA",
    docsUrl: "/docs/cpt",
    downloadStores: [
      { name: "Orbis", url: "https://www.orbis.place/plugin/clovespluraltale" },
      { name: "UnifiedHytale", url: "https://www.unifiedhytale.com/project/clovespluraltale" },
//      { name: "ModTale", url: "https://www.modtale.com/plugin/clovespluraltale" },
//      { name: "CurseForge", url: "https://www.curseforge.com/hytale/mods/clovespluraltale" },
    ],
    shortName: "CPT"
  }
];

const Index = () => {
  usePageTitle("CloveLib Studios - Home");
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.08),transparent_50%)]" />
        
        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 opacity-0 animate-fade-in text-primary">
              CloveLib Studios Documentation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Complete documentation and guides for all Clove plugins. 
              Find setup instructions, configuration options, and API references.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#plugins">
                  Browse Plugins
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/support">Get Support</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ad after hero */}
      <div className="container py-8">
        <AdSense 
          adSlot="1094302811" 
          adFormat="horizontal"
          className="max-w-4xl mx-auto"
        />
      </div>

      {/* Plugins Grid */}
      <section id="plugins" className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Plugin Documentation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select a plugin below to view its documentation, configuration guides, and API reference.
          </p>
        </div>

        {/* Minecraft Plugins Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-center">
            Minecraft Plugins
          </h3>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {minecraftPlugins.map((plugin, index) => (
              <PluginCard
                key={plugin.name}
                {...plugin}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Hytale Plugins Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-center">
            Hytale Plugins
          </h3>
          <div className="max-w-7xl mx-auto flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {hytalePlugins.map((plugin, index) => (
                <PluginCard
                  key={plugin.name}
                  {...plugin}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/50 bg-muted/30">
        <div className="container py-16 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Need Help?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Check out our support resources 
            or join the community for assistance.
          </p>
          <Button variant="hero" asChild>
            <a href="/support">
              Visit Support Center
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;