'use client';

import { useState } from 'react';

const PHONE = '5535992360275';
const EMAIL = 'leandrocesarc17@hotmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/leandro-c%C3%A9sar-carneiro-639a41173';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const buildWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Olá, Leandro! Meu nome é ${name || '...'} (${email || '...'}).\n\n${message || '...'}`
    );
    return `https://wa.me/${PHONE}?text=${text}`;
  };

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <span className="text-accent" aria-hidden>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </span>
          Contato
        </h2>
        <p className="text-slate-400 mb-12">
          Entre em contato para oportunidades ou projetos na área elétrica e industrial.
        </p>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Canais de contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://wa.me/${PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  (35) 99236-0275
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-accent transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <span className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Santa Rita do Sapucaí - MG
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-card border border-slate-700/50">
            <h3 className="text-xl font-semibold mb-4">Envie uma mensagem</h3>
            <p className="text-slate-400 text-sm mb-4">
              Preencha o formulário e envie sua mensagem via WhatsApp.
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-400 mb-1">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-slate-400 mb-1">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-slate-400 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-accent hover:bg-amber-400 text-slate-900 font-semibold transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
