import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Ativa o modo escuro baseado em classe
  "content": {
    "files": [
      // all directories and extensions will correspond to your Nuxt config
      "@/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "@/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "@/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "@/plugins/**/*.{js,ts,mjs}",
      "@/composables/**/*.{js,ts,mjs}",
      "@/utils/**/*.{js,ts,mjs}",
      "@/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
      "@/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
      "@/app.config.{js,ts,mjs}",
      "@/app/spa-loading-template.html"
    ]
  },
  theme: {
    extend: {
      colors: {
        primary: "#C9002B",
        secondary: "#004B93",
        tertiary: "#005CB4",
      },
      fontFamily: {
        press: ['"Press Start 2P"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
