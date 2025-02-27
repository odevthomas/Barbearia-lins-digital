import React from "react";
import { Check } from "lucide-react";

const defaultServices = [
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

const ServiceSelector = ({
  services = defaultServices,
  onSelect = () => {},
  selectedServiceId = "",
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-black">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Nossos Serviços
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`
              bg-white rounded-lg p-6 cursor-pointer
              transform transition-all duration-300 hover:scale-[1.02]
              ${
                selectedServiceId === service.id
                  ? "ring-2 ring-white shadow-lg shadow-white/10"
                  : "hover:shadow-lg hover:shadow-white/10"
              }
            `}
            onClick={() => onSelect(service)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-black">{service.name}</h3>
              {selectedServiceId === service.id && (
                <div className="bg-black rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
            </div>

            <p className="text-sm text-gray-600 mb-4">{service.description}</p>

            <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{service.duration}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-black">
                R$ {service.price}
              </span>
              <button
                className={`
                  px-4 py-2 rounded-lg font-medium transition-colors duration-300
                  ${
                    selectedServiceId === service.id
                      ? "bg-black text-white"
                      : "bg-white text-black border-2 border-black hover:bg-black hover:text-white"
                  }
                `}
                onClick={() => onSelect(service)}
              >
                {selectedServiceId === service.id ? "Selecionado" : "Selecionar"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelector;