import { Layout } from "@/components/Layout";
import { Shield } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const Privacy = () => {
  usePageTitle("CloveLib - Privacy Policy");
  
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero">
        <div className="container py-16 md:py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Shield className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 opacity-0 animate-fade-in">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Last updated: December 4, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              CloveLib plugins are designed with privacy in mind. We collect minimal data and believe your server data belongs to you. This policy covers both our plugins and this website.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">Plugin Data Collection</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our plugins may collect the following anonymous data:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>bStats Metrics:</strong> Anonymous server statistics (player count, server version, Java version) for plugin analytics</li>
              <li><strong>Update Checks:</strong> Plugin version checks to notify you of updates</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Both of these can be disabled in the configuration files.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "250ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">Local Data Storage</h2>
            <p className="text-muted-foreground leading-relaxed">
              All plugin data (player stats, configurations, etc.) is stored locally on your server. We do not have access to this data. You are responsible for securing and backing up your server files.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">Third-Party Plugin Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Some plugins integrate with third-party services:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>WingSync:</strong> Connects to Discord API for whitelist sync</li>
              <li><strong>bStats:</strong> Anonymous metrics collection (opt-out available)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              These services have their own privacy policies which govern their use of data.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "350ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">Website Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This website uses cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic site functionality, such as remembering your cookie preferences</li>
              <li><strong>Advertising Cookies:</strong> Google AdSense uses cookies to serve personalized advertisements based on your browsing history</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can manage your cookie preferences through the cookie consent banner or your browser settings.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">Google AdSense</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This website uses Google AdSense to display advertisements. Google AdSense may:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Use cookies to serve ads based on your prior visits to this or other websites</li>
              <li>Collect information about your browsing activity to provide targeted advertising</li>
              <li>Share data with third-party vendors and ad networks</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can opt out of personalized advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google's Ads Settings
              </a>
              . For more information, see{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google's Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "450ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Accept or decline cookies through our consent banner</li>
              <li>Opt out of personalized advertising through Google's Ads Settings</li>
              <li>Delete plugin data by removing the plugin folders from your server</li>
              <li>Disable bStats metrics in the plugin configuration</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For privacy-related questions, please contact us through our Discord server or GitHub.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
