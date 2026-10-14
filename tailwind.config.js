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
        // --- Embrione Official Design System Palette ---
        brand: {
          canvas: '#000000',            // Pure black main background
          surface: {
            DEFAULT: '#161617',        // Apple-style dark card surface
            elevated: '#1d1d1f',       // Hovered/elevated cards
            navy: '#000514',           // Deep navy headers and navbars
            input: '#020617',          // Input fields and wells (slate-950)
            card: '#0f172a',           // Dark slate card surface (slate-900)
          },
          accent: {
            blue: '#0071e3',           // Primary interactive link & button color
            'blue-hover': '#0077ed',   // Button hover state
            cyan: '#06b6d4',           // Kodikon vibrant cyan (cyan-500)
            'cyan-glow': '#22d3ee',     // Neon highlights & active badges (cyan-400)
            'cyan-dark': '#0891b2',    // Accent button background (cyan-600)
          },
          text: {
            primary: '#ffffff',        // High-emphasis headlines & titles
            secondary: '#a1a1a6',      // Body text, subtitles, and descriptions
            muted: '#6e6e73',          // Timestamps, fine print, and metadata
          },
          border: {
            subtle: 'rgba(255, 255, 255, 0.08)', // Default subtle card borders (white/10)
            hover: 'rgba(255, 255, 255, 0.20)',  // Card hover borders (white/25)
            divider: '#1e293b',                  // Section dividers (slate-800)
          },
        },

        // --- Backward-Compatible Legacy Colors ---
        'dark-navy': '#000514',
        'aabcdd-lightest': '#AABCDD',
        'mid-blue': '#4C72B8',
        'dark-blue': '#14213B',
        'darkest-blue': '#0D1320',
      },
      boxShadow: {
        "footer": "10px 5px 6px -15px rgba(0, 0, 0, 0.3)",
        "card": "0 8px 30px rgba(0, 0, 0, 0.5)",
        "cyan-glow": "0 0 20px rgba(6, 182, 212, 0.35)",
        "blue-glow": "0 0 20px rgba(0, 113, 227, 0.35)",
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