import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-5xl font-bold tracking-tight mb-4">CaseBridge</h1>
      <p className="text-xl text-gray-400 max-w-md mb-10">
        Верифицированный опыт для джуниоров через реальные бизнес-кейсы
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/teams"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition"
        >
          Смотреть команды
        </Link>
        <Link
          href="/teams/create"
          className="px-8 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-xl font-semibold transition"
        >
          Создать команду
        </Link>
      </div>
    </main>
  );
}
