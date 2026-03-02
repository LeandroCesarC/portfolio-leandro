const ACADEMIC = [
  {
    title: 'Bacharelado em Engenharia Elétrica',
    institution: 'Centro Universitário Internacional (UNINTER)',
    period: 'Conclusão prevista em 2026',
    location: 'Polo Santa Rita do Sapucaí – MG',
    description:
      'Formação em Engenharia Elétrica com foco em sistemas elétricos e gestão.',
  },
  {
    title: 'Técnico em Automação Industrial',
    institution: 'Escola Técnica em Eletrônica Francisco Moreira da Costa (ETE)',
    period: 'Conclusão em 2019',
    location: 'Santa Rita do Sapucaí – MG',
    description:
      'Formação técnica em automação industrial e eletrônica.',
  },
];

const COURSES = [
  { name: 'NR 10 (Norma Regulamentadora)', org: 'Conecta Soluções' },
  { name: 'SEP (Sistema Elétrico de Potência)', org: 'Conecta Soluções' },
  { name: 'Assistente Administrativo', org: 'SENAI' },
  { name: 'Gestão de Projetos', org: 'INATEL' },
];

export function Education() {
  return (
    <section id="formacao" className="py-20 px-4 sm:px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <span className="text-accent" aria-hidden>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
          </span>
          Formação
        </h2>
        <p className="text-slate-400 mb-12">
          Formação acadêmica e cursos complementares na área elétrica e gestão.
        </p>

        <h3 className="text-xl font-semibold mb-6 text-slate-200">
          Formação acadêmica
        </h3>
        <div className="space-y-6 mb-12">
          {ACADEMIC.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-card border border-slate-700/50"
            >
              <h4 className="font-semibold text-white">{item.title}</h4>
              <p className="text-accent text-sm mt-1">{item.institution}</p>
              <p className="text-slate-500 text-sm">
                {item.period} • {item.location}
              </p>
              <p className="text-slate-400 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 text-slate-200">
          Formação complementar
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {COURSES.map((item) => (
            <div
              key={item.name}
              className="p-4 rounded-lg bg-card border border-slate-700/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <span className="text-slate-300">{item.name}</span>
              <span className="text-accent text-sm">{item.org}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
