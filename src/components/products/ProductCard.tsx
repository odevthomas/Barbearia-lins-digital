import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Package } from "lucide-react";

const ProductCard = ({
  id = "1",
  name = "Óleo de Barbearia Premium",
  price = 29.99,
  image = "https://images.unsplash.com/photo-1621607512022-6aecc4fed814",
  description = "Óleo luxuoso para barba, ideal para o homem moderno. Nutre e condiciona sua barba, proporcionando um brilho saudável.",
  inStock = true,
  onAddToCart = () => console.log("Adicionar ao carrinho clicado"),
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-sm bg-black rounded-lg overflow-hidden"
    >
      <div className="relative group">
        {/* Contêiner da Imagem */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          {/* Sobreposição */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Insígnia de Estoque */}
        {!inStock && (
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span className="text-sm font-medium">Fora de Estoque</span>
            </div>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-6 space-y-4">
        {/* Informações do Produto */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white tracking-tight">
            {name}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {description}
          </p>
        </div>

        {/* Preço e Ação */}
        <div className="flex items-center justify-between pt-4">
          <div className="text-white">
            <span className="text-sm text-gray-400">Preço</span>
            <p className="text-2xl font-bold">R$ {price.toFixed(2)}</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!inStock}
            onClick={() => onAddToCart(id)}
            className={`
              px-6 py-3 rounded-lg flex items-center gap-2
              transition-colors duration-300
              ${inStock 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'}
            `}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="font-medium">
              {inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;