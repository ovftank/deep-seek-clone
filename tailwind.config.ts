import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    fontFamily: false, // Disable Tailwind's default font family
  },
} satisfies Config;