/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        typewrite: "typewrite 6s steps(22) forwards ",
        cursor: "typewrite 6s steps(22) forwards, blink 500ms steps(22) infinite",
        fadeInLeft: "fadeInLeft 2s ease 4s forwards"
      },
      keyframes: {
        typewrite: {
          to: {
            left: "100%",
          },
        },
        blink: {
          to : {
            opacity: 0,
          },
        },
        fadeInLeft: {
          to: {
            opacity: 1,
            transform: "translateX(0)"
          }
        }
      },
    },
  },
  plugins: [],
}
