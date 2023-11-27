import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-orange': '#FFF1E9',
        'light-green': '#E0FDEF',
        'light-blue': '#EBF0FF',
        'light-purple': '#F6E7FF',
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
