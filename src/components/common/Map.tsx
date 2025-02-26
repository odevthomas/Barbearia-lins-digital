import React from "react";

interface MapProps {
  address?: string;
  mapUrl?: string;
}

const Map: React.FC<MapProps> = ({
  address = "Rua Example, 123 - São Paulo",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870227496!2d-46.6521903!3d-23.5635609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x63b9d5d52c56c3c5!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1650000000000!5m2!1sen!2sbr",
}) => {
  return (
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
  );
};

export default Map;
