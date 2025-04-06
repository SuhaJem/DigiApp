'use client';

import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Hook to email service
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-2 rounded text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="bg-white text-black px-4 py-2 rounded font-bold">
        Notify Me
      </button>
      {submitted && <p className="text-green-400 mt-2">Thank you!</p>}
    </form>
  );
}
