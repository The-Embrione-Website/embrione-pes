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
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
        curvy: ['var(--font-curvy)', 'var(--font-sans)', 'sans-serif'],
        righteous: ['var(--font-righteous)', 'cursive', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
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
            DEFAULT: '#09090b',        // Matte zinc-950 architectural surface
            elevated: '#18181b',       // Elevated zinc-900 surface
            matte: '#09090b',          // Explicit zinc-950
            navy: '#000514',           // Deep navy headers and navbars
            input: '#09090b',          // Input fields and wells
            card: '#09090b',           // Architectural card surface (zinc-950)
          },
          accent: {
            primary: '#1e3a8a',        // Deep Navy Blue
            navy: '#000514',           // Dark Navy Base
            'navy-button': '#1e3a8a',  // Navy primary CTA
            'navy-hover': '#1d4ed8',   // Button hover state
            'navy-muted': 'rgba(30, 58, 138, 0.25)', // Subtle highlight pill
            blue: '#0071e3',           // Primary interactive link & button color
            'blue-hover': '#0077ed',   // Button hover state
            cyan: '#06b6d4',           // Kodikon vibrant cyan (cyan-500)
            'cyan-glow': '#22d3ee',     // Neon highlights & active badges (cyan-400)
            'cyan-dark': '#0891b2',    // Accent button background (cyan-600)
          },
          text: {
            primary: '#ffffff',        // High-emphasis headlines & titles
            secondary: '#a1a1aa',      // Body text, subtitles, and descriptions (zinc-400)
            muted: '#71717a',          // Timestamps, fine print, and metadata (zinc-500)
          },
          border: {
            subtle: '#27272a',         // Crisp 1px zinc-800 architectural borders
            hover: '#3f3f46',          // Card hover borders (zinc-700)
            divider: '#27272a',        // Section dividers (zinc-800)
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