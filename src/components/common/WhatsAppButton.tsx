import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}

const WhatsAppButton = ({
  phoneNumber = "+1234567890",
  message = "Olá! Gostaria de fazer um agendamento.",
  position = "bottom-right",
}: WhatsAppButtonProps) => {
  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  };

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50 bg-black`}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={handleClick}
              size="lg"
              className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300 shadow-lg"
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Fale conosco pelo WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default WhatsAppButton;
