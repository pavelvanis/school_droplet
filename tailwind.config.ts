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
        '2xl': '10rem',
      },
      center: true
    },
    colors: {
      primary: {
        DEFAULT: '#322A26',
        // 500: '#0c377d',
        // 900: '#032254',
      },
      secondary: {
        DEFAULT: '#595F81',
        500: '#4A506D'
        // 700: '#4f4f4f' 
      },
      tertiary: {
        DEFAULT: '#cc76a1'
      },
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
