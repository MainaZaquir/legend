"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "SizeMore Chauffeurs", logo: "./Assets/Brands/sizemore.png" },
  { name: "European Union", logo: "./Assets/Brands/eu.png" },
  { name: "Irish Embassy", logo: "./Assets/Brands/irish-embassy.png" },
  { name: "254 Beer District", logo: "./Assets/Brands/254beer.png" },
  { name: "Self Help Africa", logo: "./Assets/Brands/selfhelpafrica.png" },
  { name: "Hillcrest", logo: "./Assets/Brands/hillcrest.png" },
  { name: "Blankets and Wine", logo: "./Assets/Brands/blanketswine.png" },
  { name: "Gheco Cafe", logo: "./Assets/Brands/gheco.png" },
  { name: "Booch Africa", logo: "./Assets/Brands/booch.png" },
  { name: "Aspen Africa Institute", logo: "./Assets/Brands/aspen.png" },
  { name: "Cornerstone Enterprise", logo: "./Assets/Brands/cornerstone.png" },
  { name: "Kenya Aviation", logo: "./Assets/Brands/kenyaaviation.png" },
];

export default function BrandsSection() {
  return (
    <section id="brands" className="py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Trusted By <span className="text-gold">Leading Brands</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From international organizations to homegrown Kenyan brands, each collaboration tells a unique story through the lens of LegendShotIt.
          </p>
        </motion.div>

        {/* Brand Logos */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="object-contain opacity-80 hover:opacity-100"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
