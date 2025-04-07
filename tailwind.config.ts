// Placeholder content for tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        electricBlue: '#00FFFF', // You can change this to a richer blue if you want
      },
    },
  },
  plugins: [],
}

export default config
