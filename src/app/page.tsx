import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div><h1 className="font-bold text-2xl">Welcome to the dev app</h1></div>
      <div>
        <Link href="/emulsions">Emulsions</Link>
      </div>
      <div>
        <Link href="/brands">Brands</Link>
        </div>
      <div>
        <Link href="/developers">Developers</Link>
      </div>      
    </main>
  );
}
