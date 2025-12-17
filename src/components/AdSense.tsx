import { useEffect, useRef } from "react";

interface AdSenseProps {
  adSlot: string;
  adFormat?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  adLayoutKey?: string;
  fullWidthResponsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSense({
  adSlot,
  adFormat = "fluid",
  adLayoutKey = "-fb+5w+4e-db+86",
  fullWidthResponsive = true,
  className = "",
}: AdSenseProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;

    try {
      if (typeof window !== "undefined" && adRef.current) {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        isLoaded.current = true;
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <>
      {/* AdSense script – include once globally if possible */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2820378422214826"
        crossOrigin="anonymous"
      />

      <div className={`ad-container ${className}`}>
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2820378422214826"
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-ad-layout-key={adLayoutKey}
          data-full-width-responsive={fullWidthResponsive.toString()}
        />
      </div>
    </>
  );
}
