import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>Hello :)</div>
      <div>
        <Link href="./brands">Brands</Link>
        </div>
      <div>
        <Link href="./developers">Developers</Link>
      </div>
    </main>
  );
}
