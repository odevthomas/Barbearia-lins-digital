import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

interface PromoModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const PromoModal: React.FC<PromoModalProps> = ({
  isOpen = true,
  onClose = () => {},
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-900 border-gold p-0 overflow-hidden max-w-md">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
            alt="Promoção"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Gift className="w-16 h-16 text-gold animate-bounce" />
          </div>
        </div>
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gold text-center">
              Oferta Especial!
            </DialogTitle>
            <DialogDescription className="text-center text-gray-300 mt-2">
              Ganhe um tratamento de barba GRÁTIS na sua primeira visita!
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-4">
            <div className="bg-zinc-800 p-4 rounded-lg text-center">
              <p className="text-white font-semibold">Como funciona:</p>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>✓ Válido para novos clientes</li>
                <li>✓ Agende seu corte de cabelo</li>
                <li>✓ Receba o tratamento de barba grátis</li>
                <li>✓ Oferta por tempo limitado</li>
              </ul>
            </div>
            <Button
              className="w-full bg-gold hover:bg-gold/90 text-black font-bold"
              onClick={onClose}
            >
              Aproveitar Agora!
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoModal;
