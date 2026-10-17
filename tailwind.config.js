const v = name => `rgb(var(--${name}) / <alpha-value>)`

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        bg: v('bg'),
        fg: v('fg'),
        muted: v('muted'),
        line: v('line'),
        card: v('card'),
        accent: v('accent'),
      },
    },
  },
  plugins: [],
}
