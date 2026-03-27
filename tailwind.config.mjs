/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050508',
        surface: '#0a0a0f',
        'surface-elevated': '#12121a',
        border: '#1a1a24',
        'border-subtle': '#14141c',
        foreground: '#f0f0f5',
        muted: '#8888a0',
        'muted-foreground': '#5c5c70',
        accent: {
          DEFAULT: '#6366f1',
          hover: '#818cf8',
          muted: 'rgba(99, 102, 241, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
