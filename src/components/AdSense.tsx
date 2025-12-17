import { useEffect, useRef } from "react";

interface AdSenseProps {
  adSlot: string;
  adFormat?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  fullWidthResponsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export function AdSense({ 
  adSlot, 
  adFormat = "auto", 
  fullWidthResponsive = true,
  className = ""
}: AdSenseProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;
    
    try {
      if (typeof window !== "undefined" && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-2820378422214826"
        data-ad-slot="1094302811"
        data-ad-format="fluid"
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
}
