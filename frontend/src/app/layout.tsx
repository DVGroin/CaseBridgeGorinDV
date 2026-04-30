import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'CaseBridge – Система команд',
  description: 'Платформа для верифицированного опыта джуниоров и командной работы',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-neutral-950 text-gray-200 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
