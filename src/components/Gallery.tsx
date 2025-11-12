"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
  title: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["All", "Product Branding", "Portraits", "Safari", "Events"];

  const galleryImages: GalleryImage[] = [
    // Product Branding
    {
      id: 1,
      url: "/Photo/IMG-1.JPG",
      alt: "Premium product showcase on neutral background",
      category: "Product Branding",
      title: "Luxury Aesthetics",
    },
    {
      id: 2,
      url: "/Photo/IMG-2.JPG",
      alt: "Close-up shot",
      category: "Product Branding",
      title: "Signature Identity",
    },
    {
      id: 3,
      url: "/Photo/IMG-3.JPG",
      alt: "Close-up shot of product",
      category: "Product Branding",
      title: "Visual Consistency",
    },
    // Portraits
    {
      id: 4,
      url: "/Photo/IMG-4.JPG",
      alt: "Natural light portrait capturing genuine expression",
      category: "Portraits",
      title: "Raw Authenticity",
    },
    {
      id: 5,
      url: "/Photo/IMG-5.JPG",
      alt: "Headshot with professional background blur",
      category: "Portraits",
      title: "Executive Presence",
    },
    {
      id: 6,
      url: "/Photo/IMG-6.JPG",
      alt: "Conceptual portrait blending style and emotion",
      category: "Portraits",
      title: "Artistic Identity",
    },
    // Safari
    {
      id: 7,
      url: "/Photo/IMG-7.jpg",
      alt: "Giraffe silhouette against an African sunset",
      category: "Safari",
      title: "Savannah Serenity",
    },
    {
      id: 8,
      url: "/Photo/IMG-8.JPG",
      alt: "Safari crossing the savannah",
      category: "Safari",
      title: "Grace in Motion",
    },
    {
      id: 9,
      url: "/Photo/IMG-9.JPG",
      alt: "Lone lion captured in golden hour light",
      category: "Safari",
      title: "Majesty of the Wild",
    },
    // Events
    {
      id: 10,
      url: "/Photo/IMG-10.JPG",
      alt: "Corporate event setup",
      category: "Events",
      title: "Corporate Excellence",
    },
    {
      id: 11,
      url: "/Photo/IMG-11.JPG",
      alt: "Nairobi Singalong",
      category: "Events",
      title: "Milestone Moments",
    },
    {
      id: 12,
      url: "/Photo/IMG-12.JPG",
      alt: "Kenyan artists",
      category: "Events",
      title: "Joyful Gatherings",
    },
  ];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id));
  };

  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
        : (currentImageIndex + 1) % filteredImages.length;

    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-gold" />
            <span className="text-gold font-medium tracking-wider uppercase text-sm">
              Portfolio Gallery
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            My <span className="text-gold">Masterpieces</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collection of photography that captures the essence of every moment
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gold text-black hover:bg-gold/90"
                  : "border-gold text-gold hover:bg-gold hover:text-black"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <Badge variant="secondary" className="bg-gold text-black">
                        {image.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-5xl w-full max-h-[85vh] rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-auto"
                  priority
                />

                <Button
                  onClick={closeLightbox}
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20"
                >
                  <X className="w-6 h-6" />
                </Button>

                <Button
                  onClick={() => navigateImage("prev")}
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                  onClick={() => navigateImage("next")}
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>
                  <Badge variant="secondary" className="bg-gold text-black">
                    {selectedImage.category}
                  </Badge>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
