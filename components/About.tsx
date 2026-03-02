const HIGHLIGHTS = [
  {
    title: 'Liderança técnica',
    description:
      'Coordenação de equipe na área de transformadores, com foco em resultados e segurança.',
  },
  {
    title: 'Ensaio e conformidade',
    description:
      'Testes e ensaios de laboratório para garantir conformidade com normas técnicas.',
  },
  {
    title: 'Documentação e qualidade',
    description:
      'Elaboração de documentação técnica, relatórios, manuais e planos de controle de qualidade.',
  },
  {
    title: 'Melhoria contínua',
    description:
      'Desenvolvimento e implementação de estratégias que aumentam a eficiência operacional.',
  },
  {
    title: 'Acompanhamento de Inspeção',
    description:
      'Acompanhamento de inspeção em equipamentos com clientes.',
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 bg-slate-900/30 bg-grid-pattern">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <span className="text-accent" aria-hidden>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </span>
          Sobre mim
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mb-12">
          Brasileiro, 27 anos, residente em Santa Rita do Sapucaí – MG. 
          Coordenador Técnico em ensaios elétricos com experiência em liderança de equipe,
          realização de testes de laboratório, documentação técnica e gestão da
          qualidade. Atuo com transformadores, reatores e equipamentos de medição e
          ensaio, sempre priorizando a segurança ocupacional e o relacionamento com
          clientes e fornecedores.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-card border border-slate-700/50 hover:border-accent/50 transition-colors"
            >
              <h3 className="font-semibold text-accent mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
