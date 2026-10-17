const v = name => `rgb(var(--${name}) / <alpha-value>)`

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: v('bg'),
        fg: v('fg'),
        muted: v('muted'),
        line: v('line'),
        card: v('card'),
        accent: v('accent'),
        soft: v('soft'),
      },
    },
  },
  plugins: [],
}
