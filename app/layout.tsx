import './styles/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stat Quo | Tech That Moves. Stay Ahead.',
  description: 'Stat Quo is launching soon. Discover sleek, cutting-edge tech accessories that keep you moving. Be the first to know.',
  openGraph: {
    title: 'Stat Quo | Tech That Moves. Stay Ahead.',
    description: 'Stat Quo is launching soon. Discover sleek, cutting-edge tech accessories that keep you moving. Be the first to know.',
    url: 'https://stat-quo.com/',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stat Quo Launch Teaser',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stat Quo | Tech That Moves. Stay Ahead.',
    description: 'Stat Quo is launching soon. Discover sleek, cutting-edge tech accessories that keep you moving. Be the first to know.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
