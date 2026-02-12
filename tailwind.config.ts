import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F1F1F1",
        primary: "#1C3F3A",
        primaryHover: "#193733",
        textPrimary: "#000000"
      },
    },
  },
  plugins: [],
}

export default config