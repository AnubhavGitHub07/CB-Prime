"use client";

import { motion, Variants } from "framer-motion";
import { statistics, statsStatement } from "@/data/content";

export function Stats() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 border-t border-background/20 pt-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <p className="text-3xl md:text-4xl font-light tracking-tight leading-snug">
              {statsStatement}
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/3 grid grid-cols-2 gap-x-8 gap-y-16"
          >
            {statistics.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="flex flex-col border-l border-background/10 pl-6 md:pl-8">
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 leading-none">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-semibold tracking-widest uppercase text-background/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
