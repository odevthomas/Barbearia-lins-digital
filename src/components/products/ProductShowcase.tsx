import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, X, Plus, Minus, ShoppingCart } from "lucide-react";

const defaultProducts = [
  {
    id: "1",
    nome: "Óleo para Barba Premium",
    preco: 129.90,
    imagem: "/produtos/Óleo para Barba Premium.jpg",
    descricao: "Óleo premium para barba com ingredientes naturais",
    categoria: "barba",
    emEstoque: true,
  },
  {
    id: "2",
    nome: "Pomada Modeladora",
    preco: 89.90,
    imagem: "/produtos/Pomada Modeladora.jpg",
    descricao: "Pomada de fixação forte com acabamento fosco",
    categoria: "cabelo",
    emEstoque: true,
  },
  {
    id: "3",
    nome: "Tesoura Profissional",
    preco: 159.90,
    imagem: "/produtos/Tesoura Profissional.jpg",
    descricao: "Tesoura profissional para acabamentos precisos",
    categoria: "acessorios",
    emEstoque: false,
  },
  {
    id: "4",
    nome: "Balm Hidratante para Barba",
    preco: 49.90,
    imagem: "/produtos/Balm Hidratante para Barba.jpg",
    descricao: "Balm que hidrata e suaviza a barba, ideal para o cuidado diário.",
    categoria: "barba",
    emEstoque: true,
  },
  {
    id: "5",
    nome: "Cera Modeladora para Cabelo",
    preco: 59.90,
    imagem: "/produtos/Cera Modeladora para Cabelo.jpg",
    descricao: "Cera para modelar cabelos com fixação forte e acabamento natural.",
    categoria: "cabelo",
    emEstoque: true,
  },
  {
    id: "6",
    nome: "Kit de Cuidados para Barba",
    preco: 199.90,
    imagem: "/produtos/Kit de Cuidados para Barba.jpg",
    descricao: "Inclui óleo, balm e shampoo para cuidados completos da barba.",
    categoria: "barba",
    emEstoque: true,
  },
  {
    id: "7",
    nome: "Shampoo para Cabelo",
    preco: 39.90,
    imagem: "/produtos/Shampoo para Cabelo.jpg",
    descricao: "Shampoo suave que limpa e revitaliza os cabelos.",
    categoria: "cabelo",
    emEstoque: true,
  },
  {
    id: "8",
    nome: "Pente de Madeira",
    preco: 19.90,
    imagem: "/produtos/Pente de Madeira.jpg",
    descricao: "Pente artesanal de madeira, ideal para barbas e cabelos.",
    categoria: "acessorios",
    emEstoque: true,
  },
];

