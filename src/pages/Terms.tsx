import { Layout } from "@/components/Layout";
import { ScrollText } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const Terms = () => {
  usePageTitle("CloveLib Studios - Terms of Service");
  
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero">
        <div className="container py-16 md:py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ScrollText className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 opacity-0 animate-fade-in">
            Terms of Service
          </h1>
          <p className="text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Last updated: December 19, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By downloading, installing, or using any CloveLib Studios plugins ("Software") or accessing this website, you agree to these Terms of Service. If you do not agree, please do not use the Software or this website.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">2. License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CloveLib Studios plugins are copyright © Clove Twilight and licensed under the MIT License. This means:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>You may use, copy, modify, and distribute the Software</li>
              <li>You may use the Software for commercial purposes</li>
              <li>You must include the original copyright notice and license</li>
              <li>The Software is provided "as is" without warranty</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Full license text available in each plugin's repository.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "250ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">3. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Software and website are provided "as is" without warranty of any kind. We do not guarantee that the Software will be error-free, secure, or continuously available. Use at your own risk.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">4. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are not liable for any damages arising from your use of the Software or website, including but not limited to data loss, server downtime, or any indirect damages. You are responsible for maintaining backups of your server data.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "350ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">5. Cookies and Advertising</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By using this website, you acknowledge and agree that:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>We use cookies for site functionality and to remember your preferences</li>
              <li>Google AdSense displays advertisements on this website</li>
              <li>Third-party advertising cookies may be used to serve personalized ads</li>
              <li>You can manage cookie preferences through the consent banner or browser settings</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              For more details, please review our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">6. Support</h2>
            <p className="text-muted-foreground leading-relaxed">
              Support is provided on a best-effort basis through our community channels. We are not obligated to provide support, updates, or bug fixes, though we will endeavor to maintain the Software.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "450ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">7. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the Software or website after changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">8. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these terms, please reach out through our Discord server or GitHub.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
