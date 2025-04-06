
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <Head>
        <title>Stat Quo</title>
        <meta name="description" content="Stat Quo - Tech That Moves" />
      </Head>
      <main className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Stat Quo</h1>
        <p className="text-xl mb-8">Tech that sells faster than water in the Sahara.</p>
        <p className="text-sm text-gray-400">Landing soon. Stay tuned.</p>
      </main>
    </div>
  );
}
