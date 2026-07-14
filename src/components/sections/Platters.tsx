import { motion } from "framer-motion";

const platters = [
  {
    name: "Mix Platter",
    description: "Rosh, Balochi Sajji, Chicken Sheikh Tikka, Chicken Gola Kabab, Chicken Boti, Chapli Kabab, Kabuli Pulao, Chicken Piece, Qandhari Naan, Raita, Salad.",
    prices: "Half – Rs. 5,790 | Full – Rs. 10,900",
    image: "/platter.jpg",
    highlight: true
  },
  {
    name: "BBQ Platter",
    description: "Chicken Tikka, Green Boti, Malai Boti, Chicken Kabab, Namkeen Boti, Chicken Malai Piece, Reshmi Kabab, Qandhari Naan, Raita.",
    prices: "Half – Rs. 4,790 | Full – Rs. 9,000",
    image: "/bbq.jpg",
    highlight: false
  },
  {
    name: "Ran Platter",
    description: "Raan Roast, Pathu Tikka, Gurda, Sajji, Kabuli Pulao, Chapli Kabab, Naan, Salad, Raita.",
    prices: "Rs. 15,000 (Advance Order)",
    image: "/rosh.jpg",
    highlight: false
  }
];

export function Platters() {
  return (
    <section id="platters" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Signature Combo Platters
          </motion.h2>
          <p className="text-muted-foreground">The ultimate feast for family and friends.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platters.map((platter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`rounded-2xl overflow-hidden flex flex-col border ${platter.highlight ? 'border-primary shadow-[0_0_30px_rgba(217,119,6,0.15)] transform lg:-translate-y-4' : 'border-border'}`}
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={platter.image} 
                  alt={platter.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {platter.highlight && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-serif font-bold text-white">{platter.name}</h3>
              </div>
              
              <div className="p-6 bg-background flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  {platter.description}
                </p>
                <div className="pt-4 border-t border-border mt-auto">
                  <span className="text-primary font-bold text-lg block text-center">
                    {platter.prices}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
