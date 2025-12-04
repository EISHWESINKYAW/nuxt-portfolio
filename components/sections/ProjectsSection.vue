<template>
  <section id="projects" class="min-h-screen scroll-mt-14 flex items-center">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <h2 class="text-2xl sm:text-3xl font-bold">Projects</h2>
      <div ref="grid" class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="p in projects" :key="p.title" class="project-card rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-950">
          <div class="aspect-video overflow-hidden">
            <img :src="p.image" :alt="p.title" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <div class="p-4">
            <h3 class="font-semibold">{{ p.title }}</h3>
            <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{{ p.description }}</p>
            <div class="mt-3 flex gap-2">
              <a v-if="p.link" :href="p.link" target="_blank" rel="noopener" class="text-blue-600 hover:underline">Live</a>
              <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener" class="text-neutral-700 dark:text-neutral-300 hover:underline">Code</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
type Project = {
  title: string
  description: string
  image: string
  link?: string
  repo?: string
}

const projects: Project[] = [
  { title: 'Ecommerce System', description: 'Developed and maintained a full-stack eCommerce platform for home appliances and furniture, combining Laravel (backend API) and Nuxt.js (frontend SPA/SSR)', link: 'https://homemall.com.mm', image:'/images/projects/homemall.png' },
  { title: 'Myanmar Post', description: 'Designed, developed, and maintained logistics modules including order processing, shipment tracking, inventory control, and warehouse management systems.Built APIs and microservices to integrate the logistics platform with third-party services (e.g., Payment gateway, ERP systems).', link: 'https://myanmarpost.com.mm/', image:'/images/projects/mmpost.png' },
  { title: 'Logistic Website', description: 'Designed and implemented responsive front-end components using Livewire and Tailwind to ensure an intuitive user experience across desktop and mobile devices.', link: 'https://rgexpress.com.mm', image:'/images/projects/rgexpress.webp' },
  { title: 'Installment Management System', description: 'Collaborated on the website and management system for selling various household electrical appliances and phones with cash down and installment plans.', link: 'https://rgexpress.com.mm', image:'/images/projects/corporateinstallment.webp'},
  { title: 'Distribution Management System', description: 'Developed a Distribution Management System integrated with ERP to automate inventory, order processing, and logistics, ensuring real-time data sync and improved operational efficiency.', link: 'https://rgexpress.com.mm', image:'/images/projects/toyologo.png'},
]

const grid = ref<HTMLElement | null>(null)
let floatTweens: any[] = []
let handlers: { el: Element; enter: (e: Event) => void; leave: (e: Event) => void }[] = []

onMounted(async () => {
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  const cards = grid.value?.querySelectorAll('.project-card')
  if (!cards || cards.length === 0) return

  gsap.set(cards, { opacity: 0, y: 40 })
  gsap.to(cards, {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: grid.value as HTMLElement,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  cards.forEach((el) => {
    const t = gsap.to(el, {
      y: '+=8',
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    })
    floatTweens.push(t)
    const enter = () => {
      t.pause()
      gsap.to(el, { y: -6, scale: 1.02, boxShadow: '0 10px 24px rgba(0,0,0,0.15)', duration: 0.25, ease: 'power2.out' })
    }
    const leave = () => {
      gsap.to(el, { y: 0, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)', duration: 0.2, ease: 'power2.out' })
      t.resume()
    }
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', leave)
    handlers.push({ el, enter, leave })
  })
})

onBeforeUnmount(async () => {
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  ScrollTrigger.getAll().forEach(t => t.kill())
  floatTweens.forEach(t => t.kill())
  handlers.forEach(({ el, enter, leave }) => {
    el.removeEventListener('mouseenter', enter)
    el.removeEventListener('mouseleave', leave)
  })
})
</script>

<style scoped>
</style>
