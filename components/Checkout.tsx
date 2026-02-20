
import React from 'react';

const Checkout: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-secondary relative overflow-hidden" id="checkout">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')` }}></div>
      
      <div className="container mx-auto relative z-10 text-center text-white mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
          Essa é a maior chance de você <span className="text-primary">ganhar bem</span> na páscoa
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold mt-10">
          <span className="border border-white/20 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm">+ de 15 Sabores de Ovos</span>
          <span className="border border-white/20 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm">+ de 70 aulas completas</span>
          <span className="border border-white/20 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm">Curso atualizado 2024</span>
        </div>
      </div>
      
      <div className="container mx-auto max-w-5xl bg-white rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.3)] border-[6px] border-primary/20 p-10 md:p-20 relative">
        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-primary text-white font-bold px-10 py-3 rounded-full shadow-2xl text-lg whitespace-nowrap">
          OFERTA POR TEMPO LIMITADO
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <h3 className="text-3xl font-display font-bold text-primary">PÁSCOA <span className="text-sm font-sans tracking-widest text-secondary font-bold">LUCRATIVA</span></h3>
            </div>
            
            <p className="text-gray-400 line-through text-2xl font-medium">De R$ 397,00 POR:</p>
            
            <div className="flex flex-col items-center lg:items-start space-y-1">
              <p className="text-primary font-bold uppercase tracking-widest text-sm">12x DE</p>
              <div className="flex items-baseline gap-2">
                <span className="text-7xl md:text-8xl font-black text-secondary tracking-tighter">R$19,78</span>
              </div>
              <p className="text-gray-500 font-bold text-lg mt-2">OU R$ 197,00 À VISTA</p>
            </div>
            
            <button className="w-full bg-success-green hover:bg-green-600 text-white font-bold text-2xl py-6 rounded-2xl shadow-[0_10px_30px_rgba(40,167,69,0.3)] hover:scale-105 transition-all mt-10 animate-bounce-slow">
              COMPRAR AGORA
            </button>
            
            <div className="flex justify-center lg:justify-start gap-4 text-gray-300 pt-6">
              <span className="material-icons text-3xl">credit_card</span>
              <span className="material-icons text-3xl">pix</span>
              <span className="material-icons text-3xl">verified</span>
              <span className="material-icons text-3xl">lock</span>
            </div>
          </div>
          
          <div className="flex-1 space-y-8 w-full">
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-3xl flex gap-6 items-center shadow-sm">
              <div className="bg-yellow-500 text-white rounded-2xl w-20 h-20 flex flex-col items-center justify-center font-bold shadow-lg shrink-0">
                <span className="text-3xl">07</span>
                <span className="text-[10px] uppercase">Dias</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary">07 Dias de Garantia</h4>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">Se não gostar, devolvemos 100% do seu dinheiro. Risco zero.</p>
              </div>
            </div>
            
            <div className="bg-pink-50 border border-pink-100 p-8 rounded-3xl flex gap-6 items-center shadow-sm">
              <div className="w-24 h-32 bg-white rounded-xl shadow-md overflow-hidden shrink-0 border-2 border-pink-100">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpP0vGQ86Ru4cFQmit5ArGcPfiyT-z07foH794XIXwHv30z-0OxKzzjl-oD1OQzdMi6F7hBkGIDPdQ3_K5CDtnpfL95HKmOpjTyXCgOl_s0UrEKb-d6QnF4WpXHSsAWYRBDj8u6JYR6_ese_gwFUKgfB87hd5tqZjsRiuf4Dpup3Ss3BAxUFsas6JflOOHSXz_P2AvTk2umYTJRJDpgPtH8vBYpn9i-d31omfi7iQaQSOfBSGpYBHkYZAVYOrIsqLT7Re7aGvxdxMc" 
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">Ebook Páscoa Lucrativa</h4>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">Acesso exclusivo ao material de apoio com todas as receitas escritas em PDF.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
