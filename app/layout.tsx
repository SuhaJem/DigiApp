import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Stat Quo | Tech That Moves. Stay Ahead.',
  description:
    'Stat Quo is launching soon. Discover sleek, cutting-edge tech accessories that keep you moving. Be the first to know.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
