import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#f59e0b',
        'accent-light': '#fbbf24',
        surface: '#0c1222',
        card: '#1a2332',
      },
    },
  },
  plugins: [],
};

export default config;
