import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Find Us
          </motion.h2>
          <p className="text-muted-foreground">Natha Singh Wala, Lahore</p>
        </div>

        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-border shadow-lg h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13601.76174415893!2d74.3732432!3d31.540192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905bcaf550977%3A0x446e1039871fa147!2sAskari%2010%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Quetta Namkeen Location"
            className="grayscale invert-[90%] hue-rotate-180 contrast-125" /* Tricks to make map look dark mode / amber tinted */
          ></iframe>
        </div>
      </div>
    </section>
  );
}
