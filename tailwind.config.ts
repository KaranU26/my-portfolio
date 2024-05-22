import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(at top left, var(--tw-gradient-stops))',
      },
      blur: {
        '4xl': '64px',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        gradientStart: 'rgba(255, 255, 255, 0.5)',
        gradientMiddle: 'rgba(238, 174, 202, 0.5)',
        gradientEnd: 'rgba(148, 187, 233, 0.5)',
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "glow-next-door":{"0%":{"background":"radial-gradient(100% 225% at 0 100%, #62004F 0, #8C007B 100%), linear-gradient(-135deg, #BF00FF 70%, #9600C9 100%), linear-gradient(45deg, #4C4C4C 0, #BF00FF 100%), linear-gradient(-60deg, #8C007B 0, #62004F 50%)","backgroundSize":"100% 100%","backgroundPosition":"0% 60%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"20%":{"background":"radial-gradient(100% 225% at 0 100%, #62004F 0, #8C007B 100%), linear-gradient(-135deg, #BF00FF 70%, #9600C9 100%), linear-gradient(45deg, #4C4C4C 0, #BF00FF 100%), linear-gradient(-60deg, #8C007B 0, #62004F 50%)","backgroundSize":"105% 105%","backgroundPosition":"10% 50%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"40%":{"background":"radial-gradient(100% 225% at 0 100%, #62004F 0, #8C007B 100%), linear-gradient(-135deg, #BF00FF 70%, #9600C9 100%), linear-gradient(45deg, #4C4C4C 0, #BF00FF 100%), linear-gradient(-60deg, #8C007B 0, #62004F 50%)","backgroundSize":"110% 300%","backgroundPosition":"20% 40%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"60%":{"background":"radial-gradient(100% 225% at 0 100%, #62004F 0, #8C007B 100%), linear-gradient(-135deg, #BF00FF 70%, #9600C9 100%), linear-gradient(45deg, #4C4C4C 0, #BF00FF 100%), linear-gradient(-60deg, #8C007B 0, #62004F 50%)","backgroundSize":"115% 115%","backgroundPosition":"30% 30%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"80%":{"background":"radial-gradient(100% 225% at 0 100%, #62004F 0, #8C007B 100%), linear-gradient(-135deg, #BF00FF 70%, #9600C9 100%), linear-gradient(45deg, #4C4C4C 0, #BF00FF 100%), linear-gradient(-60deg, #8C007B 0, #62004F 50%)","backgroundSize":"250% 120%","backgroundPosition":"40% 20%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"100%":{"background":"radial-gradient(100% 225% at 0 100%, #62004F 0, #8C007B 100%), linear-gradient(-135deg, #BF00FF 70%, #9600C9 100%), linear-gradient(45deg, #4C4C4C 0, #BF00FF 100%), linear-gradient(-60deg, #8C007B 0, #62004F 50%)","backgroundSize":"100% 100%","backgroundPosition":"0% 60%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"}},
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow-next-door":"glow-next-door 5s ease infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config