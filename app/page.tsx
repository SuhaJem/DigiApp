import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import EmailCapture from '../components/EmailCapture';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <Hero />
      <Countdown />
      <EmailCapture />
    </main>
  );
}
