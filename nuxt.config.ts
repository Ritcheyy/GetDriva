// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "GetDriva",
      meta: [
        {
          name: "description",
          content: "GetDriva provides you with trusted and reliable drivers to get you to your destination with ease",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap",
        },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
  },
  components: {
    dirs: ["~/components"],
  },
  // @ts-ignore
  modules: ["@nuxtjs/tailwindcss", "nuxt-svgo", "@nuxt/image-edge", "nuxt-swiper"],
  tailwindcss: {
    exposeConfig: true,
    // exposeLevel: 1,  // determines tree-shaking (optional)
  },
})
