"use client";

import { motion } from "framer-motion";
import { Camera, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Legend from './Assets/Photo/Legend.jpg';

const AboutSection = () => {
  const stats = [
    { icon: Camera, number: "200+", label: "Projects Completed" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Heart, number: "6", label: "Years Experience" },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Camera className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium tracking-wider uppercase text-sm">
                About LegendShotIt
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Where <span className="text-gold">Passion</span> Meets Perfection
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m <span className="font-semibold text-foreground">Legend</span> — the eye behind <span className="font-semibold text-foreground">Legend Shot It</span>.  
                What started as a passion for capturing raw, real moments has grown into a journey 
                of storytelling through visuals that speak louder than words.
              </p>
              
              <p>
                I specialize in events, portraits, fashion, and lifestyle photography turning everyday scenes into cinematic moments. 
                My work is all about energy, culture, and emotion the kind that makes you feel something long after the shot is taken.
              </p>
              
              <p>
                Based in Kenya, I&apos;ve had the honor of working with amazing artists, creators and brands each project a new story to tell.  
                Every frame I shoot is personal, intentional, and driven by one goal: to make moments unforgettable.
              </p>
            </div>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="mt-8 bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-3 rounded-full"
            >
              Let&apos;s Create Magic Together
            </Button>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <svg
                viewBox="0 0 800 600"
                className="w-full h-[600px]"
                preserveAspectRatio="xMidYMid slice"
                >
                <div className="w-full h-[600px]">
                  <Image
                    src={Legend}
                    alt="Legend Shot It"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 right-6"
              >
                <Card className="bg-background/90 backdrop-blur-sm border-gold/20">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-semibold text-lg mb-2">My Philosophy</h3>
                    <p className="text-muted-foreground text-sm">
                      &quot;Every photograph should tell a story that words cannot express. 
                      I don&apos;t just capture images; I preserve emotions, freeze time, 
                      and create lasting memories.&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-2">{stat.number}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;