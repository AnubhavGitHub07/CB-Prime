"use client";

import { motion } from "framer-motion";
import { people } from "@/data/content";
import Image from "next/image";

export function People() {
  return (
    <section className="py-24 md:py-40 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden"
            >
              <Image 
                src={people.image1} 
                alt="Our People" 
                fill 
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none whitespace-pre-line uppercase mb-10"
            >
              {people.heading}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl font-light text-background/80 leading-snug max-w-2xl mb-16"
            >
              {people.text}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative aspect-video w-full overflow-hidden ml-auto lg:-mr-12 xl:-mr-24"
            >
              <Image 
                src={people.image2} 
                alt="Craftsmanship" 
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
