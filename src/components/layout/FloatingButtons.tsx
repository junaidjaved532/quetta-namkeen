import { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={cn(
          "w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 shadow-lg",
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Call Button */}
      <a
        href="tel:+923126300009"
        className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
        aria-label="Call Us"
      >
        <Phone size={22} fill="currentColor" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923126300009"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.4)]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>

    </div>
  );
}
