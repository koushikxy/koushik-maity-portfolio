const v = name => `rgb(var(--${name}) / <alpha-value>)`

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        display: ['"Clash Display"', 'Satoshi', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: v('bg'),
        fg: v('fg'),
        muted: v('muted'),
        line: v('line'),
        card: v('card'),
        accent: v('accent'),
        ink: v('ink'),
      },
    },
  },
  plugins: [],
}
