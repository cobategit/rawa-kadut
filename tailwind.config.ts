import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          800: '#49A241',
          900: '#007931',
        },
      },
      fontFamily: {
        sans: ['var(--font-opensans)'],
      },
    },
  },
  plugins: [],
}
export default config
