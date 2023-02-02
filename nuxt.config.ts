import { defineNuxtConfig } from 'nuxt/config'

const environment = process.env.NUXT_ENV_MODE || 'development'
const envSet = require(`./env.${environment}.js`)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        // favicon
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/main.css',
    '@/assets/styles/tailwind.css',
  ],
  rootDir: 'src',
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  runtimeConfig: {
    public: { mode: environment, ...envSet },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
