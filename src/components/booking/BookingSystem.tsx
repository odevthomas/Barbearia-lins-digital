import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ChevronLeft, User, Phone, Mail } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const BookingSystem = ({ onSubmit = () => {}, isOpen = true }) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: null,
    date: null,
    time: "",
    name: "",
    phone: "",
    email: "",
  });

  const services = [
    { id: "1", name: "Corte Clássico", price: 35, duration: "30 min" },
    { id: "2", name: "Barba", price: 25, duration: "20 min" },
    { id: "3", name: "Pacote Premium", price: 55, duration: "45 min" },
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00",
    "14:00", "15:00", "16:00", "17:00"
  ];

  const handleServiceSelect = (service) => {
    setBookingData({ ...bookingData, service });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (!isOpen) return null;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="flex items-center gap-2 hover:text-gray-300 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Voltar
              </button>
            )}
            <h1 className="text-3xl font-bold">Agendamento</h1>
          </div>
          
          {/* Progress Bar */}
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-1 flex-1 rounded-full transition-all duration-500"
                style={{
                  background: i <= step ? "white" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Steps Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-medium mb-6">Selecione o serviço</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className={`
                      p-6 rounded-lg cursor-pointer transition-all duration-300
                      ${bookingData.service?.id === service.id 
                        ? "bg-white text-black" 
                        : "bg-zinc-900 hover:bg-zinc-800"}
                    `}
                  >
                    <h3 className="text-lg font-medium mb-2">{service.name}</h3>
                    <p className="text-2xl font-bold mb-4">R$ {service.price}</p>
                    <p className="text-sm opacity-70">{service.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-medium mb-6">
                  <Calendar className="inline-block mr-2 mb-1" />
                  Data e Horário
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-6 bg-zinc-900 rounded-lg">
                    {/* Aqui você pode integrar um calendário real */}
                    <input
                      type="date"
                      className="w-full bg-transparent border-b border-white/20 p-2
                               focus:outline-none focus:border-white"
                      onChange={(e) => setBookingData({
                        ...bookingData,
                        date: new Date(e.target.value)
                      })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setBookingData({ ...bookingData, time })}
                        className={`
                          p-3 rounded-lg transition-all duration-300
                          ${bookingData.time === time 
                            ? "bg-white text-black" 
                            : "bg-zinc-900 hover:bg-zinc-800"}
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-medium mb-6">Seus dados</h2>
              <div className="space-y-4">
                {[
                  { icon: User, name: "name", placeholder: "Seu nome" },
                  { icon: Phone, name: "phone", placeholder: "Telefone" },
                  { icon: Mail, name: "email", placeholder: "E-mail" }
                ].map(({ icon: Icon, name, placeholder }) => (
                  <div key={name} className="relative">
                    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={name === "email" ? "email" : "text"}
                      name={name}
                      placeholder={placeholder}
                      value={bookingData[name]}
                      onChange={(e) => setBookingData({
                        ...bookingData,
                        [name]: e.target.value
                      })}
                      className="w-full bg-zinc-900 rounded-lg py-3 px-12
                               border border-white/10 focus:border-white/30
                               transition-all duration-300 outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Button */}
          {(bookingData.service || step > 1) && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={step === 3 ? () => onSubmit(bookingData) : nextStep}
              className="w-full mt-8 py-4 bg-white text-black rounded-lg
                         font-medium hover:bg-gray-100 transition-colors"
            >
              {step === 3 ? "Confirmar Agendamento" : "Continuar"}
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BookingSystem;