/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'yosemite': "url('/images/ui-dojo/yosemite.jpg')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      boxShadow: {
        'pure-black': '0 0 0 100px rgba(0,0,0,1)',
      },
      keyframes: {
        'pulse': {
          '50%': {
            opacity: .85,
          }
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        'appear': {
          '0%': {
            transform: 'translateY(-10px)',
            opacity: 0,
          },
          '50%': {
            transform: 'translateY(2px)',
            opacity: 0.7,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size':'900% 100%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'900% 100%',
            'background-position': 'right center'
          }
        },

        'island-active': {
          '50%': {
            'border-radius': '500px'
          },
          '100%': {
            'border-radius': '46px'
          }
        },

        'radio-bar': {
          '0%': {
            height: '20%'
          },
          '50%': {
            height: '90%'
          },
          '100%': {
            height: '20%'
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'appear-0': 'appear 0.4s ease-in-out forwards',
        'appear-1': 'appear 0.7s ease-in-out forwards',
        'appear-2': 'appear 1s ease-in-out forwards',
        'appear-3': 'appear 1.3s ease-in-out forwards',
        'appear-4': 'appear 1.6s ease-in-out forwards',
        'gradient-x': 'gradient-x 8s linear infinite',
        'island-active': 'island-active 0.1s ease-in-out forwards',
      },
    },

  },
  plugins: [require("tailwindcss-animate"), require('tailwindcss-3d')],

};
