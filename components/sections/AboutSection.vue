<template>
  <section id="about" class="min-h-screen scroll-mt-14 flex items-center">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <h2 class="text-2xl sm:text-3xl font-bold">About Me</h2>
      <p class="mt-4 text-neutral-700 dark:text-neutral-300 max-w-3xl">
        I build performant, accessible web apps. I enjoy component-driven design, clean architecture, and
        turning ideas into delightful user interfaces. My toolkit includes Nuxt, Vue, Tailwind, and modern
        web practices.
      </p>
      <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
          <h3 class="font-semibold">Nuxt & Vue</h3>
          <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">SSR, routing, composables, and state management.</p>
        </div>
        <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
          <h3 class="font-semibold">Tailwind CSS</h3>
          <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Rapid, responsive styling with utility classes.</p>
        </div>
        <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
          <h3 class="font-semibold">Testing & Quality</h3>
          <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">TypeScript, linting, and component testing.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
