import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, ArrowLeft } from "lucide-react";
import ServiceSelector from "./ServiceSelector";

interface BookingSystemProps {
  onSubmit?: (bookingData: BookingData) => void;
  isOpen?: boolean;
}

interface BookingData {
  service: {
    id: string;
    name: string;
    price: number;
  } | null;
  date: Date | null;
  time: string;
  name: string;
  phone: string;
  email: string;
}

const BookingSystem: React.FC<BookingSystemProps> = ({
  onSubmit = () => {},
  isOpen = true,
}) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    service: null,
    date: null,
    time: "",
    name: "",
    phone: "",
    email: "",
  });

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleServiceSelect = (service: any) => {
    setBookingData({ ...bookingData, service });
  };

  const handleDateSelect = (date: Date | null) => {
    setBookingData({ ...bookingData, date });
  };

  const handleTimeSelect = (time: string) => {
    setBookingData({ ...bookingData, time });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(bookingData);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (!isOpen) return null;

  return (
    <div className="w-full max-w-4xl mx-auto bg-black p-6 rounded-lg shadow-xl">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-gold">Agende seu Horário</h2>
          <div className="flex gap-2">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={prevStep}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Voltar
              </Button>
            )}
          </div>
        </div>
        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded ${i <= step ? "bg-gold" : "bg-gray-600"}`}
            />
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <ServiceSelector
            selectedServiceId={bookingData.service?.id}
            onSelect={handleServiceSelect}
          />
          {bookingData.service && (
            <Button
              className="w-full bg-gold hover:bg-gold/90 text-black"
              onClick={nextStep}
            >
              Continuar para Seleção de Data
            </Button>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <Card className="p-6 border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Selecione a Data
                </h3>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {bookingData.date ? (
                        format(bookingData.date, "PPP", { locale: ptBR })
                      ) : (
                        <span>Escolha uma data</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={bookingData.date || undefined}
                      onSelect={handleDateSelect}
                      locale={ptBR}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Selecione o Horário
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={
                        bookingData.time === time ? "secondary" : "outline"
                      }
                      onClick={() => handleTimeSelect(time)}
                      className="w-full"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {bookingData.date && bookingData.time && (
            <Button
              className="w-full bg-gold hover:bg-gold/90 text-black"
              onClick={nextStep}
            >
              Continuar para Dados de Contato
            </Button>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <Card className="p-6 border-zinc-800">
            <h3 className="text-xl font-semibold text-white mb-4">
              Dados de Contato
            </h3>
            <div className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Seu Nome"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  className="bg-zinc-900 border-zinc-700"
                />
              </div>
              <div>
                <Input
                  name="phone"
                  placeholder="Telefone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  className="bg-zinc-900 border-zinc-700"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  className="bg-zinc-900 border-zinc-700"
                />
              </div>
            </div>
          </Card>

          <Button
            className="w-full bg-gold hover:bg-gold/90 text-black"
            onClick={handleSubmit}
            disabled={
              !bookingData.name || !bookingData.phone || !bookingData.email
            }
          >
            Confirmar Agendamento
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookingSystem;
