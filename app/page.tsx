"use client";
import Footer from "@/components/Footer";
import HCards from "@/components/HCards";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NewsLetter from "@/components/NewsLetter";

import { useThemeStore } from "@/lib/Store";

export default function Home() {
  const { theme } = useThemeStore();
  return (
    <section
      className={`min-h-screen font-sans transition-colors duration-300 ${theme ? "bg-[#0F172A] text-[#F1F5F9]" : "bg-[#F8F9FF] text-[#0B1C30]"}`}
    >
      {/* nav */}
      <Nav />
      {/* hero section */}
      <Hero />
      {/* cards */}
      <HCards />
      {/* news letter */}
      <NewsLetter />
      {/* footer */}
      <Footer />
    </section>
  );
}
