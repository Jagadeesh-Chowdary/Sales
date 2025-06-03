import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Sales Dashboard</h1>
      <Link href="/dashboard" legacyBehavior>
        <a className="text-blue-600 hover:underline text-lg">Go to Dashboard →</a>
      </Link>
    </div>
  );
}