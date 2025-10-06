/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        display: ['var(--font-orbitron)'],
      },
      keyframes: {
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%, 90%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },
      animation: {
        'matrix-rain': 'matrix-rain 15s linear infinite',
      },
      colors: {
        // --- NEW COLOR ADDED ---
        'dark-navy': '#000514',
        'aabcdd-lightest': '#AABCDD',
        'mid-blue': '#4C72B8',
        'dark-blue': '#14213B',
        'darkest-blue': '#0D1320',
      },
      boxShadow: {
        "footer": "10px 5px 6px -15px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1480px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};