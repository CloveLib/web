import { Layout } from "@/components/Layout";
import { Scale } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const License = () => {
  usePageTitle("CloveLib Studios - License");
  
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero">
        <div className="container py-16 md:py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Scale className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 opacity-0 animate-fade-in">
            License
          </h1>
          <p className="text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            The Estrogen Source-Available License
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              CloveLib Studios software is licensed under The Estrogen Source-Available Licence, 
              a source-available license that permits non-commercial use while requiring explicit 
              permission for commercial applications. This ensures our work remains accessible 
              for personal, academic, and hobbyist use while protecting our commercial interests.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="font-display text-2xl font-semibold mb-4 text-center">
              The Estrogen Source-Available Licence
            </h2>
            <p className="text-center text-muted-foreground mb-6">Version 1.2</p>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <p className="leading-relaxed">
                  Copyright © 2025 CloveTwilight3.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">Permission Grant (Non-Commercial Use)</h3>
                <p className="leading-relaxed mb-3">
                  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to use, copy, modify, merge, publish, and distribute the Software <strong className="text-foreground">for non-commercial purposes only</strong>, subject to the conditions set out below.
                </p>
                <p className="leading-relaxed">
                  Non-commercial use includes personal use, academic use, research, experimentation, and use within non-profit or hobbyist projects, provided that no direct or indirect commercial benefit is derived from the Software.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">1. Attribution</h3>
                <p className="leading-relaxed mb-3">
                  All copies or substantial portions of the Software must include the above copyright notice and this licence.
                </p>
                <p className="leading-relaxed">
                  Attribution to "CloveTwilight3" must be maintained in a reasonable and visible manner in source distributions and accompanying documentation.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">2. No Misrepresentation</h3>
                <p className="leading-relaxed mb-3">
                  You may not misrepresent the origin of the Software.
                </p>
                <p className="leading-relaxed">
                  Modified versions must be clearly identified as such and must not be presented as being made, endorsed, or distributed by CloveTwilight3 without prior written permission.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">3. Commercial Use Restriction</h3>
                <p className="leading-relaxed mb-3">
                  The Software may not be used, in whole or in part, for any commercial purpose without a separate, written commercial licence granted by CloveTwilight3.
                </p>
                <p className="leading-relaxed mb-3">
                  Commercial use includes, but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                  <li>selling, licensing, sublicensing, or monetising the Software or derivative works;</li>
                  <li>using the Software as part of a product, service, or platform that generates revenue;</li>
                  <li>use by a for-profit entity where the Software contributes to business operations, customer delivery, or profit generation;</li>
                  <li>providing paid services, hosting, or support that relies on the Software.</li>
                </ul>
                <p className="leading-relaxed">
                  Commercial licensing terms, including upfront fees and/or revenue-sharing arrangements, shall be determined on a case-by-case basis, taking into account the size of the individual or organisation and the anticipated or realised commercial benefit derived from the Software.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">4. Trademarks</h3>
                <p className="leading-relaxed mb-3">
                  This licence does not grant permission to use any trademarks, trade names, service marks, or logos associated with CloveTwilight3.
                </p>
                <p className="leading-relaxed">
                  "Doughmination System®" is a registered trademark in the United Kingdom [UK00004263144]. Use of this trademark in connection with the Software, derivative works, or any related products or services requires express written authorisation from the trademark owner.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">5. Warranty Disclaimer</h3>
                <p className="leading-relaxed mb-3">
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="leading-relaxed">
                  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "250ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">Commercial Licensing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you wish to use CloveLib Studios software for commercial purposes, you must 
              obtain a separate commercial licence. Commercial licensing terms are determined 
              on a case-by-case basis, taking into account the size of your organization and 
              the commercial benefit derived from the Software.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For commercial licensing inquiries, please contact us through our Discord server 
              or GitHub. We're happy to discuss licensing arrangements that work for your needs.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default License;