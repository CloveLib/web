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
            The Estrogen Source-Available Licence (ESAL)
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
            <h2 className="font-display text-xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              CloveLib Studios software is licensed under The Estrogen Source-Available Licence (ESAL), 
              a source-available license that permits non-commercial use while requiring explicit 
              permission for commercial applications. This ensures our work remains accessible 
              for personal, academic, and hobbyist use while protecting our commercial interests and trademarks.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="font-display text-2xl font-semibold mb-4 text-center">
              The Estrogen Source-Available Licence
            </h2>
            <p className="text-center text-muted-foreground mb-2"><strong>Version 1.3</strong></p>
            <p className="text-center text-sm text-muted-foreground mb-2">
              This Licence may be referred to as the <strong>Estrogen Source-Available Licence (ESAL)</strong>. This specific version may be referred to as <strong>ESAL‑1.3</strong>.
            </p>
            <p className="text-center text-sm text-muted-foreground mb-6">
              Copyright © 2026 Clove Nytrix Doughmination Twilight
            </p>
            
            <div className="space-y-6 text-muted-foreground">
              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">Permission Grant (Non-Commercial Use)</h3>
                <p className="leading-relaxed mb-3">
                  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to use, copy, modify, merge, publish, and distribute the Software <strong className="text-foreground">for non-commercial purposes only</strong>, subject to the conditions set out below.
                </p>
                <p className="leading-relaxed">
                  Non-commercial use includes, but is not limited to, personal use, academic use, research, experimentation, and use within non-profit or hobbyist projects, <strong className="text-foreground">provided that no direct or indirect commercial advantage, monetary compensation, or revenue generation results from use of the Software</strong>.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">1. Attribution</h3>
                <p className="leading-relaxed mb-3">
                  All copies or substantial portions of the Software must include the above copyright notice and this Licence.
                </p>
                <p className="leading-relaxed">
                  Attribution to <strong className="text-foreground">"Clove Nytrix Doughmination Twilight"</strong> must be maintained in a reasonable and visible manner in source code distributions and in accompanying documentation.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">2. No Misrepresentation</h3>
                <p className="leading-relaxed mb-3">
                  You may not misrepresent the origin of the Software.
                </p>
                <p className="leading-relaxed">
                  Modified versions must be clearly identified as modified and must not be presented as being authored, endorsed, or distributed by Clove Nytrix Doughmination Twilight without prior written permission.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">3. Commercial Use Restriction</h3>
                <p className="leading-relaxed mb-3">
                  The Software may not be used, in whole or in part, for any commercial purpose without a separate, written commercial licence granted by Clove Nytrix Doughmination Twilight.
                </p>
                <p className="leading-relaxed mb-3">
                  For the purposes of this Licence, <em>commercial use</em> includes, but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                  <li>selling, licensing, sublicensing, or otherwise monetising the Software or derivative works;</li>
                  <li>using the Software as part of any product, service, or platform that generates revenue;</li>
                  <li>use by a for-profit entity where the Software contributes to business operations, service delivery, or profit generation;</li>
                  <li>providing paid services, hosting, consultancy, or support that relies upon or incorporates the Software.</li>
                </ul>
                <p className="leading-relaxed">
                  Commercial licensing terms (including fees and/or revenue-sharing arrangements) shall be determined on a case-by-case basis.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">4. Commercial Licensing</h3>
                <p className="leading-relaxed mb-3">
                  <strong className="text-foreground">4.1 Obtaining a Commercial Licence</strong>
                </p>
                <p className="leading-relaxed mb-3">
                  Any individual or organisation wishing to use the Software for a commercial purpose must obtain a separate, written commercial licence.
                </p>
                <p className="leading-relaxed mb-3">
                  Requests for commercial licensing must be made via email to:{" "}
                  <a href="mailto:admin@clovelib.win" className="text-primary hover:underline">
                    admin@clovelib.win
                  </a>
                </p>
                <p className="leading-relaxed mb-4">
                  Commercial licence terms may include fees, revenue-sharing arrangements, usage limitations, or other conditions, and are granted solely at the discretion of Clove Nytrix Doughmination Twilight.
                </p>
                <p className="leading-relaxed mb-3">
                  <strong className="text-foreground">4.2 Pre-Authorised Commercial Licensees</strong>
                </p>
                <p className="leading-relaxed mb-3">
                  Clove Nytrix Doughmination Twilight may maintain a file named <code className="bg-muted px-1 rounded">allowed_people.md</code> listing individuals or organisations that have been granted permission to use the Software commercially.
                </p>
                <p className="leading-relaxed mb-3">
                  If <code className="bg-muted px-1 rounded">allowed_people.md</code> is present and lists a party, that listing constitutes evidence of an active commercial licence, subject to any terms specified therein.
                </p>
                <p className="leading-relaxed">
                  If <code className="bg-muted px-1 rounded">allowed_people.md</code> does <strong className="text-foreground">not</strong> exist, or if a party is not listed within it, <strong className="text-foreground">no commercial licence is granted</strong>, and commercial use remains prohibited.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">5. Trademarked Components</h3>
                <p className="leading-relaxed mb-3">
                  <strong className="text-foreground">5.1 Definition</strong>
                </p>
                <p className="leading-relaxed mb-3">
                  For the purposes of this Licence, <strong className="text-foreground">"Trademarked Components"</strong> means any names, systems, frameworks, identifiers, branding, terminology, logos, marks, or distinctive elements that are protected by trademark or otherwise designated as trademarked by Clove Nytrix Doughmination Twilight, whether registered or unregistered, now existing or created in the future.
                </p>
                <p className="leading-relaxed mb-4">
                  Trademarked Components include, but are not limited to, any elements that are:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>explicitly identified as trademarks;</li>
                  <li>referenced as part of a branded system, methodology, or product line;</li>
                  <li>required for compatibility with, recognition of, or association with a trademarked offering;</li>
                  <li>reasonably understood to indicate origin, endorsement, or branding by Clove Nytrix Doughmination Twilight.</li>
                </ul>
                <p className="leading-relaxed mb-3">
                  <strong className="text-foreground">5.2 Ownership and Listed Trademarks</strong>
                </p>
                <p className="leading-relaxed mb-3">
                  This Licence does not grant permission to use any trademarks, trade names, service marks, or logos associated with Clove Nytrix Doughmination Twilight.
                </p>
                <p className="leading-relaxed mb-3">
                  The following trademarks are currently claimed or owned by Clove Nytrix Doughmination Twilight:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                  <li><strong className="text-foreground">Doughmination System®</strong> (United Kingdom, UK00004263144)</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  This list is <strong className="text-foreground">non-exhaustive</strong>. Any future trademarks, trademark applications, or unregistered marks designated by Clove Nytrix Doughmination Twilight are automatically considered Trademarked Components under this Licence.
                </p>
                <p className="leading-relaxed mb-3">
                  <strong className="text-foreground">5.3 Restriction on Modification and Reuse</strong>
                </p>
                <p className="leading-relaxed mb-3">
                  Any Trademarked Components, and any Software components that are connected to, rely upon, implement, enable, or are designed to operate in conjunction with such Trademarked Components, <strong className="text-foreground">may not be modified, adapted, reworked, extracted, repurposed, or redistributed</strong>, in whole or in part, without prior written permission from Clove Nytrix Doughmination Twilight.
                </p>
                <p className="leading-relaxed mb-4">
                  This includes both direct modification and indirect modification through derivative works, abstractions, renaming, or functional equivalents that preserve the trademarked identity or system.
                </p>
                <p className="leading-relaxed mb-3">
                  <strong className="text-foreground">5.4 Separation from Non-Trademarked Use</strong>
                </p>
                <p className="leading-relaxed">
                  Projects, forks, or derivative works that do <strong className="text-foreground">not</strong> reference, include, depend upon, or associate with any Trademarked Components remain fully subject to the permissions and restrictions set out elsewhere in this Licence and may be modified in accordance with its terms.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">6. Warranty Disclaimer and Limitation of Liability</h3>
                <p className="leading-relaxed mb-3">
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="leading-relaxed">
                  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OF OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">7. No Endorsement or Affiliation</h3>
                <p className="leading-relaxed mb-3">
                  Use of the Software does not imply endorsement, sponsorship, affiliation, or approval by Clove Nytrix Doughmination Twilight.
                </p>
                <p className="leading-relaxed">
                  You may not state or suggest that Clove Nytrix Doughmination Twilight endorses, certifies, supports, or is affiliated with any project, product, service, or derivative work without prior written permission.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">8. No Compatibility or Certification Claims</h3>
                <p className="leading-relaxed">
                  You may not claim or imply that the Software, or any modified or derivative version thereof, is compatible with, certified by, approved by, or officially associated with any trademarked system or offering of Clove Nytrix Doughmination Twilight, including any Trademarked Components, without express written authorisation.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">9. No Implied Rights</h3>
                <p className="leading-relaxed">
                  No rights or permissions are granted under this Licence except those expressly stated. Any use of the Software beyond the scope of this Licence requires prior written permission from Clove Nytrix Doughmination Twilight.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">10. Source-Available, Not Open Source</h3>
                <p className="leading-relaxed mb-3">
                  This Licence makes the source code available for inspection, modification, and non-commercial use under defined conditions.
                </p>
                <p className="leading-relaxed">
                  It is <strong className="text-foreground">not</strong> an open-source licence as defined by the Open Source Initiative, and no rights should be inferred or assumed beyond those explicitly granted herein.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">11. Revocation of Commercial Licences</h3>
                <p className="leading-relaxed mb-3">
                  Clove Nytrix Doughmination Twilight reserves the right to revoke any granted commercial licence at any time, with or without cause, subject to any written terms agreed with the commercial licensee.
                </p>
                <p className="leading-relaxed">
                  Upon revocation, all commercial use of the Software must cease immediately unless otherwise agreed in writing.
                </p>
              </div>

              <div className="border-t border-border/50 pt-6">
                <h3 className="font-semibold text-foreground mb-3">12. Governing Law (Trademark Matters)</h3>
                <p className="leading-relaxed">
                  All matters relating to trademarks, Trademarked Components, and trademark enforcement under this Licence shall be governed by and construed in accordance with the laws of <strong className="text-foreground">England and Wales</strong>, without regard to conflict-of-law principles.
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
              For commercial licensing inquiries, please contact{" "}
              <a href="mailto:admin@clovelib.win" className="text-primary hover:underline">
                admin@clovelib.win
              </a>
              {" "}or reach out through our Discord server or GitHub.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default License;