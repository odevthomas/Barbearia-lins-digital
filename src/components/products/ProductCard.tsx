import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  description?: string;
  inStock?: boolean;
  onAddToCart?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "Premium Beard Oil",
  price = 29.99,
  image = "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&q=80&w=300&h=400",
  description = "Luxurious beard oil for the modern gentleman. Nourishes and conditions your beard for a healthy shine.",
  inStock = true,
  onAddToCart = () => console.log("Add to cart clicked"),
}: ProductCardProps) => {
  return (
    <Card className="w-[300px] h-[400px] bg-zinc-900 border-zinc-800 hover:border-gold-500 transition-all duration-300">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {!inStock && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              Out of Stock
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">{name}</h3>
        <p className="text-sm text-zinc-400 line-clamp-2 mb-2">{description}</p>
        <p className="text-xl font-bold text-gold">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="w-full bg-gold hover:bg-gold/90 text-black"
                onClick={() => onAddToCart(id)}
                disabled={!inStock}
              >
                Add to Cart
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {inStock
                  ? "Add this item to your cart"
                  : "Item currently unavailable"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
