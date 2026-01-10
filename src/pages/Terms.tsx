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
            Last updated: January 10, 2026
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
              CloveLib Studios plugins are copyright © Clove Nytrix Doughmination Twilight and licensed under The Estrogen Source-Available Licence v1.3 (ESAL-1.3).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Non-Commercial Use:</strong> You may use, copy, modify, merge, publish, and distribute the Software for non-commercial purposes only, including personal use, academic use, research, experimentation, and non-profit projects, provided that no direct or indirect commercial advantage, monetary compensation, or revenue generation results from use of the Software.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Commercial Use:</strong> Any commercial use requires a separate written commercial licence from Clove Nytrix Doughmination Twilight. Commercial use includes selling, monetizing, or using the Software in for-profit operations, providing paid services, hosting, consultancy, or support that relies upon the Software.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Trademarked Components:</strong> Any Trademarked Components (including the Doughmination System®), and any Software components connected to them, may not be modified, adapted, reworked, extracted, repurposed, or redistributed without prior written permission.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Key Requirements:</strong>
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Attribution to "Clove Nytrix Doughmination Twilight" must be maintained</li>
              <li>Modified versions must be clearly identified as modified</li>
              <li>The Software is provided "as is" without warranty</li>
              <li>No endorsement, certification, or affiliation claims without permission</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Full license text available at{" "}
              <a href="/licence" className="text-primary hover:underline">
                clovelib.win/licence
              </a>
              {" "}and in each plugin's repository.
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
            <h2 className="font-display text-xl font-semibold mb-4">5. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By using this website, you acknowledge and agree that:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>We use cookies for site functionality and to remember your preferences</li>
              <li>You can manage cookie preferences through your browser settings</li>
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
            <h2 className="font-display text-xl font-semibold mb-4">6. Commercial Licensing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To obtain a commercial licence, contact us via email at{" "}
              <a href="mailto:admin@clovelib.win" className="text-primary hover:underline">
                admin@clovelib.win
              </a>
              {" "}or through our Discord server or GitHub.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Commercial licences may be revoked at any time, with or without cause, subject to written agreements with the licensee.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "450ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">7. Support</h2>
            <p className="text-muted-foreground leading-relaxed">
              Support is provided on a best-effort basis through our community channels. We are not obligated to provide support, updates, or bug fixes, though we will endeavor to maintain the Software.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">8. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the Software or website after changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "550ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              All matters relating to trademarks and Trademarked Components shall be governed by the laws of England and Wales, without regard to conflict-of-law principles.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">10. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these terms, please reach out through our Discord server, GitHub, or email{" "}
              <a href="mailto:admin@clovelib.win" className="text-primary hover:underline">
                admin@clovelib.win
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;