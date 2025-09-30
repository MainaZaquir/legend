"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, CreditCard, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    budget: ""
  });

  const services = [
    { name: "Wedding Photography", price: "From KES 50,000" },
    { name: "Portrait Session", price: "From KES 15,000" },
    { name: "Fashion Shoot", price: "From KES 25,000" },
    { name: "Event Coverage", price: "From KES 20,000" },
    { name: "Custom Package", price: "Let's discuss" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppContact = () => {
    const message = `Hi LegendShotIt! I'm interested in your photography services.

Name: ${formData.name || "Not provided"}
Email: ${formData.email || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Service: ${formData.service || "Not specified"}
Budget: ${formData.budget || "Not specified"}
Message: ${formData.message || "No additional message"}

Looking forward to hearing from you!`;

    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMpesaPayment = () => {
    toast({
      title: "M-Pesa Payment",
      description: "You will receive an M-Pesa prompt on your phone shortly. Please complete the payment to confirm your booking.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email, and select a service.",
        variant: "destructive",
      });
      return;
    }

    handleWhatsAppContact();
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
            <MessageCircle className="w-5 h-5 text-gold" />
            <span className="text-gold font-medium tracking-wider uppercase text-sm">
              Let&apos;s Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Create <span className="text-gold">Magic</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let&apos;s discuss your vision and bring your story to life through stunning photography
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Book Your Session</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full p-3 border border-border rounded-md bg-background"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.name} value={service.name}>
                          {service.name} - {service.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <Input
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      placeholder="e.g., KES 20,000 - 50,000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your vision, event details, or any special requirements..."
                      rows={4}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact via WhatsApp
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={handleMpesaPayment}
                      variant="outline"
                      className="flex-1 border-gold text-gold hover:bg-gold hover:text-black"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay with M-Pesa
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <span>+254 700 000 000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <span>hello@legendshotit.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span>Nairobi, Kenya</span>
                </div>
              </CardContent>
            </Card>

            {/* Services & Pricing */}
            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center p-3 rounded-lg bg-muted/50"
                    >
                      <span className="font-medium">{service.name}</span>
                      <Badge variant="secondary" className="bg-gold/10 text-gold">
                        {service.price}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gold/10 rounded-lg">
                  <h4 className="font-semibold text-gold mb-2">Payment Options</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                      <span>WhatsApp consultation & booking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4 text-green-600" />
                      <span>M-Pesa payments accepted</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4 text-gold" />
                      <span>50% deposit to secure booking</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;