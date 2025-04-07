'use client'

import { useState } from 'react'

export default function NotifyForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('https://formspree.io/f/mgegqedg', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: new FormData(e.target as HTMLFormElement),
    })

    if (res.ok) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full max-w-lg mx-auto">
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
      >
        Notify Me
      </button>

      {submitted && (
        <p className="text-green-400 mt-2 sm:mt-0">You're on the list!</p>
      )}
    </form>
  )
}
