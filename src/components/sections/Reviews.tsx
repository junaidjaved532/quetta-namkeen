import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "Best Sajji in Lahore with authentic Balochi taste.",
    author: "Local Guide",
    rating: 5
  },
  {
    quote: "Kabuli Pulao and Rosh are absolutely amazing.",
    author: "Food Enthusiast",
    rating: 5
  },
  {
    quote: "Perfect place for family dinners.",
    author: "Happy Customer",
    rating: 5
  },
  {
    quote: "Excellent BBQ and traditional hospitality.",
    author: "Regular Guest",
    rating: 5
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Words from Our Guests
          </motion.h2>
          <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <p className="text-muted-foreground font-medium">4.3 Average Google Rating</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background border border-border p-8 rounded-xl relative"
            >
              <div className="absolute -top-4 left-8 text-6xl text-primary/20 font-serif leading-none">"</div>
              <p className="text-lg md:text-xl font-serif italic text-foreground mb-6 relative z-10">
                {review.quote}
              </p>
              <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
                <span className="font-medium text-sm text-muted-foreground uppercase tracking-wider">{review.author}</span>
                <div className="flex text-primary">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
