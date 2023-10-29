import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '0',
        md: '5rem',
        xl: '8rem',
        '2xl': '12rem',
      },
      center: true
    },
    colors: {
      primary: '#2f5491',
      'font-primary': '#dddddd',
    },
    extend: {
      colors: {
        ...colors
      },
    }

  },
  plugins: [],
}
export default config
