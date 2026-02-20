
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-primary tracking-widest">
            PÁSCOA <span className="text-sm font-sans font-normal uppercase text-secondary ml-1">Lucrativa</span>
          </h2>
        </div>
        
        <div className="space-y-2">
          <p className="text-gray-500 text-sm">Copyright © 2024 Camila Ayana. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
