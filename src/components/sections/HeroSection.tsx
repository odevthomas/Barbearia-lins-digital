import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  onBookNow?: () => void;
  onLearnMore?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Experiência Premium em Barbearia",
  subtitle = "Onde estilo encontra tradição no coração do cuidado masculino moderno",
  backgroundImage = "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074&h=1200",
  onBookNow = () => console.log("Book Now clicked"),
  onLearnMore = () => console.log("Learn More clicked"),
}) => {
  return (
    <div className="relative w-full h-[800px] bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src={backgroundImage}
          alt="Barbearia"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            onClick={onBookNow}
            className="bg-gold hover:bg-gold/90 text-black font-bold px-8 py-6 text-lg"
          >
            Agendar Agora
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onLearnMore}
            className="border-gold text-gold hover:bg-gold hover:text-black font-bold px-8 py-6 text-lg"
          >
            Saiba Mais
          </Button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};

export default HeroSection;
