import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Menu", id: "menu" },
    { name: "Platters", id: "platters" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <div className="hidden md:flex bg-card border-b border-border text-xs py-2 px-6 justify-between items-center text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><MapPin size={12} className="text-primary"/> Natha Singh Wala, Lahore</span>
          <span className="flex items-center gap-1"><Clock size={12} className="text-primary"/> Daily, 12:00 PM – 2:00 AM</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Phone size={12} className="text-primary"/> +92 312 6300009</span>
        </div>
      </div>

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg py-3" : "bg-transparent py-5"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex flex-col cursor-pointer group">
            <span className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">Quetta Namkeen</span>
            <span className="text-[10px] tracking-widest text-primary uppercase">Balochi & Afghani</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  onClick={() => scrollTo(link.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <button 
              onClick={() => scrollTo("reservation")}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(217,119,6,0.3)] hover:shadow-[0_0_20px_rgba(217,119,6,0.5)]"
            >
              Book Table
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5 w-6">
              <span className={`block w-full h-0.5 bg-current transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-full h-0.5 bg-current transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-full h-0.5 bg-current transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Nav */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden bg-background border-b border-border"
        >
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className="text-left text-lg font-serif border-b border-border/50 pb-2 text-foreground"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollTo("reservation")}
              className="bg-primary text-primary-foreground p-3 rounded-md text-center font-medium mt-4"
            >
              Book a Table
            </button>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
