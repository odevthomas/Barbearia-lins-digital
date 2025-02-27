import React from "react";
import { MapPin, Train, Bus, Compass } from "lucide-react";

interface MapProps {
  address?: string;
  mapUrl?: string;
}

const Map: React.FC<MapProps> = ({
  address = "Rua Avenida Lins de Vasconcelos, 1140 - São Paulo",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870227496!2d-46.6521903!3d-23.5635609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x63b9d5d52c56c3c5!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1650000000000!5m2!1sen!2sbr",
}) => {
  return (
    <div className="w-full bg-black py-8 px-4">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">
        Conheça Nosso Endereço
      </h2>
      <div className="flex justify-center space-x-4 mb-4">
        <div className="flex items-center text-white">
          <Compass className="h-6 w-6 mr-2" />
          <span>Conecte com GPS</span>
        </div>
        <div className="flex items-center text-white">
          <Bus className="h-6 w-6 mr-2" />
          <span>Ônibus</span>
        </div>
        <div className="flex items-center text-white">
          <Train className="h-6 w-6 mr-2" />
          <span>Metrô</span>
        </div>
      </div>
      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Barbearia"
        />
      </div>
      <p className="text-white text-center mt-4">{address}</p>
    </div>
  );
};

export default Map;