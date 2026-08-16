"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/content";
import Image from "next/image";
import { ChevronRight, X } from "lucide-react";

export function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<typeof products[0] | null>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Prevent background scrolling when modal is open
  if (typeof window !== "undefined") {
    document.body.style.overflow = selectedCategory ? "hidden" : "unset";
  }

  return (
    <section id="products" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6 md:px-12 mb-12 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] whitespace-pre-line text-foreground uppercase">
            APPAREL FOR{"\n"}EVERY MARKET.
          </h2>
        </motion.div>
        
        {/* Desktop scroll button */}
        <motion.button 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={scrollRight}
          className="hidden md:flex w-16 h-16 rounded-full border border-foreground/20 items-center justify-center hover:bg-foreground hover:text-background transition-colors mb-4"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-8 h-8" />
        </motion.button>
      </div>

      {/* Horizontal Carousel */}
      <div 
        ref={scrollRef}
        className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 px-6 md:px-12 pb-12"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onClick={() => setSelectedCategory(product)}
            className="group relative flex-none w-[85vw] md:w-[45vw] lg:w-[30vw] h-[60vh] md:h-[70vh] snap-center overflow-hidden cursor-pointer"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 30vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Subtle Gradient for Text Legibility */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

            {/* Content overlay */}
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-wide uppercase">
                {product.name}
              </h3>
              <p className="text-white/70 text-sm mt-4 uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                View Catalog
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-Screen Catalog Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-xl overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 md:p-12 bg-background/80 backdrop-blur-md border-b border-foreground/10">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase text-foreground">
                {selectedCategory.name} CATALOG
              </h2>
              <button
                onClick={() => setSelectedCategory(null)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-foreground text-background hover:scale-105 transition-transform"
                aria-label="Close catalog"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Grid of Dummy Items */}
            <div className="container mx-auto px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 flex-1">
              {selectedCategory.items?.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col cursor-pointer"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden mb-6 bg-foreground/5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-2">
                    {item.name}
                  </h4>
                  <div className="flex flex-col gap-1 text-sm font-mono text-foreground/60">
                    <p>MATL: {item.material}</p>
                    <p>MOQ: {item.moq}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Section inside modal */}
            <div className="bg-foreground text-background py-16 text-center mt-auto">
              <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-6">
                Ready to develop your {selectedCategory.name.toLowerCase()} line?
              </h3>
              <a href="#contact" onClick={() => setSelectedCategory(null)} className="inline-block px-8 py-4 border border-background hover:bg-background hover:text-foreground font-semibold uppercase tracking-widest transition-colors">
                Start a Conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
