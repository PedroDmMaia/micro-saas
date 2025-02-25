import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'backgound-primary': '#050505',
        'backgound-secondary': '#0f0f10',
        'backgound-terriary': '#19191a',
        'content-body': '#cdcbcc',
        'content-placeholder': '#827d7f',
        'content-headline': '#b2b2b2',
        'border-primary': '#19191a',
        'border-secondary': '#323234',
        'border-terriary': '#97979b',
        'accent-purple': '#4b2dbb',
        'accent-green': '#87bb2d',
        'accent-pink': '#b5446b',
      },
    },
  },
  plugins: [],
} satisfies Config
