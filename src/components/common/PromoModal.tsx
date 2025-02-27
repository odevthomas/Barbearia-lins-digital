import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift, CheckCircle, Info } from "lucide-react";

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
      <DialogContent className="bg-black border border-white/20 p-0 overflow-hidden max-w-md rounded-lg shadow-lg">
        <div className="relative">
          {/* Usando uma imagem em preto e branco */}
          <div className="w-full h-48 bg-white/5 rounded-t-lg flex items-center justify-center">
            <Gift className="w-24 h-24 text-[#FFD700]" /> {/* Usando gold (#FFD700) para o ícone */}
          </div>
        </div>
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#FFD700] text-center flex items-center justify-center">
              Oferta Especial! 
              <Info className="ml-2 w-6 h-6 text-[#FFD700]" />
            </DialogTitle>
            <DialogDescription className="text-center text-white mt-2">
              Ganhe um tratamento de barba GRÁTIS na sua primeira visita!
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-4">
            <div className="bg-white/5 p-4 rounded-lg text-left shadow border border-white/10">
              <p className="text-white font-semibold text-lg">Como funciona:</p>
              <ul className="text-sm text-white/80 mt-2 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#FFD700] mr-2" /> 
                  Válido para novos clientes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#FFD700] mr-2" /> 
                  Agende seu corte de cabelo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#FFD700] mr-2" /> 
                  Receba o tratamento de barba grátis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#FFD700] mr-2" /> 
                  Oferta por tempo limitado
                </li>
              </ul>
            </div>
            <Button
              className="w-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold mt-4"
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