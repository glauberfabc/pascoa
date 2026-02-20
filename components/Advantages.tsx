
import React from 'react';

const Advantages: React.FC = () => {
  const cards = [
    { icon: 'trending_up', title: 'Alta demanda', desc: 'A média de ovos por pedido é 1,5 ou seja, clientes pedem mais que um ovo.' },
    { icon: 'monetization_on', title: 'Alto lucro', desc: 'Ovos caseiros podem ter lucro de até 200%, superior aos tradicionais.' },
    { icon: 'savings', title: 'Investimento baixo', desc: 'Use utensílios que tem em casa. Comece com pouco e lucre rápido.' },
    { icon: 'loyalty', title: 'Público fiel', desc: 'Com receita de qualidade, você vai fidelizar o cliente para as próximas páscoas.' }
  ];

  return (
    <section className="py-24 px-6 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Com essa metodologia, você tem muito mais vantagens
            </h2>
            <a 
              href="#checkout" 
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-DEFAULT hover:shadow-2xl transition-all transform hover:scale-105"
            >
              GARANTIR SUA VAGA
            </a>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div 
                key={i} 
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary transition-all">
                  <span className="material-icons text-3xl text-white group-hover:text-primary">{card.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-white/80 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
