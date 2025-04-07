import Image from "next/image";
import NotifyForm from "@/components/NotifyForm";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-launch.png" // make sure this file exists in /public
          alt="Stat Quo Launch Background"
          fill
          priority
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="text-center px-4 z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
          Stat Quo is Launching Soon
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          The future of tech essentials is almost here. Be the first to know.
        </p>

        {/* Countdown Timer */}
        <div className="flex gap-6 justify-center mb-8 text-center">
          <CountdownUnit label="Days" value="07" />
          <CountdownUnit label="Hours" value="13" />
          <CountdownUnit label="Minutes" value="45" />
          <CountdownUnit label="Seconds" value="09" />
        </div>

        {/* Form */}
        <NotifyForm />
      </div>
    </main>
  );
}

function CountdownUnit({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl sm:text-5xl font-bold">{value}</span>
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  );
}
  )
}
