// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Pepsi 8bit',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'nuxt 8bit portfolio' },
        { name: 'keywords',    content: 'vue, nuxt, 8bit, portfolio' }
      ],
      link: [
        // favicon padrão
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // PNGs
        { rel: 'icon', type: 'image/png',     href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'icon', type: 'image/png',     href: '/favicon-32x32.png', sizes: '32x32' },
        // Apple touch
        { rel: 'apple-touch-icon',            href: '/apple-touch-icon.png', sizes: '180x180' },
        // Android Chrome
        { rel: 'manifest',                    href: '/site.webmanifest' },
        { rel: 'icon', type: 'image/png',     href: '/android-chrome-192x192.png', sizes: '192x192' },
        { rel: 'icon', type: 'image/png',     href: '/android-chrome-512x512.png', sizes: '512x512' },
        // opcional: mask icon para Safari
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#f0c000' }
      ]
    }
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["~/assets/css/globals.css"],
  ssr: false,

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  modules: ['@nuxt/icon', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
})