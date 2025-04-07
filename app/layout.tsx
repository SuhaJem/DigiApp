import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Stat Quo | Tech That Moves. Stay Ahead.',
  description: 'Stat Quo is launching soon. Discover sleek, cutting-edge tech accessories that keep you moving. Be the first to know.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content="Stat Quo | Tech That Moves. Stay Ahead." />
        <meta name="description" content="Stat Quo is launching soon. Discover sleek, cutting-edge tech accessories that keep you moving. Be the first to know." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stat-quo.com/" />
        <meta property="og:title" content="Stat Quo | Tech That Moves. Stay Ahead." />
        <meta property="og:description" content="Stat Quo is launching soon. Discover sleek, cutting-edge tech accessories that keep you moving. Be the first to know." />
        <meta property="og:image" content="https://stat-quo.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stat Quo | Tech That Moves. Stay Ahead." />
        <meta name="twitter:description" content="Stat Quo is launching soon. Discover sleek, cutting-edge tech accessories that keep you moving. Be the first to know." />
        <meta name="twitter:image" content="https://stat-quo.com/og-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
