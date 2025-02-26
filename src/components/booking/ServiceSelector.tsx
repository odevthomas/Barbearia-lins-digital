import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
}

interface ServiceSelectorProps {
  services?: Service[];
  onSelect?: (service: Service) => void;
  selectedServiceId?: string;
}

const defaultServices: Service[] = [
  {
    id: "1",
    name: "Corte Clássico",
    price: 35,
    duration: "30 min",
    description: "Corte tradicional com acabamento preciso",
  },
  {
    id: "2",
    name: "Barba",
    price: 25,
    duration: "20 min",
    description: "Modelagem e acabamento profissional da barba",
  },
  {
    id: "3",
    name: "Pacote Premium",
    price: 55,
    duration: "45 min",
    description: "Corte, barba e tratamento com toalha quente",
  },
];

const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  services = defaultServices,
  onSelect = () => {},
  selectedServiceId = "",
}) => {
  return (
    <div className="w-full bg-black p-6">
      <h2 className="text-2xl font-bold text-gold mb-6 text-center">
        Escolha seu Serviço
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Card
            key={service.id}
            className={`p-6 cursor-pointer transition-all hover:border-gold
              ${selectedServiceId === service.id ? "border-2 border-gold" : "border border-gray-700"}`}
            onClick={() => onSelect(service)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-sm">Duração: {service.duration}</span>
                </div>
              </div>
              {selectedServiceId === service.id && (
                <Check className="text-gold h-6 w-6" />
              )}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-2xl font-bold text-gold">
                R$ {service.price}
              </span>
              <Button
                variant={
                  selectedServiceId === service.id ? "secondary" : "outline"
                }
                onClick={() => onSelect(service)}
              >
                {selectedServiceId === service.id
                  ? "Selecionado"
                  : "Selecionar"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelector;
