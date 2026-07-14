import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuData = [
  {
    category: "Dumba & Mutton / Rosh",
    items: [
      { name: "Rosh", price: "1,800" },
      { name: "Matka Rosh", price: "2,500" },
      { name: "Namkeen Tikka", price: "2,200" },
      { name: "Namkeen Shinwari Karahi", price: "3,500" },
      { name: "Shinwari Qeema", price: "2,000" },
      { name: "Sulemani Karahi", price: "3,400" },
      { name: "Do Pyaza", price: "2,800" },
      { name: "Namkeen Chicken Karahi", price: "Half 1,500 / Full 2,800" },
    ]
  },
  {
    category: "Chapli Kabab",
    items: [
      { name: "Beef Chapli Kabab", price: "Half 900 / Full 1,700" },
      { name: "Chicken Chapli Kabab", price: "Half 800 / Full 1,500" },
    ]
  },
  {
    category: "Afghani Special",
    items: [
      { name: "Afghani Chicken Tikka", price: "1,400" },
      { name: "Afghani Beef Tikka", price: "1,800" },
    ]
  },
  {
    category: "BBQ",
    items: [
      { name: "Chicken Balochi Sajji", price: "2,200" },
      { name: "BBQ Chicken", price: "1,200" },
      { name: "Malai BBQ Chicken", price: "1,400" },
      { name: "Chicken Namkeen Boti", price: "1,300" },
      { name: "Chicken Kabab", price: "1,100" },
      { name: "Chicken Boti", price: "1,100" },
      { name: "Chicken Angara", price: "1,350" },
      { name: "Reshmi Kabab", price: "1,450" },
      { name: "Suneri Kabab", price: "1,500" },
      { name: "Green Boti", price: "1,250" },
      { name: "Green Kabab", price: "1,250" },
      { name: "Chicken Piece", price: "600" },
      { name: "Chicken Malai Piece", price: "700" },
      { name: "Chicken Malai Boti", price: "1,400" },
      { name: "Gola Kabab", price: "1,600" },
      { name: "Chicken Kastori Boti", price: "1,550" },
    ]
  },
  {
    category: "Special Orders (6 Hrs Advance)",
    items: [
      { name: "Whole Khaddi Kabab", price: "25,000" },
      { name: "Raan Roast", price: "12,000" },
    ]
  },
  {
    category: "Kabuli Pulao",
    items: [
      { name: "Lamb Kabuli Pulao", price: "1,800" },
      { name: "Beef Kabuli Pulao", price: "1,500" },
      { name: "Chicken Kabuli Pulao", price: "1,200" },
      { name: "Plain Kabuli Pulao", price: "800" },
    ]
  },
  {
    category: "Traditional Naan",
    items: [
      { name: "Shahanshahi Naan", price: "150" },
      { name: "Qandari Naan", price: "100" },
      { name: "Uzbaki Naan", price: "120" },
      { name: "Irani Naan", price: "120" },
      { name: "Peshawari Naan", price: "100" },
      { name: "Badami Naan", price: "250" },
      { name: "Quetta Naan", price: "80" },
    ]
  },
  {
    category: "Traditional Tea",
    items: [
      { name: "Quetta Doodh Pati", price: "200" },
      { name: "Peshawari Qawa", price: "150" },
      { name: "Qawa with Gulab Jamun", price: "300" },
      { name: "Gorh Chai", price: "250" },
    ]
  },
];

export function Menu() {
  const [activeTab, setActiveTab] = useState(menuData[0].category);

  return (
    <section id="menu" className="py-24 relative z-10">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-5">
        <div className="absolute top-40 left-10 w-96 h-96 rounded-full bg-primary blur-[150px]"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-orange-700 blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Our Offerings</h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
          >
            The Traditional Menu
          </motion.h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rich flavors, slow-cooked meats, and aromatic spices. Price range: Rs. 1,000 – 6,000 per person.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 flex flex-col gap-2">
              {menuData.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveTab(category.category)}
                  className={cn(
                    "text-left px-4 py-3 rounded-md transition-all text-sm font-medium font-serif tracking-wide border",
                    activeTab === category.category 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "bg-card text-muted-foreground border-border hover:bg-card/80 hover:text-foreground"
                  )}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="lg:w-3/4 min-h-[500px]">
            {menuData.map((category) => (
              activeTab === category.category && (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 md:p-10"
                >
                  <h4 className="text-3xl font-serif text-primary border-b border-border/50 pb-4 mb-8">
                    {category.category}
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {category.items.map((item, index) => (
                      <div key={index} className="group">
                        <div className="flex justify-between items-baseline mb-2">
                          <h5 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h5>
                          <div className="flex-1 mx-4 border-b border-dashed border-border/50 relative top-[-6px]"></div>
                          <span className="text-primary font-bold">Rs. {item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
