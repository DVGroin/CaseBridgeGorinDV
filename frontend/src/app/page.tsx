import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">CaseBridge</h1>
      <p className="text-lg text-gray-400 mb-8">
        Система команд для джуниоров и компаний
      </p>
      <div className="flex gap-4">
        <Link
          href="/teams"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium"
        >
          Смотреть команды
        </Link>
        <Link
          href="/teams/create"
          className="px-6 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg font-medium"
        >
          Создать команду
        </Link>
      </div>
    </main>
  );
}
