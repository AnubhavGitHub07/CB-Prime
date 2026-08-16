"use client";

import { motion } from "framer-motion";
import { ctaSection } from "@/data/content";

export function CTASection() {
  return (
    <section id="contact" className="relative py-32 md:py-48 bg-foreground text-background overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 grayscale mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none whitespace-pre-line uppercase mb-8">
            {ctaSection.heading}
          </h2>
          
          <p className="text-xl md:text-2xl font-light text-background/80 mb-12 max-w-2xl">
            {ctaSection.text}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="mailto:contact@cbprimeexports.com" 
              className="bg-background text-foreground px-10 py-5 font-semibold uppercase tracking-widest text-sm hover:bg-background/90 transition-colors"
            >
              {ctaSection.primaryCTA}
            </a>
            <a 
              href="#capabilities" 
              className="border border-background/30 text-background px-10 py-5 font-semibold uppercase tracking-widest text-sm hover:bg-background hover:text-foreground transition-colors"
            >
              {ctaSection.secondaryCTA}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
