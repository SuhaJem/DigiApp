'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-05-01T00:00:00') // Adjust launch date here
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    let time = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }

    return difference > 0 ? time : { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-electricBlue">
        Stat Quo is Launching Soon
      </h1>

      <p className="text-lg mb-8 text-gray-400">Tech that moves. Stay ahead.</p>

      <div className="flex space-x-4 text-center mb-10">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="bg-zinc-800 p-4 rounded-lg w-20">
            <div className="text-3xl font-semibold">{value}</div>
            <div className="text-sm capitalize">{unit}</div>
          </div>
        ))}
      </div>

      <form action="https://formspree.io/f/xpwpodor" method="POST" className="space-y-4">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg bg-zinc-900 text-white mb-4 border border-zinc-700"
        />
        <input
    type="hidden"
    name="_redirect"
    value="https://stat-quo.com/thank-you"
  />

        <button
          type="submit"
          className="w-full bg-electricBlue text-black font-bold py-3 rounded-lg hover:opacity-90 transition"
        >
          Notify Me
        </button>
      </form>
    </main>
  )
}
