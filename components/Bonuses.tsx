
import React from 'react';

const Bonuses: React.FC = () => {
  const cards = [
    {
      id: '01',
      title: 'Ovos Infantis',
      desc: 'Mais de 5 sabores de ovos temáticos feitos especialmente para as crianças.',
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg2y4m9Xb0EYHrfBJAYvt39ce2fOft1Hy8RsTgy39bc_kI76py2eyCouqm543MSM61wYcftbDDQ_K4XnnrX4aknBgdVhmi_eKhNkzZteenZTFKwFPCBwE8f8YHOwSEExM1WElN4kFc_3_JdqxVp926iAFfAxqvp8XizTvCdacCXyGNOjerCzdH95k7mIsy8ZHiyREeYJYZOeWVwl-tKoSX--sybUTGE-oKJH-7huwO-VCJF6Bogd9LSykJT14um6T_LcuAqB5XCTEf",
      color: 'bg-primary'
    },
    {
      id: '02',
      title: 'Ovos Salgados',
      desc: 'Inove na sua confeitaria com sabores de ovos salgados que são deliciosos.',
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKKgIEHJL4EWpLwyEhsWpj-Un6wA768aALEnmwMFKtWha0GQzzqIVRcT5jdGIYig63DeOA1OkI7gk1YpsZVPcWAZgK6HsHrUNMDTK-E4Nc7m5WjHGUQLC_a81oXKJEZkjVJHcdNlI_8Vxjy4Qqua0ZpvknxJ6blruMh4Rv5SayBR9fKKCsn_r9Neacuqy9u2g0CpBeWwSmeKm36lteHu8iWEqIPmRsWNjjL2_BIyRIAqNmbtPCX9ecWAlbw3sgCuyoiYpwCdIrp_KS",
      color: 'bg-secondary'
    },
    {
      id: '03',
      title: 'Cascas Especiais',
      desc: 'Aprenda a fazer a saborosa casca de brownie e cookies, um sucesso na páscoa.',
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB62RnInWN-G1CPXtCH1epfUoQ76xEMrWNxntH15oxDsaJcKnh1suJNxuq7wmO26uspYiwjXEGGsR5MgJkNBvSKB6yD98BBejfOk5nq5b_2Ku11qtXQMZgaucFq8t7XYJKhmbzliCiQac7tBP2Os1oyblWSVfZkf3jA23rl1ni-VWPLJDmz7Hf3ySyuoBFKtQsTHJFjhsEqYzTA0ZXp4vW-Nq6w2yrKl5jF69bQHBEkfnZQ-Lq7gmLCgh_GYyGQ4HhUIrtHf0N10jDy",
      color: 'bg-secondary'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-primary mb-16">Bônus Exclusivos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {cards.map((card, idx) => (
            <div key={idx} className="group relative bg-[#FDF8F5] rounded-3xl overflow-hidden shadow-xl border border-pink-50 hover:shadow-2xl transition-all duration-300">
              <div className={`absolute top-6 left-6 ${card.color} text-white text-xs font-bold px-4 py-1.5 rounded-full z-10 shadow-lg`}>
                BÔNUS {card.id}
              </div>
              <div className="h-56 overflow-hidden">
                <img 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={card.img} 
                />
              </div>
              <div className={`p-8 ${card.color} text-white h-full`}>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-white/90 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-[40px] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="text-center relative z-10 mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-[0.2em] mb-4">Bônus Relâmpago</h3>
            <p className="text-white/80 text-lg">Oportunidade para quem agir rápido</p>
          </div>
          
          <div className="grid gap-10 relative z-10 max-w-5xl mx-auto">
            <div className="bg-white text-secondary rounded-3xl p-3 flex flex-col md:flex-row items-stretch group hover:shadow-2xl transition-all duration-500">
              <div className="md:w-[40%] h-56 md:h-auto rounded-2xl overflow-hidden">
                <img 
                  alt="Mentoria Canva" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwfuw-T5FDKqytWgpMmSP9_mDjlUCxtjtuFYHlKo1JjCEOqhigUue3QujODed4WaW-3CwW1Yg9_8fRPr6djcYGsTRxWe76fw8k2OFIao7xg7FzKpVIvjX8_6LIeeqiTZKexdmKnEJudaaRy1iHRzgLJUEsMfE22iEBIdu2l0y5Ecx00uT9rl7ej0yiG4DMbXPAR6HWK9BNNIbPvJnnKIIpG4OdKHsrwl5_kbfvd4WyK1S--0E0NqdQ8Lcku8pbTiPbY0Y95-5AwbtF" 
                />
              </div>
              <div className="md:w-[60%] p-8 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-primary mb-3">Mentoria: Canva para Páscoa</h4>
                <p className="text-gray-600 leading-relaxed">Edição de cardápio e posts profissionais para vender mais.</p>
              </div>
            </div>
            
            <div className="bg-white text-secondary rounded-3xl p-3 flex flex-col md:flex-row items-stretch group hover:shadow-2xl transition-all duration-500">
              <div className="md:w-[40%] h-56 md:h-auto rounded-2xl overflow-hidden md:order-2">
                <img 
                  alt="Mentoria Pré Páscoa" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMnOOFxvf6CeS0FnZN1u4T5x4oxje9MRAlrfXNmlB9NY5gNUZ7zUC2lsnFspylDnFc-8VPIgBqDqK6EuZJVRJ2Aqr0Z4RNUBKtPZPXV9Ke5XhoyTL7hsXCNsjbA3How0TL3hpxCC1GWdkeDzRNWAO39UatmP-lE-kfUFqpiWtD4EwU0ZIeyxv9le6uaVHSSpJJ2uOKqSKJLFh2dsess4J79E8x12ejNvzpCsludQ6zVmV8Gs4eDid6nhIgDMR4a9_O_TAS2KWmR8oW" 
                />
              </div>
              <div className="md:w-[60%] p-8 flex flex-col justify-center md:order-1">
                <h4 className="text-2xl font-bold text-primary mb-3">Mentoria: Pré Páscoa na prática</h4>
                <p className="text-gray-600 leading-relaxed">Como começar a lucrar antes mesmo da páscoa chegar. Segredos de vendas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
