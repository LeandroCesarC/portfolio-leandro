const JOBS = [
  {
    title: 'Coordenador Técnico em ensaios elétricos',
    company: 'Tamura',
    period: 'Até o momento',
    location: 'Santa Rita do Sapucaí - MG',
    tags: ['Liderança', 'Ensaio Elétrico', 'Qualidade', 'Documentação', 'NR-10'],
    items: [
      'Liderança de equipe técnica na área de transformadores.',
      'Realização de testes e ensaios de laboratório para garantir conformidade com normas técnicas.',
      'Elaboração de documentação técnica, relatórios e manuais de operação.',
      'Desenvolvimento e implementação de planos de controle de qualidade.',
      'Estratégias de melhoria contínua com aumento da eficiência operacional.',
      'Alto padrão de segurança ocupacional e operação de equipamentos de medição e ensaio.',
      'Comunicação com equipes internas, clientes e fornecedores; relacionamento sólido com clientes em visitas.',
      'Acompanhamento de inspeção em equipamentos com clientes.',
    ],
  },
  {
    title: 'Projetista elétrico',
    company: 'Tamura',
    period: '2021',
    location: 'Santa Rita do Sapucaí - MG',
    tags: ['P&D', 'Transformadores', 'Reatores', 'Projetos'],
    items: [
      'P&D para inovação de produtos e lançamento no mercado.',
      'Interação com clientes para requisitos e soluções sob medida.',
      'Planejamento e execução de projetos de transformadores e indutores.',
      'Análise de requisitos e especificações técnicas; resolução de desafios técnicos.',
    ],
  },
  {
    title: 'Eletrotécnico',
    company: 'Tamura',
    period: '2020',
    location: 'Santa Rita do Sapucaí - MG',
    tags: ['Ensaio', 'Transformadores', 'Reatores', 'Medição'],
    items: [
      'Ensaios elétricos em transformadores e reatores (rotina, tipo e especiais).',
      'Interpretação de resultados para avaliação de qualidade e desempenho.',
      'Uso de equipamentos de medição avançados para diagnóstico de falhas.',
      'Colaboração com engenheiros, técnicos e comunicação de resultados.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 bg-grid-pattern relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <span className="text-accent" aria-hidden>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </span>
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent text-glow">
            Experiência Profissional
          </span>
        </h2>
        <p className="text-slate-400 mb-12">
          Trajetória na Tamura, da atuação em ensaios e projetos à coordenação
          técnica.
        </p>

        <div className="space-y-10">
          {JOBS.map((job) => (
            <div
              key={job.title + job.company}
              className="p-6 sm:p-8 rounded-xl bg-card/90 border border-slate-700/50 border-amber-500/20 transition-all duration-300 box-glow-hover"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400/95">
                    {job.title}
                  </h3>
                  <p className="text-accent font-medium">{job.company}</p>
                  <p className="text-slate-500 text-sm mt-1 flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1">
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      {job.location}
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-700/80 text-slate-300 text-xs border border-slate-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2 text-slate-400">
                {job.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent mt-1 shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
