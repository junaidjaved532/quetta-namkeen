import { Link } from "wouter";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-border/50 pb-12">
          
          <div className="flex flex-col items-start">
            <Link href="/" className="flex flex-col cursor-pointer group mb-6" onClick={scrollToTop}>
              <span className="font-serif text-3xl font-bold text-foreground">Quetta Namkeen</span>
              <span className="text-xs tracking-widest text-primary uppercase">Balochi & Afghani</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Authentic Balochi and Afghani cuisine in the heart of Lahore. Experience the true taste of slow-roasted Sajji, tender Rosh, and flavorful Kabuli Pulao.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById("menu")?.scrollIntoView({behavior: "smooth"})} className="text-muted-foreground hover:text-primary transition-colors text-sm">Full Menu</button></li>
              <li><button onClick={() => document.getElementById("platters")?.scrollIntoView({behavior: "smooth"})} className="text-muted-foreground hover:text-primary transition-colors text-sm">Combo Platters</button></li>
              <li><button onClick={() => document.getElementById("reservation")?.scrollIntoView({behavior: "smooth"})} className="text-muted-foreground hover:text-primary transition-colors text-sm">Book a Table</button></li>
              <li><button onClick={() => document.getElementById("about")?.scrollIntoView({behavior: "smooth"})} className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Story</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-foreground mb-6">Visit Us</h4>
            <address className="not-italic space-y-3 text-sm text-muted-foreground">
              <p>M Service Line, Near Askari Gate No. 3,</p>
              <p>Adjacent to Block Underpass,</p>
              <p>Natha Singh Wala, Lahore, Pakistan</p>
              <p className="pt-3 text-foreground font-medium">Daily: 12:00 PM – 2:00 AM</p>
              <p className="text-primary font-bold text-lg pt-1">+92 312 6300009</p>
            </address>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Quetta Namkeen. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="text-xs text-primary uppercase tracking-wider font-medium hover:text-primary/80 transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
