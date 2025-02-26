import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Users } from "lucide-react";

interface AboutSectionProps {
  history?: string;
  yearsFounded?: number;
  location?: string;
  teamSize?: number;
  imageUrl?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  history = "Founded in the heart of the city, Barbearia Lins has been a cornerstone of men's grooming excellence for over two decades. Our commitment to precision, style, and customer satisfaction has made us a trusted name in the industry.",
  yearsFounded = 2000,
  location = "123 Luxury Avenue, Downtown",
  teamSize = 8,
  imageUrl = "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074&h=1000",
}) => {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - yearsFounded;

  return (
    <section className="w-full bg-black py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <img
                src={imageUrl}
                alt="Barbearia Lins Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold-500 p-6 rounded-lg hidden md:block">
              <p className="text-4xl font-bold text-black">
                {yearsInBusiness}+
              </p>
              <p className="text-black font-medium">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gold-500 mb-4">
                Our Legacy
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">{history}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-zinc-900 border-zinc-800">
                <div className="flex flex-col items-center text-center">
                  <Clock className="h-8 w-8 text-gold-500 mb-2" />
                  <p className="text-sm text-gray-400">Established</p>
                  <p className="text-lg font-bold text-white">{yearsFounded}</p>
                </div>
              </Card>

              <Card className="p-4 bg-zinc-900 border-zinc-800">
                <div className="flex flex-col items-center text-center">
                  <MapPin className="h-8 w-8 text-gold-500 mb-2" />
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg font-bold text-white">{location}</p>
                </div>
              </Card>

              <Card className="p-4 bg-zinc-900 border-zinc-800">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-gold-500 mb-2" />
                  <p className="text-sm text-gray-400">Expert Barbers</p>
                  <p className="text-lg font-bold text-white">{teamSize}</p>
                </div>
              </Card>
            </div>

            <Button
              className="bg-gold-500 hover:bg-gold-600 text-black"
              size="lg"
            >
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
