"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Camera, Heart} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "/Hero/tems-1.png",
      alt: "Legend Shot It Product Branding Session",
      category: "Product Branding",
      position: "object-[center_15%]",
    },
    {
      url: "/Hero/tems-2.png",
      alt: "Legend Shot It Portrait Session",
      category: "Portraits",
      position: "object-[center_15%]",
    },
    {
      url: "/Hero/tems-3.png",
      alt: "Legend Shot It Fashion Shoot",
      category: "Fashion",
      position: "object-[center_20%]",
    },
    {
      url: "/Hero/mutoria.jpg",
      alt: "Legend Shot It Event Coverage",
      category: "Events",
      position: "object-[center_15%]",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 2.4, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentImageIndex].url}
            alt={heroImages[currentImageIndex].alt}
            fill
            priority
            className={`object-cover ${heroImages[currentImageIndex].position}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4 font-serif"
        >
          Capturing <span className="text-gold">Stories</span>, Not Just Photos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl max-w-2xl mb-8 text-gray-300"
        >
          “Every frame is an emotion frozen in time a glimpse into the soul of
          every moment.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="flex gap-4"
        >
          <Button variant="default" size="lg">
            <Camera className="mr-2 h-5 w-5" />
            View Portfolio
          </Button>
          <Button variant="outline" size="lg">
            <Heart className="mr-2 h-5 w-5" />
            Book a Session
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.2 }}
          className="absolute bottom-6"
        >
          <ChevronDown className="h-8 w-8 text-gold animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
