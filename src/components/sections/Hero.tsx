"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { heroContent } from "@/data/content";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = heroContent.backgroundImages || [];

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Crossfade every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-foreground">
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0 h-[120%]"
      >
        <AnimatePresence mode="popLayout">
          {images.map((img, index) => (
            index === currentImageIndex && (
              <motion.div
                key={img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${img})` }}
              />
            )
          ))}
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for text readability */}
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 container mx-auto"
      >
        <div className="max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.9] whitespace-pre-line mb-8"
          >
            {heroContent.headline}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <p className="text-white/80 text-lg md:text-xl max-w-md font-light">
              {heroContent.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#capabilities" 
                className="bg-white text-black px-8 py-4 font-semibold uppercase tracking-widest text-xs hover:bg-white/90 transition-colors text-center"
              >
                {heroContent.primaryCTA}
              </a>
              <a 
                href="#contact" 
                className="border border-white text-white px-8 py-4 font-semibold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors text-center"
              >
                {heroContent.secondaryCTA}
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-[1px] h-16 bg-white/30 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-white absolute top-0 left-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
