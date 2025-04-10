import tailwindcssRtl from 'tailwindcss-rtl';
import tailwindcssTypography from '@tailwindcss/typography';
import tailwindcssForms from '@tailwindcss/forms';
import tailwindcssAspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Default theme colors (can be overridden via theme system)
        primary: 'var(--color-primary, #FF8BA7)',
        secondary: 'var(--color-secondary, #FFC6C7)',
        background: 'var(--color-background, #FAEEE7)',
        surface: 'var(--color-surface, #FFFFFF)',
        text: 'var(--color-text, #33272A)',
      },
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
        secondary: ['Assistant', 'sans-serif'],
      },
      spacing: {
        // Custom spacing for consistent layout
        '4.5': '1.125rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [
    tailwindcssRtl,
    tailwindcssForms,
    tailwindcssTypography,
    tailwindcssAspectRatio,
  ],
};

export default config;