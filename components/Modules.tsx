
import React from 'react';

const Modules: React.FC = () => {
  const moduleList = [
    'Cobertura Fracionada',
    'Sobre as cascas',
    'Saborizando as cascas',
    'Decoração das cascas',
    'Cascas especiais'
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div className="flex-1 space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">São 14 módulos completos</h2>
            <p className="text-2xl font-medium text-secondary">Com o meu exclusivo método lucrativo</p>
          </div>
          
          <div className="space-y-4">
            {moduleList.map((m, i) => (
              <div 
                key={i} 
                className="bg-primary/5 p-5 rounded-2xl flex items-center gap-4 hover:bg-primary/10 transition-all border border-pink-100 group"
              >
                <div className="bg-primary/10 p-1 rounded-full group-hover:bg-primary transition-all">
                  <span className="material-icons text-primary group-hover:text-white">play_arrow</span>
                </div>
                <span className="font-semibold text-secondary text-lg">{m}</span>
              </div>
            ))}
          </div>
          
          <button className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-bold rounded-DEFAULT shadow-xl hover:bg-primary-dark hover:scale-105 transition-all">
            VER TODOS OS MÓDULOS
          </button>
        </div>
        
        <div className="flex-1 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full filter blur-3xl"></div>
          <img 
            alt="App mockup" 
            className="w-full max-w-md mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] relative z-10" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3fYl4RUta8a3jAkYZkn2kDczrVh4fEikGLKhoGtRkg0V4p-tNWOy6Y1-YXOlJ7nr2ddD9glttsHsHp-VlfFOhpfpwRA01jYVNR_gJdFkJ2AU7dzQTSx5IY8iFfsddKMxX0mFzjllX53akIN6UWXoHhkmWQb3k3wCTtEDc0X9nck09h7I_JgZFs0LQakfpZ01q5MveZNBJmmlXr9H-OOnfIIyN1YRlacKsmM3hu4xaOWpW2tzaV6DCxdu33JkyqvH1NmfpGazO4cYh" 
          />
        </div>
      </div>
    </section>
  );
};

export default Modules;
