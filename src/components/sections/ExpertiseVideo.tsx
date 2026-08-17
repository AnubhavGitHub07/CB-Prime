"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const videos = [
  "/background-video/Absolutely_—_for_this_section_.mp4",
  "/background-video/Absolutely_—_I’d_make_the_peop (1).mp4",
];

export function ExpertiseVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    // Custom durations: 1st video plays for 3s, 2nd video plays for 6s
    const durations = [3000, 6000]; 
    const currentDuration = durations[currentVideoIndex] || 4000;

    const timeout = setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, currentDuration);
    
    return () => clearTimeout(timeout);
  }, [currentVideoIndex]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-24 md:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Video Container matching Brand Story dimensions */}
          <motion.div 
            style={{ scale, opacity }}
            className="w-full h-[500px] md:h-[700px] relative overflow-hidden rounded-sm"
          >
            <div className="w-full h-full relative bg-black">
              {videos.map((src, index) => (
                <motion.video
                  key={src}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ 
                    opacity: currentVideoIndex === index ? 1 : 0,
                    scale: currentVideoIndex === index ? 1.05 : 1.1
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-105"
                >
                  <source src={src} type="video/mp4" />
                </motion.video>
              ))}
              
              {/* Subtle Vignette for an editorial look */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] pointer-events-none z-10" />
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div 
            style={{ y: textY }}
            className="flex flex-col items-start text-left relative z-10 lg:pl-8"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="uppercase tracking-[0.4em] text-xs font-semibold text-muted-foreground mb-8 block"
            >
              Behind the Seams
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-thin mb-8 tracking-tight leading-[1.1]"
            >
              Mastery <br className="hidden lg:block" /> in Motion
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl max-w-md font-light leading-relaxed"
            >
              Witness the precision, dedication, and scale that define our global operations. Every stitch tells a story of uncompromising quality.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
