'use client';

import { useState, useEffect } from 'react';

export function WelcomeToast() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed top-20 right-4 sm:right-6 z-50 px-6 py-3 rounded-lg bg-card border border-amber-500/50 text-amber-400/95 shadow-lg animate-fade-in flex items-center gap-3"
      role="status"
      aria-live="polite"
    >
      <span className="font-medium">Bem-vindo(a) ao meu portfólio!</span>
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="p-1 rounded hover:bg-amber-500/20 text-slate-400 hover:text-amber-400 transition-colors"
        aria-label="Fechar"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
