
import React, { useEffect, useRef } from 'react';

const Header: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();

    const handleScroll = () => {
      const hero = heroRef.current;
      if (!video || !video.duration || !hero) return;

      const heroHeight = hero.offsetHeight;
      const scrolled = Math.max(0, window.scrollY);
      const progress = Math.min(scrolled / heroHeight, 1);

      video.currentTime = progress * video.duration;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* Sticky container: hero ocupa 200vh para dar "espaço" ao scroll */
    <div className="relative h-[200vh]">
      <header
        ref={heroRef}
        id="hero"
        className="sticky top-0 h-screen overflow-hidden"
      >
        {/* Vídeo como fundo full-cover */}
        <video
          ref={videoRef}
          src="/video.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />

        {/* Overlay escuro para legibilidade do texto */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Logo */}
        <nav className="absolute top-0 left-0 right-0 py-6 flex justify-center z-20">
          <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full shadow-sm border border-white/30">
            <h1 className="text-xl font-display font-bold text-white tracking-wide">
              PÁSCOA <span className="text-xs font-sans font-normal uppercase text-pink-200 ml-1">Lucrativa</span>
            </h1>
          </div>
        </nav>

        {/* Conteúdo centralizado sobre o vídeo */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center gap-8">
          <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white font-semibold text-sm rounded-full border border-white/30">
            Temporada 2024
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white drop-shadow-lg max-w-3xl">
            Aproveite a época mais <span className="text-pink-300">lucrativa</span> da confeitaria
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl drop-shadow">
            Fature muito vendendo ovos de páscoa. Mais de 15 sabores de ovos para você{' '}
            <strong>aprender e vender</strong> mesmo que nunca tenha feito na vida.
          </p>
          <a
            href="#checkout"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-success-green hover:bg-green-600 transition-all rounded-DEFAULT shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            GARANTA SUA VAGA
            <span className="material-icons ml-2">arrow_forward</span>
          </a>
        </div>

        {/* Seta de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/70">
          <span className="material-icons text-4xl">keyboard_arrow_down</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
