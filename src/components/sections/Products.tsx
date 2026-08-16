"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { products } from "@/data/content";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

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

            {/* Content overlay matching the reference */}
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-wide uppercase">
                {product.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
