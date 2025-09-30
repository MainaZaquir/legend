"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroElement = document.querySelector('#home');
      if (heroElement) {
        const rate = scrolled * -0.5;
        (heroElement as HTMLElement).style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <Gallery />
      <AboutSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </main>
  );
}