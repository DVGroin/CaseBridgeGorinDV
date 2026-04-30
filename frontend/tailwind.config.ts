import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // можно добавить кастомные цвета из дизайна CaseBridge
        brand: {
           DEFAULT: '#2563eb', // акцентный синий
           light: '#3b82f6',
           dark: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
};

export default config;
