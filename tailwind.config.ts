import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        body: ["Rajdhani", "sans-serif"],
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
        rgb: {
          red: "hsl(var(--rgb-red))",
          green: "hsl(var(--rgb-green))",
          blue: "hsl(var(--rgb-blue))",
        },
        surface: {
          elevated: "hsl(var(--surface-elevated))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
        "pulse-neon": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "glow-rgb": {
          "0%": { boxShadow: "0 0 10px hsl(var(--rgb-red) / 0.5), 0 0 30px hsl(var(--rgb-red) / 0.2)" },
          "33%": { boxShadow: "0 0 10px hsl(var(--rgb-green) / 0.5), 0 0 30px hsl(var(--rgb-green) / 0.2)" },
          "66%": { boxShadow: "0 0 10px hsl(var(--rgb-blue) / 0.5), 0 0 30px hsl(var(--rgb-blue) / 0.2)" },
          "100%": { boxShadow: "0 0 10px hsl(var(--rgb-red) / 0.5), 0 0 30px hsl(var(--rgb-red) / 0.2)" },
        },
        "color-shift": {
          "0%": { color: "hsl(var(--rgb-red))" },
          "33%": { color: "hsl(var(--rgb-green))" },
          "66%": { color: "hsl(var(--rgb-blue))" },
          "100%": { color: "hsl(var(--rgb-red))" },
        },
        "scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "hero-drift": {
          "0%": { transform: "scale(1.1) translate(0%, 0%)" },
          "25%": { transform: "scale(1.15) translate(-1%, -0.5%)" },
          "50%": { transform: "scale(1.12) translate(0.5%, -1%)" },
          "75%": { transform: "scale(1.18) translate(-0.5%, 0.5%)" },
          "100%": { transform: "scale(1.1) translate(0%, 0%)" },
        },
        "hero-fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "hero-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "rgb-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "glitch-flicker": {
          "0%, 5%": { opacity: "1", transform: "translate(0) skewX(0)" },
          "6%": { opacity: "0.7", transform: "translate(-3px, 2px) skewX(-4deg)" },
          "7%": { opacity: "0.9", transform: "translate(4px, -1px) skewX(3deg)" },
          "8%, 14%": { opacity: "1", transform: "translate(0) skewX(0)" },
          "15%": { opacity: "0.5", transform: "translate(5px, 0) skewX(-6deg)" },
          "16%": { opacity: "0.8", transform: "translate(-4px, 1px) skewX(5deg)" },
          "17%": { opacity: "1", transform: "translate(2px, -2px) skewX(-2deg)" },
          "18%, 29%": { opacity: "1", transform: "translate(0) skewX(0)" },
          "30%": { opacity: "0.6", transform: "translate(-2px, 0) skewX(3deg)" },
          "31%": { opacity: "1", transform: "translate(0) skewX(0)" },
          "45%": { opacity: "0.8", transform: "translate(3px, 1px) skewX(-5deg)" },
          "46%": { opacity: "0.4", transform: "translate(-5px, -1px) skewX(7deg)" },
          "47%": { opacity: "0.9", transform: "translate(2px, 0) skewX(-3deg)" },
          "48%, 59%": { opacity: "1", transform: "translate(0) skewX(0)" },
          "60%": { opacity: "0.7", transform: "translate(-3px, 2px) skewX(4deg)" },
          "61%": { opacity: "1", transform: "translate(0) skewX(0)" },
          "75%": { opacity: "0.6", transform: "translate(4px, -1px) skewX(-6deg)" },
          "76%": { opacity: "0.3", transform: "translate(-6px, 2px) skewX(8deg)" },
          "77%": { opacity: "0.8", transform: "translate(3px, 0) skewX(-2deg)" },
          "78%, 89%": { opacity: "1", transform: "translate(0) skewX(0)" },
          "90%": { opacity: "0.7", transform: "translate(-2px, 1px) skewX(3deg)" },
          "91%, 100%": { opacity: "1", transform: "translate(0) skewX(0)" },
        },
        "neon-breathe": {
          "0%, 100%": { filter: "brightness(1) drop-shadow(0 0 8px currentColor)" },
          "50%": { filter: "brightness(1.3) drop-shadow(0 0 20px currentColor)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "glow-rgb": "glow-rgb 4s ease-in-out infinite",
        "color-shift": "color-shift 6s ease-in-out infinite",
        "scanline": "scanline 3s linear infinite",
        "hero-drift": "hero-drift 25s ease-in-out infinite",
        "hero-fade-in": "hero-fade-in 0.8s ease-out forwards",
        "hero-float": "hero-float 4s ease-in-out infinite",
        "rgb-pulse": "rgb-pulse 3s ease-in-out infinite",
        "glitch-flicker": "glitch-flicker 2.5s linear infinite",
        "neon-breathe": "neon-breathe 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
