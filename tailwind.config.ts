import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        electricBlue: '#00FFFF', // or your preferred electric blue hex
      },
    },
  },
  plugins: [],
}

export default config
