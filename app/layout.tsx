import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Leandro César Carneiro | Coordenador Técnico em Ensaios Elétricos',
  description:
    'Coordenador Técnico em ensaios elétricos. Experiência em transformadores, liderança de equipe, qualidade e normas técnicas. Santa Rita do Sapucaí - MG.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
