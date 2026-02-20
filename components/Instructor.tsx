
import React from 'react';

const Instructor: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto flex flex-col md:flex-row gap-16 items-center max-w-6xl relative z-10">
        <div className="w-full md:w-1/2 relative">
          <div className="w-72 h-72 md:w-[450px] md:h-[450px] mx-auto rounded-full overflow-hidden border-[12px] border-[#FDF8F5] shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative">
            <img 
              alt="Camila Ayana" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8d-iDwkvH0cJ8sJ4Xf-6ZfbzjzjBelfUPeua_lduoVapJMwScLR9CciLtjBlyzdVNykLNdu5ShRrsnfKrRxGpeLV9588VwLeynm0DRm8YS1-MiFLqphh4sULqY8vCGLEu0zpBlkA4gI-a3KMmIBtgi4kvPDyJR2-tZw82bNEgxp4WSgY5DFbcuH5hA-KNVa_bBZgF7LBmNtfKqbq-MfGa9j0XsUR6x4D_wTA8DDfMTvXaXlZvAlzULc8RJYpfUwN1Il9gE1lRzLtm" 
            />
          </div>
          <div className="absolute top-10 right-10 w-24 h-24 bg-primary rounded-full blur-2xl opacity-20"></div>
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
          <div>
            <h2 className="text-4xl font-display font-bold text-primary mb-4">Prazer, Camila Ayana!</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto md:mx-0"></div>
          </div>
          
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Sou mãe de 3, <strong>especialista em confeitaria e métodos práticos de "faça e venda" de delivery.</strong>
            </p>
            <p>
              Durante meus 9 anos de experiência de mercado, desenvolvi receitas pensadas no lucro, <strong>mas sem abrir mão da qualidade de meus produtos.</strong>
            </p>
            <p className="text-secondary font-semibold italic text-xl pt-4">
              "Hoje, meu foco é mostrar para todas as confeiteiras que desejam mudar de vida, que é possível alcançar seus objetivos por meio de métodos práticos."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
