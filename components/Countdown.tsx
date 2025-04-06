'use client';

import { useEffect, useState } from 'react';

const targetDate = new Date('2025-05-01T00:00:00');

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft('We’re live!');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <p className="text-xl mt-2">{timeLeft}</p>;
}
