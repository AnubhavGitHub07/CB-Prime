"use client";

import { motion } from "framer-motion";
import { insights } from "@/data/content";
import Image from "next/image";

export function Insights() {
  return (
    <section id="insights" className="py-24 md:py-32 bg-background border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none whitespace-pre-line text-foreground uppercase"
          >
            NEWS &{"\n"}INSIGHTS.
          </motion.h2>
          
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            href="#" 
            className="hidden md:inline-block border-b border-foreground pb-1 text-sm font-semibold tracking-widest uppercase hover:text-foreground/70 transition-colors"
          >
            View All
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {insights.map((insight, index) => (
            <motion.a 
              key={insight.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 bg-foreground/5">
                <Image 
                  src={insight.image} 
                  alt={insight.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              <div className="flex items-center justify-between text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-4">
                <span>{insight.category}</span>
                <span>{insight.date}</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug mb-6 group-hover:text-foreground/70 transition-colors">
                {insight.title}
              </h3>
              
              <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase">
                Read More
                <div className="w-8 h-[1px] bg-foreground transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/70" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
