"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { capabilities } from "@/data/content";

export function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="capabilities" className="py-24 md:py-40 bg-background border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-32"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none whitespace-pre-line text-foreground uppercase">
            CAPABILITIES{"\n"}BUILT FOR SCALE.
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 min-h-[500px]">
          
          {/* Interactive Navigation List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {capabilities.map((cap, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="group relative flex flex-col items-start py-8 md:py-10 border-b border-foreground/10 last:border-b-0 text-left overflow-hidden w-full"
                >
                  {/* Hover Progress Bar */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] bg-foreground"
                    initial={false}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  
                  <div className="flex items-center gap-6 md:gap-12 w-full">
                    <span className={`text-xs md:text-sm font-mono tracking-widest transition-colors duration-300 flex-shrink-0 ${isActive ? 'text-foreground' : 'text-foreground/30 group-hover:text-foreground/70'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    
                    <h3 className={`text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter uppercase transition-all duration-500 transform ${isActive ? 'text-foreground translate-x-4' : 'text-foreground/40 group-hover:text-foreground/70 group-hover:translate-x-2'}`}>
                      {cap.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Dynamic Content Display */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center p-8 md:p-12 lg:p-16 border border-foreground/10 bg-foreground/5 overflow-hidden min-h-[300px]">
            {/* Giant Background Number */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.2, y: -50 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[15rem] md:text-[25rem] font-black leading-none tracking-tighter text-transparent"
                  style={{ WebkitTextStroke: "2px var(--foreground)" }}
                >
                  {String(activeIndex + 1).padStart(2, '0')}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  <div className="w-12 h-[2px] bg-foreground mb-8" />
                  <h4 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-6 text-foreground">
                    {capabilities[activeIndex].title}
                  </h4>
                  <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80">
                    {capabilities[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
