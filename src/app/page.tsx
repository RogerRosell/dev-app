import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hello :)</div>
      <div>
        <Link href="./brands">Brands</Link>
        <Link href="./developers">Developers</Link>
      </div>
    </main>
  );
}
