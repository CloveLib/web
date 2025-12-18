import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdSense } from "@/components/AdSense";
import { PageTransition } from "@/components/PageTransition";

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
          adSlot="1094302811" 
          adFormat="horizontal"
          className="max-w-4xl mx-auto"
        />
      </div>
      
      <Footer />
    </div>
  );
}
