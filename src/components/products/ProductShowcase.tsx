import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
}

interface ProductShowcaseProps {
  products?: Product[];
  onAddToCart?: (productId: string) => void;
}

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Premium Beard Oil",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&q=80&w=300&h=400",
    description: "Luxurious beard oil for the modern gentleman",
    category: "beard",
    inStock: true,
  },
  {
    id: "2",
    name: "Hair Pomade",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1585751119414-ef2636f8adf3?auto=format&fit=crop&q=80&w=300&h=400",
    description: "Strong hold matte finish pomade",
    category: "hair",
    inStock: true,
  },
  {
    id: "3",
    name: "Beard Brush",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?auto=format&fit=crop&q=80&w=300&h=400",
    description: "Premium boar bristle beard brush",
    category: "accessories",
    inStock: false,
  },
];

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products = defaultProducts,
  onAddToCart = () => console.log("Add to cart clicked"),
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gold mb-8 text-center">
          Premium Grooming Products
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search products..."
              className="pl-10 bg-zinc-900 border-zinc-700 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="text-gray-400" />
            <Tabs defaultValue="all" className="w-[400px]">
              <TabsList className="bg-zinc-900">
                <TabsTrigger
                  value="all"
                  onClick={() => setActiveCategory("all")}
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="hair"
                  onClick={() => setActiveCategory("hair")}
                >
                  Hair
                </TabsTrigger>
                <TabsTrigger
                  value="beard"
                  onClick={() => setActiveCategory("beard")}
                >
                  Beard
                </TabsTrigger>
                <TabsTrigger
                  value="accessories"
                  onClick={() => setActiveCategory("accessories")}
                >
                  Accessories
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              inStock={product.inStock}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No products found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductShowcase;
