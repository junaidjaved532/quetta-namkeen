import { motion } from "framer-motion";
import { Flame, Clock, Users, UtensilsCrossed } from "lucide-react";

const features = [
  {
    icon: <Flame size={32} />,
    title: "Live Open Fire",
    description: "Our signature BBQ and Sajji are slow-roasted over glowing embers, locking in natural juices and a distinctive smoky flavor."
  },
  {
    icon: <UtensilsCrossed size={32} />,
    title: "Authentic Recipes",
    description: "Passed down through generations, our Balochi and Afghani recipes remain untouched by modern shortcuts."
  },
  {
    icon: <Clock size={32} />,
    title: "Late Night Dining",
    description: "Craving a midnight feast? Our doors are open and the fires are burning until 2:00 AM every single day."
  },
  {
    icon: <Users size={32} />,
    title: "Generous Hospitality",
    description: "Whether a quiet dinner or a massive family feast with our combo platters, you are treated like honored guests."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4"
          >
            Why Choose Quetta Namkeen
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-colors group text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
