const SKILL_GROUPS = [
  {
    title: 'Área técnica',
    items: [
      'Transformadores de potência',
      'Projetos de transformadores e reatores a seco',
      'Operação e interpretação de equipamentos de teste elétricos',
      'Normas e regulamentações do setor elétrico',
      'Desenho técnico / DraftSight (básico)',
      'SolidWorks (básico)',
    ],
  },
  {
    title: 'Gestão e competências',
    items: [
      'Liderança e gestão de equipes',
      'Resolução de problemas complexos e tomada de decisões técnicas',
      'Relacionamento com inspetores e órgãos reguladores',
    ],
  },
  {
    title: 'Ferramentas',
    items: ['Microsoft Excel', 'Microsoft Word'],
  },
];

const MOBILITY =
  'Disponibilidade para viagens frequentes e disposição para trabalhar em diferentes localidades.';

export function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <span className="text-accent" aria-hidden>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </span>
          Habilidades e conhecimentos
        </h2>
        <p className="text-slate-400 mb-12">
          Conhecimentos técnicos e ferramentas que aplico no dia a dia.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-xl bg-card border border-slate-700/50"
            >
              <h3 className="font-semibold text-accent mb-4">{group.title}</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 p-4 rounded-lg bg-accent/10 border border-accent/30 text-slate-300 text-sm">
          <strong className="text-accent">Mobilidade geográfica:</strong>{' '}
          {MOBILITY}
        </div>
      </div>
    </section>
  );
}
