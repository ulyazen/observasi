// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@pinia/nuxt',
      '@nuxtjs/tailwindcss',
      '@vueuse/nuxt',
      'unplugin-icons/nuxt',
      '@nuxtjs/fontaine',
      'nuxt-icon',
      '@vue-macros/nuxt',
    ],
    components: {
      global: true,
      dirs: ['~/components'],
    },
  })
