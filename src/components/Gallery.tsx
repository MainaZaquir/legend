"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

  const categories = ["All", "Weddings", "Portraits", "Fashion", "Events"];

  const galleryImages: GalleryImage[] = [
    // Weddings
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding ceremony",
      category: "Weddings",
      title: "Sacred Vows"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding couple",
      category: "Weddings",
      title: "Eternal Love"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding reception",
      category: "Weddings",
      title: "Celebration"
    },
    // Portraits
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Portrait session",
      category: "Portraits",
      title: "Authentic Beauty"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Professional headshot",
      category: "Portraits",
      title: "Professional Edge"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Creative portrait",
      category: "Portraits",
      title: "Creative Vision"
    },
    // Fashion
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Fashion shoot",
      category: "Fashion",
      title: "Editorial Style"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Fashion model",
      category: "Fashion",
      title: "Haute Couture"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Fashion photography",
      category: "Fashion",
      title: "Modern Elegance"
    },
    // Events
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Corporate event",
      category: "Events",
      title: "Corporate Excellence"
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Birthday celebration",
      category: "Events",
      title: "Milestone Moments"
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Party event",
      category: "Events",
      title: "Joyful Gatherings"
    }
  ];

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" 
      ? (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentImageIndex + 1) % filteredImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            Our <span className="text-gold">Masterpieces</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collection of photography that captures the essence of every moment
          </p>
        </motion.div>

        {/* Category Filter */}
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

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
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
                  <svg
                    className="w-full h-full overflow-hidden"
                    preserveAspectRatio="xMidYMid slice"
                    viewBox="0 0 800 800"
                  >
                    <image
                      href={image.url}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <title>{image.alt || "Image"}</title>
                    </image>
                  </svg>
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

        {/* Lightbox */}
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
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                    className="max-w-full max-h-[80vh] rounded-lg"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 800 600">
                    <image
                    href={selectedImage.url}
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid meet"
                    >
                    <title>{selectedImage.alt || "Selected image"}</title>
                </image>
                </svg>
                
                {/* Close button */}
                <Button
                  onClick={closeLightbox}
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation buttons */}
                <Button
                  onClick={() => navigateImage("prev")}
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                  onClick={() => navigateImage("next")}
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Image info */}
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