
import React from 'react';

const Opportunity: React.FC = () => {
    return (
        <section className="relative bg-[#080808] py-20 px-6 overflow-hidden">

            {/* Fundo decorativo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-cyan-500/8 blur-[100px] rounded-full" />
            </div>

            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-10">

                {/* Badge */}
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/15 text-red-400 font-semibold text-sm rounded-full border border-red-500/30 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
                    O Relógio Está Correndo
                </span>

                {/* Título */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                    A{' '}
                    <span className="bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent">
                        Oportunidade
                    </span>
                </h2>

                {/* Frase de abertura */}
                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                    O calendário não mente:{' '}
                    <strong className="text-white">faltam poucas semanas para a Páscoa.</strong>
                </p>

                {/* Divisor visual — dois caminhos */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-left">

                    {/* Caminho amador */}
                    <div className="rounded-2xl border border-red-500/25 bg-red-950/20 p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl">😓</span>
                            <span className="text-red-400 font-bold text-sm uppercase tracking-wide">A maioria vai fazer assim</span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Tentar vender ovos de forma <span className="text-red-400 font-semibold">amadora</span>, passando noites em claro e lucrando pouco.
                        </p>
                        <ul className="flex flex-col gap-2 mt-1">
                            {['Sem planejamento', 'Noites sem dormir', 'Lucro mínimo', 'Esgotamento'].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                                    <span className="text-red-500 text-base">✕</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Caminho do método */}
                    <div className="rounded-2xl border border-cyan-400/30 bg-cyan-950/20 p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl">🚀</span>
                            <span className="text-cyan-400 font-bold text-sm uppercase tracking-wide">Um grupo vai faturar alto</span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Usando a{' '}
                            <span className="font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                                ENGENHARIA DE PRODUÇÃO
                            </span>{' '}
                            para transformar a cozinha em uma pequena fábrica.
                        </p>
                        <ul className="flex flex-col gap-2 mt-1">
                            {['Método comprovado', 'Apenas 15 dias', 'Sem equipamento profissional', 'R$ 5.000,00 de lucro'].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                                    <span className="text-cyan-400 text-base">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Frase de fechamento */}
                <div className="max-w-2xl flex flex-col gap-4">
                    <p className="text-base md:text-lg text-white/80 leading-relaxed">
                        Você não precisa ser uma confeiteira profissional. Você só precisa do{' '}
                        <strong className="text-white">método certo</strong> para transformar sua cozinha em uma{' '}
                        <span className="font-bold bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent">
                            pequena fábrica altamente lucrativa
                        </span>{' '}
                        por apenas <strong className="text-white">15 dias</strong>.
                    </p>
                </div>

                {/* CTA */}
                <a
                    href="#checkout"
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-success-green hover:bg-green-600 transition-all rounded-DEFAULT shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    QUERO O MÉTODO AGORA
                    <span className="material-icons ml-2">arrow_forward</span>
                </a>

            </div>
        </section>
    );
};

export default Opportunity;
