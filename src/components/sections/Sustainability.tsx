"use client";

import { motion } from "framer-motion";
import { sustainability } from "@/data/content";
import Image from "next/image";

export function Sustainability() {
  return (
    <section id="sustainability" className="py-24 md:py-32 bg-background border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none whitespace-pre-line text-foreground uppercase mb-16"
            >
              {sustainability.heading}
            </motion.h2>

            <div className="flex flex-col gap-12">
              {sustainability.themes.map((theme, index) => (
                <motion.div 
                  key={theme.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <h3 className="text-xl font-bold tracking-tight mb-3 uppercase">
                    {theme.title}
                  </h3>
                  <p className="text-foreground/70 font-light leading-relaxed max-w-md">
                    {theme.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[600px] md:h-full min-h-[600px] w-full bg-foreground/5 overflow-hidden"
            >
              <Image 
                src={sustainability.image} 
                alt="Sustainability" 
                fill 
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
