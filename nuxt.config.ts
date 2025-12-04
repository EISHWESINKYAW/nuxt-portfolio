import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  app: {
    head: {
      title: "Ei Shwe Sin Kyaw — Portfolio",
      meta: [
        { name: "description", content: "Portfolio and projects — eishwesinkyaw.site" }
      ],
      link: [
        { rel: "author", href: "https://eishwesinkyaw.site" },
        { rel: "icon", type: "image/webp", href: "/images/fav.webp" }
      ]
    }
  },
  vite: {
    plugins: [tsconfigPaths()]
  }
})
