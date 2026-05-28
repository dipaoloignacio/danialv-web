import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#131313',
        'on-background': '#e5e2e1',
        'surface': '#131313',
        'surface-dim': '#131313',
        'surface-bright': '#393939',
        'surface-container-lowest': '#0e0e0e',
        'surface-container-low': '#1c1b1b',
        'surface-container': '#201f1f',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353534',
        'surface-variant': '#353534',
        'on-surface': '#e5e2e1',
        'on-surface-variant': '#e5b8b8',
        'primary': '#ff4d4d',
        'on-primary': '#fff0f0',
        'primary-container': '#cc0000',
        'on-primary-container': '#ffcccc',
        'primary-fixed': '#ffcccc',
        'primary-fixed-dim': '#ff4d4d',
        'inverse-primary': '#a90000',
        'secondary': '#c9c6c5',
        'on-secondary': '#313030',
        'secondary-container': '#474646',
        'on-secondary-container': '#b7b4b3',
        'tertiary': '#c6c6c7',
        'outline': '#a47a7a',
        'outline-variant': '#562020',
        'error': '#ffb4ab',
        'on-error': '#690005',
      },
      fontFamily: {
        'display': ['var(--font-montserrat)', 'sans-serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
        'mono': ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(48px,8vw,80px)', { lineHeight: '1.0', letterSpacing: '-0.04em', fontWeight: '900' }],
        'headline-lg': ['clamp(32px,4vw,48px)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-md': ['clamp(20px,2.5vw,24px)', { lineHeight: '1.2', fontWeight: '700' }],
        'label-caps': ['10px', { lineHeight: '1.0', letterSpacing: '0.2em', fontWeight: '700' }],
        'code-sm': ['12px', { lineHeight: '1.0', letterSpacing: '0.05em', fontWeight: '500' }],
        'body-lg': ['clamp(16px,1.2vw,18px)', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'flicker': 'flicker 8s infinite',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'flicker': {
          '0%, 95%, 100%': { opacity: '1' },
          '96%': { opacity: '0.7' },
          '97%': { opacity: '1' },
          '98%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
export default config
