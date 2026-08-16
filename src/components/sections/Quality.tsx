"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { qualityJourney } from "@/data/content";

export function Quality() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 md:py-40 bg-background overflow-hidden border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] whitespace-pre-line text-foreground uppercase">
            QUALITY ISN&apos;T A CHECKPOINT.{"\n"}IT&apos;S THE PROCESS.
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col">
        
        {/* Dynamic Content Display */}
        <div className="min-h-[250px] md:min-h-[300px] mb-12 md:mb-24 flex flex-col justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-mono tracking-widest text-foreground/50 uppercase">
                  Phase {String(activeStep + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-[1px] bg-foreground/30" />
              </div>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-6 md:mb-8 text-foreground">
                {qualityJourney[activeStep].title}
              </h3>
              <p className="text-xl md:text-3xl font-light leading-relaxed text-foreground/70">
                {qualityJourney[activeStep].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative w-full pt-8 pb-32">
          {/* Background Line */}
          <div className="absolute top-10 left-0 right-0 h-[1px] bg-foreground/10" />
          
          {/* Active Progress Line */}
          <motion.div 
            className="absolute top-10 left-0 h-[2px] bg-foreground z-0"
            initial={false}
            animate={{ 
              width: `${(activeStep / (qualityJourney.length - 1)) * 100}%` 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex justify-between items-start">
            {qualityJourney.map((step, index) => {
              const isActive = activeStep === index;
              const isPast = index <= activeStep;
              
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className="relative flex flex-col items-center group w-8 outline-none"
                  aria-label={`Select phase ${index + 1}: ${step.title}`}
                >
                  {/* Node */}
                  <div className={`w-5 h-5 rounded-full border-2 bg-background transition-all duration-500 mb-6 flex items-center justify-center
                    ${isActive ? 'border-foreground scale-125' : 
                      isPast ? 'border-foreground' : 'border-foreground/20 group-hover:border-foreground/50'}
                  `}>
                    {isActive && (
                      <motion.div 
                        layoutId="active-node"
                        className="w-2 h-2 rounded-full bg-foreground"
                      />
                    )}
                  </div>
                  
                  {/* Labels */}
                  <div className={`absolute top-12 w-32 text-center transition-all duration-500 transform ${isActive ? 'translate-y-1' : 'translate-y-0 opacity-40 group-hover:opacity-70'}`}>
                    <span className="block text-[10px] md:text-xs font-mono tracking-widest uppercase mb-2">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`block text-sm md:text-base font-bold tracking-wide uppercase ${isActive ? 'text-foreground' : 'text-foreground'}`}>
                      {step.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
