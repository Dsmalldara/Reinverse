import scrollbar from 'tailwind-scrollbar';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-border': 'linear-gradient(to right, #00FF00, #0000FF)',
      },
     fontFamily:{  
      'bebas-neue': ['Bebas Neue', 'sans'],
      'crimson': ['Crimson', 'serif'], 
      'satisfy': ['Satisfy', 'cursive'],
      'merryweather': ['Merriweather', 'serif'],
      'rajdhani': ['Rajdhani', 'sans'],
      'roboto': ['Roboto', 'sans'],
    },
   fontSize: {
  'sm': '.875rem',   // Small
  'md': '1rem',      // Medium
  'lg': '1.125rem',  // Large
  'xl': '1.25rem',   // Extra Large
  'base': '1rem',    // Default/Base
},


    },
    colors: {
      white: '#FFFFFF',
      whiteSmoke: '#F5F5F5',
      creamyWhite: '#FFFFF0',
      GhostWhite: '#F8F8FF',
      linen: '#FAF0E6',
      darkblue: '#000080',
      crimsonRed: '#DC143C',
      dodgerBlue: '#1E90FF',
      charcoalGray: '#555555',
      slate: {
        '50': '#e5e7eb',
        '100': '#9ca3af',
        '200': '#64707a',
        '300': '#38434f',
        '400': '#1f2933',
        '500': '#111827',
        '600': '#0e1825',
        '700': '#101827',
        '800': '#090e16',
        '900': '#04070d',
      },
      green: {
        '50': '#f0fdf4',
        '100': '#dcfce7',
        '200': '#bbf7d0',
        '300': '#86efac',
        '400': '#4ade80',
        '500': '#22c55e',
        '600': '#16a34a',
        '700': '#15803d',
        '800': '#166534',
        '900': '#14532d',
      },
      red: {
        '50': '#fdf2f2',
        '100': '#fde8e8',
        '200': '#fbd5d5',
        '300': '#f8b4b4',
        '400': '#f98080',
        '500': '#f05252',
        '600': '#e02424',
        '700': '#c81e1e',
        '800': '#9b1c1c',
        '900': '#771d1d',
      },
      blue: {
        50: '#ebf8ff',
        100: '#bee3f8',
        200: '#90cdf4',
        300: '#63b3ed',
        400: '#4299e1',
        500: '#3182ce',
        600: '#2b6cb0',
        700: '#2c5282',
        800: '#2a4365',
        900: '#1a365d',
      },
      cyan: {
        50: '#f0f7f9',
        100: '#d2e4eb',
        200: '#a6d8de',
        300: '#78c2d1',
        400: '#4fa5c6',
        500: '#3197bc',
        600: '#257c99',
        700: '#1c637a',
        800: '#1a4d63',
        900: '#1c3d51',
      },
      cyan1:{
       1 : '#00FFFF',
      }
    },
    
    
  },
// tailwind.config.js
 plugins: [scrollbar],
 // Other Tailwind CSS configuration

}

