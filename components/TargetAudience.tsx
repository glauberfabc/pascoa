
import React from 'react';

const TargetAudience: React.FC = () => {
  const points = [
    { title: 'Confeiteiras em geral', desc: 'Que já fazem ovos mas querem diversificar ainda mais seu cardápio.' },
    { title: 'Pessoas em busca de renda extra', desc: 'Mesmo que nunca tenha feito um ovo, o método é simples e prático.' },
    { title: 'Entusiastas da culinária', desc: 'Que querem transformar um hobby em algo lucrativo.' }
  ];

  return (
    <section className="py-24 px-6 bg-[#FDF8F5]">
      <div className="container mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1 space-y-10 order-2 lg:order-1">
          <h2 className="text-4xl font-display font-bold text-primary">Para quem é a Páscoa Lucrativa?</h2>
          <div className="space-y-8">
            {points.map((p, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-icons">check_circle</span>
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-xl mb-1">{p.title}</h3>
                  <p className="text-gray-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-md relative order-1 lg:order-2">
          <div className="absolute inset-0 bg-primary/20 rounded-[60px] rotate-6 transform translate-x-4 translate-y-4 -z-10"></div>
          <img 
            alt="Instrutora Camila Ayana" 
            className="rounded-[60px] shadow-2xl w-full h-auto object-cover border-8 border-white" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzlyjjdF_wnIgFSGrSVccWf4b_MMK-pdmWhfbnSnf5OdsAz7UbUhn-83432tfFBEHLI-hF0l4YfZYgqLhBhWZuWkSn4f02B4Aq2q07OdxKUN_PMQYpOScSfEpX1PEoAaaWZV5-3De0LOH8KRd_x8YdLFMpjVYa0TcDOTGU1q8326MvwBJGW9FdbzPBOKLQqKv1zZGWDO0tDZDIghaOIcUXRu2bZwA7LaHBSpe9GfDRINOpdzHaP6_LY07BwRQvSskoWVUki1FfE5sp" 
          />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
