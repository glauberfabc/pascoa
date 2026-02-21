
import React from 'react';

const pillars = [
    {
        number: '01',
        icon: '🏆',
        title: 'AS 5 RECEITAS CAMPEÃS',
        description:
            'Os ovos que mais vendem em 2026 — fáceis de fazer e com alta margem de lucro.',
        color: 'from-pink-500/20 to-pink-500/5',
        border: 'border-pink-500/30',
        accent: 'text-pink-400',
    },
    {
        number: '02',
        icon: '⚙️',
        title: 'TÉCNICA DE MONTAGEM EM SÉRIE',
        description:
            'Como produzir 50, 100 ou 200 ovos sozinho, sem virar noites na cozinha.',
        color: 'from-cyan-500/20 to-cyan-500/5',
        border: 'border-cyan-500/30',
        accent: 'text-cyan-400',
    },
    {
        number: '03',
        icon: '📅',
        title: 'CRONOGRAMA DOS 15 DIAS',
        description:
            'O passo a passo exato do que você deve fazer desde a compra dos materiais até a entrega final.',
        color: 'from-purple-500/20 to-purple-500/5',
        border: 'border-purple-500/30',
        accent: 'text-purple-400',
    },
    {
        number: '04',
        icon: '📊',
        title: 'PLANILHA DE PRECIFICAÇÃO',
        description:
            'Para você nunca mais perder dinheiro por cobrar errado.',
        color: 'from-amber-500/20 to-amber-500/5',
        border: 'border-amber-500/30',
        accent: 'text-amber-400',
    },
];

const MethodSection: React.FC = () => {
    return (
        <section className="relative bg-[#0a0a0a] py-12 px-6 overflow-hidden">

            {/* Fundo decorativo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-pink-600/8 blur-[140px] rounded-full" />
            </div>

            <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-8">

                {/* Cabeçalho */}
                <div className="flex flex-col items-center text-center gap-4 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                        O que é o{' '}
                        <span className="bg-gradient-to-r from-cyan-400 via-white to-pink-400 bg-clip-text text-transparent">
                            Método Páscoa Express
                        </span>
                    </h2>
                    <p className="text-base md:text-lg text-white/70 leading-relaxed">
                        Eu criei um treinamento em vídeo focado em uma única coisa:{' '}
                        <span className="font-bold text-white">RESULTADO FINANCEIRO RÁPIDO.</span>
                    </p>
                    <p className="text-sm md:text-base text-white/55 leading-relaxed">
                        Esqueça cursos longos e cansativos. Aqui eu vou direto ao ponto e te entrego o que
                        realmente coloca dinheiro no seu bolso:
                    </p>
                </div>

                {/* Cards dos pilares */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.number}
                            className={`relative rounded-2xl border ${pillar.border} bg-gradient-to-br ${pillar.color} p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300`}
                        >
                            {/* Número */}
                            <span className={`text-5xl font-display font-black opacity-20 absolute top-4 right-5 leading-none select-none ${pillar.accent}`}>
                                {pillar.number}
                            </span>

                            {/* Ícone + título */}
                            <div className="flex flex-col gap-2">
                                <span className="text-3xl">{pillar.icon}</span>
                                <h3 className={`text-base font-bold tracking-wide ${pillar.accent}`}>
                                    {pillar.title}
                                </h3>
                            </div>

                            {/* Descrição */}
                            <p className="text-sm text-white/75 leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
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

export default MethodSection;
