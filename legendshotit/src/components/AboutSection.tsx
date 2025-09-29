"use client";

import { motion } from "framer-motion";
import { Camera, Award, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    { icon: Camera, number: "500+", label: "Projects Completed" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: Users, number: "1000+", label: "Happy Clients" },
    { icon: Heart, number: "5", label: "Years Experience" },
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
                At LegendShotIt, we believe that every moment tells a story worth preserving. 
                Our journey began with a simple vision: to capture life&apos;s most precious moments 
                through the lens of artistry and emotion.
              </p>
              
              <p>
                Specializing in weddings, portraits, fashion, and events, we bring a unique 
                blend of technical expertise and creative vision to every project. Our approach 
                is deeply personal, ensuring that each photograph reflects the authentic essence 
                of our subjects.
              </p>
              
              <p>
                Based in Kenya, we&apos;ve had the privilege of documenting countless love stories, 
                milestone celebrations, and creative visions. Every click of our shutter is 
                guided by our commitment to excellence and our passion for storytelling.
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
                <image
                  href="https://images.unsplash.com/photo-1554048612-b6a482b224b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                />
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
                    <h3 className="font-serif font-semibold text-lg mb-2">Our Philosophy</h3>
                    <p className="text-muted-foreground text-sm">
                      &quot;Every photograph should tell a story that words cannot express. 
                      We don&apos;t just capture images; we preserve emotions, freeze time, 
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