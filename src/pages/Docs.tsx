import { Layout } from "@/components/Layout";
import { usePageTitle } from "@/hooks/use-page-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Library,
  MessageSquare,
  Lock,
  Gavel,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const docsList = [
  {
    title: "Plural System Plugins",
    description: "Tools for plural users to manage their identities across gaming platforms.",
    docs: [
      {
        name: "ClovesPluralCraft",
        shortName: "CPC",
        description: "Plural system support for Minecraft servers",
        icon: <Users className="h-6 w-6" />,
        url: "/docs/cpc",
      },
      {
        name: "ClovePluralTale",
        shortName: "CPT",
        description: "Plural system support for Hytale servers",
        icon: <Users className="h-6 w-6" />,
        url: "/docs/cpt",
      },
      {
        name: "CloveLibWeb",
        shortName: "CPW",
        description: "Web dashboard for managing plural systems",
        icon: <Users className="h-6 w-6" />,
        url: "/docs/cpw",
      },
    ],
  },
  {
    title: "Other Plugins",
    description: "Essential tools for server management, roleplay, and administration.",
    docs: [
      {
        name: "CloveLibAPI",
        description: "Core library providing essential utilities",
        icon: <Library className="h-6 w-6" />,
        url: "/docs/clovelibapi",
      },
      {
        name: "Estrocord",
        description: "Roleplay and moderation system",
        icon: <Gavel className="h-6 w-6" />,
        url: "/docs/estrocord",
      },
      {
        name: "JailedWings",
        description: "Simple and lightweight jail system",
        icon: <Lock className="h-6 w-6" />,
        url: "/docs/jailedwings",
      },
      {
        name: "WingSync",
        description: "Discord to Minecraft whitelist sync",
        icon: <MessageSquare className="h-6 w-6" />,
        url: "/docs/wingsync",
      },
    ],
  },
];

const Docs = () => {
  usePageTitle("CloveLib Studios - Documentation");
  
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero">
        <div className="container py-16 md:py-24 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary animate-float">
              <BookOpen className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 opacity-0 animate-fade-in">
            Documentation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Browse all available documentation for CloveLib Studios plugins. 
            Find setup guides, commands, configurations, and API references.
          </p>
        </div>
      </section>

      {/* Documentation List */}
      <section className="container py-12 md:py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {docsList.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                  {category.title}
                </h2>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.docs.map((doc, docIndex) => (
                  <Link
                    key={doc.name}
                    to={doc.url}
                    className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-hover opacity-0 animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * 100) + (docIndex * 50)}ms` }}
                  >
                    <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                          {doc.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-semibold mb-1">
                            {doc.name}
                            {doc.shortName && (
                              <span className="text-sm font-normal text-muted-foreground ml-2">
                                ({doc.shortName})
                              </span>
                            )}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {doc.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-primary font-medium group-hover:translate-x-1 transition-transform">
                        View Documentation
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/50 bg-muted/30">
        <div className="container py-16 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Need Additional Help?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join our Discord community for real-time support and answers to your questions.
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

export default Docs;