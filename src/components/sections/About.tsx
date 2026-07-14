import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg relative z-10">
              <img 
                src="/interior.jpg" 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square overflow-hidden rounded-lg border-4 border-background z-20 shadow-2xl">
              <img 
                src="/rosh.jpg" 
                alt="Traditional Mutton Rosh" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 border border-primary/20 rounded-xl z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-3 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary"></span>
              Our Story
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              A Legacy of Fire, Smoke & Spice
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Nestled in the heart of Lahore at Natha Singh Wala, Quetta Namkeen brings the rugged, authentic flavors of Balochistan and Afghanistan straight to your table. We don't believe in shortcuts. Our meats are slow-roasted over open flames, our spices are hand-ground, and our hospitality is as warm as the embers in our grills.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              From our signature Dumba Rosh cooked in earthen pots to the smoky perfection of our Balochi Sajji and fragrant Kabuli Pulao, every dish is a celebration of heritage. Step into our dining hall, and let the amber firelight and rich aromas transport you.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <h4 className="font-serif text-2xl text-primary mb-1">Authentic</h4>
                <p className="text-sm text-muted-foreground">Traditional recipes</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-primary mb-1">Fresh</h4>
                <p className="text-sm text-muted-foreground">Premium quality meats</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-primary mb-1">Live BBQ</h4>
                <p className="text-sm text-muted-foreground">Cooked over open fire</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-primary mb-1">4.3★</h4>
                <p className="text-sm text-muted-foreground">Google Reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
