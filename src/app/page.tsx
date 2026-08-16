import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandStory } from "@/components/sections/BrandStory";
import { Stats } from "@/components/sections/Stats";
import { Products } from "@/components/sections/Products";
import { Manufacturing } from "@/components/sections/Manufacturing";
import { Quality } from "@/components/sections/Quality";
import { People } from "@/components/sections/People";
import { GlobalReach } from "@/components/sections/GlobalReach";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col w-full selection:bg-foreground selection:text-background">
        <Hero />
        <BrandStory />
        <Stats />
        <Products />
        <Manufacturing />
        <Quality />
        <People />
        <GlobalReach />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
