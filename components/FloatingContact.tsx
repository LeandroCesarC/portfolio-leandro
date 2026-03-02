'use client';

import { useState, useEffect } from 'react';

export function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#contato"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-lg bg-card border border-amber-500/40 text-amber-400/90 text-sm font-medium shadow-lg hover:border-accent hover:text-accent hover:shadow-[0_0_24px_rgba(245,158,11,0.35)] transition-all duration-300 animate-pulse-glow"
      aria-label="Fale comigo - Ir para Contato"
    >
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      Fale comigo
    </a>
  );
}
