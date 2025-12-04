import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-page-title";
import {
  MessageCircle,
  BookOpen,
  Github,
  Mail,
  ExternalLink,
  Bird,
  FileText,
  Users,
} from "lucide-react";

const supportLinks = [
  {
    title: "Discord Community",
    description: "Join our Discord server for real-time support and community discussions.",
    icon: <MessageCircle className="h-6 w-6" />,
    url: "https://discord.gg/k8HrBvDaQn",
    buttonText: "Join Discord",
  },
  {
    title: "Documentation",
    description: "Comprehensive guides and API documentation for all our plugins.",
    icon: <BookOpen className="h-6 w-6" />,
    url: "/",
    buttonText: "Read Docs",
  },
  {
    title: "GitHub Issues",
    description: "Report bugs, request features, or contribute to our open-source projects.",
    icon: <Github className="h-6 w-6" />,
    url: "https://github.com/CloveLib",
    buttonText: "View GitHub",
  },
  {
    title: "Email Support",
    description: "For business inquiries or private support matters.",
    icon: <Mail className="h-6 w-6" />,
    url: "mailto:support@clovelib.win",
    buttonText: "Send Email",
  },
  {
    title: "Twitter",
    description: "Tag our official Twitter for quick questions and updates.",
    icon: <Bird className="h-6 w-6" />,
    url: "https://www.x.com/CloveLibPlugins",
    buttonText: "Follow Us",
  },
  {
    title: "Wiki",
    description: "Official Wiki from the GitHub for in-depth articles and tutorials.",
    icon: <FileText className="h-6 w-6" />,
    url: "https://github.com/CloveLib/CloveLibPlugins/wiki",
    buttonText: "Browse Wiki",
  },
];

const Support = () => {
  usePageTitle("CloveLib - Support");
  
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero">
        <div className="container py-16 md:py-24 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary animate-float">
              <Users className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 opacity-0 animate-fade-in">
            Support Center
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            We're here to help! Choose the best way to get support for your needs.
          </p>
        </div>
      </section>

      {/* Support Links Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportLinks.map((link, index) => (
            <div
              key={link.title}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-hover opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                  {link.icon}
                </div>
                
                <h3 className="font-display text-lg font-semibold mb-2">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {link.description}
                </p>
                
                <Button variant="hero" size="sm" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.buttonText}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-border/50 bg-muted/30">
        <div className="container py-16 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Still Need Help?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our Discord community is the fastest way to get help. 
            Join thousands of server owners and get answers within minutes.
          </p>
          <Button variant="hero" asChild>
            <a href="https://discord.gg/k8HrBvDaQn" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Join Our Discord
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
