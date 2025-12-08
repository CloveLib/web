import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-4 shadow-card md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <Cookie className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-semibold text-card-foreground">
                Cookie Preferences
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                We use cookies to enhance your browsing experience and analyze site traffic. 
                By clicking "Accept", you consent to our use of cookies.
              </p>
            </div>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button variant="outline" size="sm" onClick={declineCookies}>
              Decline
            </Button>
            <Button variant="hero" size="sm" onClick={acceptCookies}>
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
