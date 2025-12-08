import { Header } from "./Header";
import { Footer } from "./Footer";
import { AdSense } from "./AdSense";
import { PageTransition } from "./PageTransition";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <PageTransition>
        <main className="flex-1">{children}</main>
      </PageTransition>
      
      {/* Ad before footer */}
      <div className="container py-8">
        <AdSense 
          adSlot="XXXXXXXXXX" 
          adFormat="horizontal"
          className="max-w-4xl mx-auto"
        />
      </div>
      
      <Footer />
    </div>
  );
}
