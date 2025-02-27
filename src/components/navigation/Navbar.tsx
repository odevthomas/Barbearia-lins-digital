import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Scissors } from "lucide-react";

interface NavbarProps {
  onBookNow?: () => void;
  isTransparent?: boolean;
}

const Navbar = ({
  onBookNow = () => console.log("Book Now clicked"),
  isTransparent = false,
}: NavbarProps) => {
  return (
    <nav
      className={`w-full h-20 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent" : "bg-black/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Scissors className="h-8 w-8 text-gold " />
          <span className="text-2xl font-bold text-white">Barbearia Lins</span>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-white hover:text-gold px-4 py-2 transition-colors"
                href="#services"
              >
                Serviços
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-black hover:text-gold">
                Produtos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4 bg-black border border-black rounded-lg text-white ">
                  <div className="grid gap-3">
                    <NavigationMenuLink
                      className="block p-2 hover:bg-black rounded-md"
                      href="#grooming"
                    >
                      Produtos para Barba
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="block p-2 hover:bg-black rounded-md"
                      href="#accessories"
                    >
                      Acessórios
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="block p-2 hover:bg-black rounded-md"
                      href="#gift-cards"
                    >
                      Vale Presente
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-white hover:text-gold px-4 py-2 transition-colors"
                href="#gallery"
              >
                Galeria
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="text-white hover:text-gold px-4 py-2 transition-colors"
                href="#about"
              >
                Sobre
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Book Now Button */}
        <Button
          onClick={onBookNow}
          className="bg-gold hover:bg-gold/90 text-black font-semibold"
        >
          Agendar
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
