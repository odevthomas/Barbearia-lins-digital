import React from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Style {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface StylesGalleryProps {
  styles?: Style[];
}

const defaultStyles: Style[] = [
  {
    id: "1",
    name: "Degradê Clássico",
    image:
      "/cortes/Degradê Clássico.jpeg",
    description: "Corte degradê clean e atemporal com estilo preciso.",
  },
  {
    id: "2",
    name: "Pompadour Moderno",
    image:
      "/cortes/Pompadour Moderno.jpeg",
    description: "Interpretação contemporânea do clássico pompadour.",
  },
  {
    id: "3",
    name: "Corte Texturizado",
    image:
      "/cortes/Corte Texturizado.jpeg",
    description: "Corte texturizado moderno com movimento natural.",
  },
  {
    id: "4",
    name: "Modelagem de Barba",
    image:
      "/cortes/Modelagem de Barba.jpeg",
    description: "Modelagem e aparo preciso da barba.",
  },
  {
    id: "5",
    name: "Penteado para Trás",
    image:
      "/cortes/Penteado para Trás.jpeg",
    description: "Estilo clássico penteado para trás com um toque moderno.",
  },
  {
    id: "6",
    name: "Barba Feita",
    image:
      "/cortes/Barba Feita.jpeg",
    description: "Experiência tradicional de barbear com lâmina.",
  },
];

const StylesGallery: React.FC<StylesGalleryProps> = ({
  styles = defaultStyles,
}) => {
  return (
    <div className="w-full bg-black py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Nossos Estilos Exclusivos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style) => (
            <Dialog key={style.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:border-white transition-all duration-300 border border-gray-800 bg-black">
                  <AspectRatio ratio={1}>
                    <img
                      src={style.image}
                      alt={style.name}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {style.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{style.description}</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-black border border-gray-800 max-w-2xl">
                <ScrollArea className="max-h-[80vh]">
                  <div className="p-6">
                    <AspectRatio ratio={1}>
                      <img
                        src={style.image}
                        alt={style.name}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </AspectRatio>
                    <h2 className="text-2xl font-bold text-white mt-6 mb-4">
                      {style.name}
                    </h2>
                    <p className="text-gray-300">{style.description}</p>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StylesGallery;
