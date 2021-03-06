import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr:true,
    typescript: {
      shim: false
    }/*, 
    modules: [
        '@nuxt/ui'
      ]*/
  })
