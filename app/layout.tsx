import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Stat Quo',
  description: 'Tech that moves. Stay ahead.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
