"use client";

import { motion } from "framer-motion";
import { brandStory } from "@/data/content";
import Image from "next/image";

export function BrandStory() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-8 whitespace-pre-line text-foreground">
                {brandStory.heading}
              </h2>
              <div className="w-16 h-[1px] bg-foreground mb-8"></div>
              <p className="text-xl md:text-2xl font-light text-foreground/80 max-w-lg leading-relaxed">
                {brandStory.text}
              </p>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px] w-full overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={brandStory.image} 
                alt="Brand Story" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
