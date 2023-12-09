import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        'primary-dark': 'var(--bg-primary-dark)',
        'primary-button': 'var(--button-primary)',
        success: 'var(--button-success)',
        error: 'var(--button-error)',
      },
      borderColor: {
        primary: 'var(--button-primary)',
        success: 'var(--button-success)',
        error: 'var(--button-error)',
      },
      colors: {
        'light-orange': '#FFF1E9',
        'light-green': '#E0FDEF',
        'light-blue': '#EBF0FF',
        'light-purple': '#F6E7FF',
        'dark-purple': 'var(--button-primary)',
        success: 'var(--button-success)',
        error: 'var(--button-error)',
      },
      backgroundImage: {
        'mobile-pattern':
          'url(/assets/images/pattern-background-mobile-light.svg)',
      },
    },
  },
  plugins: [],
};
export default config;