const ProductShowcase = () => {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [carrinhoItens, setCarrinhoItens] = useState([]);

  const categorias = [
    { id: "todos", nome: "Todos" },
    { id: "cabelo", nome: "Cabelo" },
    { id: "barba", nome: "Barba" },
    { id: "acessorios", nome: "Acessórios" },
  ];

  const produtosFiltrados = defaultProducts.filter((produto) => {
    const correspondeBusca = 
      produto.nome.toLowerCase().includes(busca.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(busca.toLowerCase());
    const correspondeCategoria =
      categoriaAtiva === "todos" || produto.categoria === categoriaAtiva;
    return correspondeBusca && correspondeCategoria;
  });

  const handleAddToCart = (id) => {
    const produto = defaultProducts.find((p) => p.id === id);
    if (produto && produto.emEstoque) {
      // Verificar se o produto já está no carrinho
      const itemExistente = carrinhoItens.find(item => item.id === id);
      
      if (itemExistente) {
        setCarrinhoItens(carrinhoItens.map(item => 
          item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
        ));
      } else {
        setCarrinhoItens([...carrinhoItens, { ...produto, quantidade: 1 }]);
      }
      
      // Abrir o carrinho automaticamente
      setCarrinhoAberto(true);
    }
  };

  const removerDoCarrinho = (id) => {
    setCarrinhoItens(carrinhoItens.filter(item => item.id !== id));
  };

  const alterarQuantidade = (id, delta) => {
    setCarrinhoItens(
      carrinhoItens.map(item => {
        if (item.id === id) {
          const novaQuantidade = item.quantidade + delta;
          if (novaQuantidade < 1) {
            return null; // Será filtrado
          }
          return { ...item, quantidade: novaQuantidade };
        }
        return item;
      }).filter(Boolean)
    );
  };

  const totalItens = carrinhoItens.reduce((acc, item) => acc + item.quantidade, 0);
  
  const valorTotal = carrinhoItens.reduce(
    (acc, item) => acc + item.preco * item.quantidade, 
    0
  );

  const limparCarrinho = () => {
    setCarrinhoItens([]);
  };

  const finalizarCompra = () => {
    alert(`Compra finalizada! Total: R$ ${valorTotal.toFixed(2)}`);
    limparCarrinho();
    setCarrinhoAberto(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 relative">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Produtos Premium para Barbearia
          </h1>
          <p className="text-gray-400">
            Qualidade profissional para resultados excepcionais
          </p>
        </header>

        {/* Botão do carrinho */}
        <div className="fixed top-4 right-4 z-50">
          <button 
            className="bg-white text-black p-3 rounded-full relative shadow-lg hover:bg-gray-200 transition-colors"
            onClick={() => setCarrinhoAberto(!carrinhoAberto)}
          >
            <ShoppingBag className="w-6 h-6" />
            {totalItens > 0 && (
              <span className="absolute -top-2 -right-2 bg-white border-2 border-black text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {totalItens}
              </span>
            )}
          </button>
        </div>

        {/* Carrinho drawer */}
        <AnimatePresence>
          {carrinhoAberto && (
            <>
              {/* Overlay para fechar o carrinho */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setCarrinhoAberto(false)}
                className="fixed inset-0 bg-black z-40"
              />
              
              {/* Painel do carrinho */}
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed top-0 right-0 h-full w-full max-w-md bg-black border-l border-white/20 z-50 flex flex-col"
              >
                <div className="p-6 border-b border-white/20 flex justify-between items-center">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <ShoppingCart className="w-6 h-6" />
                    Seu Carrinho
                  </h2>
                  <button 
                    onClick={() => setCarrinhoAberto(false)}
                    className="p-2 hover:bg-white/10 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6">
                  {carrinhoItens.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <ShoppingBag className="w-16 h-16 mb-4 text-white/30" />
                      <p className="text-white/60 mb-2">Seu carrinho está vazio</p>
                      <button 
                        onClick={() => setCarrinhoAberto(false)}
                        className="px-4 py-2 mt-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Continuar Comprando
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {carrinhoItens.map((item) => (
                        <motion.div 
                          key={item.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-4 p-4 bg-white/5 rounded-lg"
                        >
                          <div className="w-16 h-16 bg-white/10 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0">
                            <img 
                              src={item.imagem} 
                              alt={item.nome} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-medium">{item.nome}</h3>
                            <p className="text-sm text-white/60">
                              R$ {item.preco.toFixed(2)}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => alterarQuantidade(item.id, -1)}
                              className="p-1 hover:bg-white/10 rounded"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            
                            <span className="w-8 text-center font-medium">
                              {item.quantidade}
                            </span>
                            
                            <button 
                              onClick={() => alterarQuantidade(item.id, 1)}
                              className="p-1 hover:bg-white/10 rounded"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="w-20 text-right font-medium">
                            R$ {(item.preco * item.quantidade).toFixed(2)}
                          </div>
                          
                          <button 
                            onClick={() => removerDoCarrinho(item.id)}
                            className="p-2 hover:bg-white/10 rounded"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
                
                {carrinhoItens.length > 0 && (
                  <div className="p-6 border-t border-white/20">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/60">Subtotal</span>
                      <span>R$ {valorTotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between font-bold text-xl mb-6">
                      <span>Total</span>
                      <span>R$ {valorTotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={limparCarrinho}
                        className="px-4 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        Limpar Carrinho
                      </button>
                      
                      <button 
                        onClick={finalizarCompra}
                        className="px-4 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
                      >
                        Finalizar Compra
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Filtros e Busca */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:gap-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 rounded-lg
                         border border-white/10 focus:border-white/20
                         transition-colors outline-none"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaAtiva(categoria.id)}
                className={`
                  px-4 py-2 rounded-lg whitespace-nowrap transition-colors
                  ${categoriaAtiva === categoria.id
                    ? "bg-white text-black"
                    : "bg-white/5 hover:bg-white/10"}
                `}
              >
                {categoria.nome}
              </button>
            ))}
          </div>
        </div>

        {/* Grade de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {produtosFiltrados.map((produto) => (
            <motion.div
              key={produto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 rounded-lg overflow-hidden group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover transition-transform duration-500
                           group-hover:scale-110"
                />
                {!produto.emEstoque && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-medium">
                      Fora de Estoque
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-lg">{produto.nome}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {produto.descricao}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">
                    R$ {produto.preco.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(produto.id)}
                    disabled={!produto.emEstoque}
                    className={`
                      p-2 rounded-lg transition-colors flex items-center gap-2
                      ${produto.emEstoque
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-white/10 text-gray-400 cursor-not-allowed"}
                    `}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span className="hidden md:inline">
                      {produto.emEstoque ? "Adicionar" : "Indisponível"}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {produtosFiltrados.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            Nenhum produto encontrado para sua busca
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductShowcase;