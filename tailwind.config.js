/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E0505C', // EM베스트 네온 레드
        accent: '#00E5FF', // HUD 시안
        secondary: '#00E5FF',
        dark: '#07070A',
        light: '#f8f9fa',
        ink: {
          900: '#07070A',
          800: '#0D0D12',
          700: '#14141B',
          600: '#1C1C26',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
        display: ['Chakra Petch', 'Pretendard', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 24px rgba(224,80,92,0.28)',
        cyan: '0 0 24px rgba(0,229,255,0.35)',
      },
    },
  },
  plugins: [],
}
