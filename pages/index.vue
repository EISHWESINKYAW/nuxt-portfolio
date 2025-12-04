<template>
  <div class="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
    <NavBar />
    <main class="pt-14">
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <footer class="border-t border-neutral-200 dark:border-neutral-800">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-neutral-600 dark:text-neutral-400">
        © {{ new Date().getFullYear() }} ESSK. All rights reserved.
      </div>
    </footer>
  </div>
  
</template>

<script setup lang="ts">
if (process.client) {
  const script = document.createElement('script')
  script.src = 'https://cdn.tailwindcss.com'
  document.head.appendChild(script)
}
import NavBar from '@/components/NavBar.vue'
import HomeSection from '@/components/sections/HomeSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<style scoped>
</style>
