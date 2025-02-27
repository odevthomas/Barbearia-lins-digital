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
  history = "Fundada no coração da cidade, a Barbearia Lins tem sido um marco da excelência em cuidados masculinos por mais de duas décadas. Nosso compromisso com a precisão, estilo e satisfação do cliente nos tornou um nome confiável na indústria.",
  yearsFounded = 2000,
  location = "Avenida Luxuosa, 123, Centro",
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
                alt="Interior da Barbearia Lins"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg hidden md:block">
              <p className="text-4xl font-bold text-black">
                {yearsInBusiness}+
              </p>
              <p className="text-black font-medium">Anos de Excelência</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Nosso Legado
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">{history}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-black border-gray-800">
                <div className="flex flex-col items-center text-center">
                  <Clock className="h-8 w-8 text-white mb-2" />
                  <p className="text-sm text-gray-400">Fundada em</p>
                  <p className="text-lg font-bold text-white">{yearsFounded}</p>
                </div>
              </Card>

              <Card className="p-4 bg-black border-gray-800">
                <div className="flex flex-col items-center text-center">
                  <MapPin className="h-8 w-8 text-white mb-2" />
                  <p className="text-sm text-gray-400">Localização</p>
                  <p className="text-lg font-bold text-white">{location}</p>
                </div>
              </Card>

              <Card className="p-4 bg-black border-gray-800">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-white mb-2" />
                  <p className="text-sm text-gray-400">Barbeiros Especializados</p>
                  <p className="text-lg font-bold text-white">{teamSize}</p>
                </div>
              </Card>
            </div>

            <Button
              className="bg-white hover:bg-gray-300 text-black"
              size="lg"
            >
              Agendar uma Consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;