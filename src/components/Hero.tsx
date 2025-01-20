import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background com gradiente e imagem */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 -z-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070')`,
        }}
      />
      
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900 -z-10" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Automatize suas tarefas
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Transforme sua empresa com soluções de automação inteligente.
            Aumente a produtividade e reduza custos com nossa tecnologia avançada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
              Começar Agora
            </button>
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;