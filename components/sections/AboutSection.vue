<template>
  <section id="about" class="min-h-screen scroll-mt-14 flex items-center">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <h2 class="text-2xl sm:text-3xl font-bold">About Me</h2>
      <p class="mt-4 text-neutral-700 dark:text-neutral-300 max-w-3xl">
        Full Stack Web Developer with 4+ years of experience specializing in logistics and distribution management systems. 
     Proven expertise in leading the development and deployment of scalable web applications across the full stack, from front-end interfaces to cloud-based back-end infrastructure.
      Adept at managing cross-functional teams, aligning technical solutions with business goals, and delivering robust systems for high-traffic, high-demand environments. 
      Proficient in technologies including PHP, JavaScript, PostgreSQL, AWS, and DigitalOcean.
      </p>
      <h2 class="text-lg font-bold pt-5">Skilled in</h2>
      <div class="mt-6 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center">
        <img v-for="s in skills" :key="s.name" :src="s.logo" :alt="s.name" class="h-14 w-14 object-contain" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Skill = { name: string; logo: string }
const skills: Skill[] = [
  { name: 'HTML5', logo: '/images/tech/html.png' },
  { name: 'JavaScript', logo: '/images/tech/js.png' },
  { name: 'Bootstrap', logo: '/images/tech/bootstrap.png' },
  { name: 'Vue', logo: '/images/tech/vue.png' },
  { name: 'Nuxt', logo: '/images/tech/nuxt.png' },
  { name: 'Alpine', logo: '/images/tech/alpinejs.png' },
  { name: 'Tailwind CSS', logo: '/images/tech/tailwindcss.png' },
  { name: 'PHP', logo: '/images/tech/php.png' },
  { name: 'Laravel', logo: '/images/tech/laravel.png' },
  { name: 'Livewire', logo: '/images/tech/livewire.png' },
  { name: 'MySQL', logo: '/images/tech/mysql.png' },
  { name: 'PostgreSQL', logo: '/images/tech/postgresql.png' },
  { name: 'MongoDB', logo: '/images/tech/mongodb.png' },
  { name: 'Redis', logo: '/images/tech/redis.png' },
  { name: 'React', logo: '/images/tech/react.png' }
]
</script>

<style scoped>
</style>
