const SPEC_ITEMS = [
  { label: 'Área', value: 'Transformadores e Reatores' },
  { label: 'Ensaios', value: 'Rotina, Tipo e Especiais' },
  { label: 'Normas', value: 'ABNT / NBR / Regulamentações' },
  { label: 'Segurança', value: 'NR-10 · SEP' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-20 pb-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 hero-bg-image" aria-hidden />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-accent font-medium text-sm uppercase tracking-wider text-glow">
              Engenharia Elétrica · Ensaios e Transformadores
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Leandro César
              <br />
              <span className="gradient-text text-glow">Carneiro</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl">
              Liderança de equipe técnica em ensaios elétricos, transformadores e
              garantia de conformidade com normas. Foco em qualidade, documentação
              e melhoria contínua.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-slate-900 font-semibold hover:bg-amber-400 transition-all duration-300 box-glow box-glow-hover"
              >
                Entrar em contato
              </a>
              <a
                href="#experiencia"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-amber-500/50 text-slate-300 hover:border-accent hover:text-accent transition-all duration-300"
              >
                Ver experiência
              </a>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="w-full max-w-sm technical-panel bg-card/90 border border-slate-700 rounded-lg p-5 pl-5 box-glow-hover transition-shadow duration-300">
              <p className="text-amber-400/90 text-xs font-semibold uppercase tracking-wider mb-4">
                Especificação técnica
              </p>
              <ul className="space-y-3 text-slate-300 text-sm">
                {SPEC_ITEMS.map((item) => (
                  <li key={item.label} className="flex justify-between gap-4">
                    <span className="text-slate-500 shrink-0">{item.label}</span>
                    <span className="text-right">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
