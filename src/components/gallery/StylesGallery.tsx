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
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Clean and timeless fade haircut with precision styling",
  },
  {
    id: "2",
    name: "Pompadour Moderno",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Contemporary take on the classic pompadour style",
  },
  {
    id: "3",
    name: "Corte Texturizado",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Modern textured crop with natural movement",
  },
  {
    id: "4",
    name: "Modelagem de Barba",
    image:
      "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Precision beard trimming and shaping",
  },
  {
    id: "5",
    name: "Penteado para Trás",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Classic slicked back style with modern edge",
  },
  {
    id: "6",
    name: "Barba Feita",
    image:
      "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&q=80&w=600&h=600",
    description: "Traditional straight razor shave experience",
  },
];

const StylesGallery: React.FC<StylesGalleryProps> = ({
  styles = defaultStyles,
}) => {
  return (
    <div className="w-full bg-black py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gold mb-8 text-center">
          Nossos Estilos Exclusivos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style) => (
            <Dialog key={style.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:border-gold transition-all duration-300 bg-zinc-900 border-zinc-800">
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
                    <p className="text-gray-400 text-sm">{style.description}</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-zinc-900 border-zinc-800 max-w-2xl">
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
                    <p className="text-gray-400">{style.description}</p>
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
