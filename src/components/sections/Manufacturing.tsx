"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { manufacturingStory } from "@/data/content";

export function Manufacturing() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden bg-foreground text-background">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 h-[140%] w-full"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale"
          style={{ backgroundImage: `url(${manufacturingStory.backgroundImage})` }}
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none whitespace-pre-line uppercase">
            {manufacturingStory.heading}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full md:w-1/2 max-w-lg"
        >
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 text-background/90">
            {manufacturingStory.text}
          </p>
          <a
            href="#contact"
            className="inline-block bg-background text-foreground px-8 py-4 font-semibold uppercase tracking-widest text-xs hover:bg-background/90 transition-colors"
          >
            {manufacturingStory.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
