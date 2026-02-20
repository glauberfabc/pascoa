
import React from 'react';

const TrustBar: React.FC = () => {
  const items = [
    { icon: 'verified_user', title: '7 Dias de Garantia', desc: 'Experimente sem preocupações' },
    { icon: 'play_circle', title: 'Acesso Imediato', desc: 'Comece agora mesmo' },
    { icon: 'lock', title: 'Pagamento Seguro', desc: 'Tranquilidade na hora de pagar' }
  ];

  return (
    <div className="bg-white border-y border-gray-100 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 text-center md:text-left group">
            <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-icons">{item.icon}</span>
            </div>
            <div>
              <h3 className="font-bold text-secondary">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
