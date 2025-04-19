module.exports = {
    darkMode: 'media',
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          background: 'var(--color-background)',
          foreground: 'var(--color-foreground)',
          midground: 'var(--color-midground)',
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          error: 'var(--color-error)',
        },
        fontFamily: {
          sans: ['var(--font-sans)', 'sans-serif'],
          mono: ['var(--font-mono)', 'monospace'],
        },
      },
    },
    plugins: [],
  }