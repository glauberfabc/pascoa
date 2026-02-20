
import React from 'react';

const Methodology: React.FC = () => {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDwrLSnQUsCufED7q5qZT_B83OoKRloHCqQDI98rOuwNbXUghg3pOOwsbomp5llNV3QnbajpADjYXL02jN4DXYyMQJp_sL4oS_9hqpn2TwAA3-aqy2xM9qrV51N9BkW68Llv-EmxiOh_jqLR4JT3ZL0Ck1zmZA9ZNrPLY9NWX1FsMPcPwXgCX4n2ZfYMugq-kf3BkXjFenjoL5u-PWXJ6tg0ePnzqXgSfPXyoqpvXNBjGQnzWXDIBNtNY3O97GsX5ezZx4sL9cH_m5X",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAaqnvfF_CJQYFl0z4Sx4Bv700qatgQzSs92iiM7pMpYZHavkk0iVjcStngVhR8sRL00CvbbylvmZe1yd3XmWOnpzhq4I9yJm9d0bdUwrduqnhTJBlGZ30d2KRuJiDLmu7EN4wvIk1jPQoBYxLll-5mNquGj-f4xmQvkDHRLn9hNcGzheU0w_zPhJ2r7-I0R3b0M5pJ9Ou4wSv9LQns0Wu5vf5Hkxs1AMnCA6nZqQ8Q3aodIPK5exfyoJIrL-3t_kW1Dnr2xvK8Ax5z",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBeI04XEix2Z6PxQxji45hP1dEWPRP5BbTm_Bjw_2cZrKkVZPbt0-WtsHkvz8uN2apBIq0HYwIdeRb-0BOQb_zmWbAf5nJ_YzvfX1N-_FrlSoT0LGcKnYHnk4nFMQoolgCQjBfsHGf8-fhkTZKZETrUPc_3iFOdWyrWAODTmue0FOcALJ5bpJ38qdsMzWxzrE7HD0srigYxlXPyjMNYOdyK-C2fH8kRW2Sv-TkrczDxQCGZ8FybqBakKIjxkm3jq8FU3KsaP2zEeK_E"
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
          Metodologia exclusiva sem temperagem
        </h2>
        <div className="space-y-6 text-gray-600 mb-16 text-lg">
          <p>
            Se você mora em locais quentes, nunca trabalhou com chocolate, ou até já trabalhou, mas busca algo mais simples, <strong>rápido e barato sem perder a qualidade</strong>, eu tenho a solução.
          </p>
          <p className="text-secondary font-medium">
            Com o método exclusivo que eu desenvolvi e validei, você consegue fazer ovos de páscoa de alta qualidade sem precisar de têmpera usando como base a cobertura fracionada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${i === 1 ? 'md:-mt-8 md:mb-8' : ''}`}
            >
              <img 
                alt={`Trabalho de confeitaria ${i + 1}`} 
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" 
                src={img} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
