/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-50': 'var(--color-primary-50)',
        'primary-100': 'var(--color-primary-100)',
        'primary-500': 'var(--color-primary-500)',
        'primary-600': 'var(--color-primary-600)',
        'primary-700': 'var(--color-primary-700)',
        'primary-800': 'var(--color-primary-800)',
        'primary-900': 'var(--color-primary-900)',
        
        secondary: 'var(--color-secondary)',
        'secondary-50': 'var(--color-secondary-50)',
        'secondary-100': 'var(--color-secondary-100)',
        'secondary-200': 'var(--color-secondary-200)',
        'secondary-300': 'var(--color-secondary-300)',
        'secondary-400': 'var(--color-secondary-400)',
        'secondary-500': 'var(--color-secondary-500)',
        'secondary-600': 'var(--color-secondary-600)',
        'secondary-700': 'var(--color-secondary-700)',
        'secondary-800': 'var(--color-secondary-800)',
        'secondary-900': 'var(--color-secondary-900)',
        
        accent: 'var(--color-accent)',
        'accent-50': 'var(--color-accent-50)',
        'accent-100': 'var(--color-accent-100)',
        'accent-500': 'var(--color-accent-500)',
        'accent-600': 'var(--color-accent-600)',
        
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        
        success: 'var(--color-success)',
        'success-50': 'var(--color-success-50)',
        'success-100': 'var(--color-success-100)',
        'success-500': 'var(--color-success-500)',
        'success-600': 'var(--color-success-600)',
        
        warning: 'var(--color-warning)',
        'warning-50': 'var(--color-warning-50)',
        'warning-100': 'var(--color-warning-100)',
        'warning-500': 'var(--color-warning-500)',
        'warning-600': 'var(--color-warning-600)',
        
        error: 'var(--color-error)',
        'error-50': 'var(--color-error-50)',
        'error-100': 'var(--color-error-100)',
        'error-500': 'var(--color-error-500)',
        'error-600': 'var(--color-error-600)',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        caption: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
      },
      boxShadow: {
        'elevation-1': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'elevation-2': 'var(--shadow-base)',
        'elevation-3': 'var(--shadow-md)',
        'elevation-4': 'var(--shadow-lg)',
        'elevation-5': 'var(--shadow-xl)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      transitionDuration: {
        'micro': '200ms',
        'smooth': '300ms',
      },
      transitionTimingFunction: {
        'ease-out-custom': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      borderRadius: {
        'professional': '4px',
        'modern': '8px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}