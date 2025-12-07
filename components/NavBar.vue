<template>
  <header class="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
    <nav class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-14 items-center justify-between">
        <div class="flex items-center gap-2">
          <a href="#home" class="font-bold text-lg text-blue-600 hover:text-blue-700">ESSK</a>
        </div>
        <button
          class="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          @click="isOpen = !isOpen"
          aria-label="Toggle navigation"
        >
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path v-if="!isOpen" d="M3 12h18M3 6h18M3 18h18" />
            <path v-else d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
        <ul class="hidden sm:flex items-center gap-6">
          <li v-for="item in items" :key="item.id">
            <a
              :href="`#${item.id}`"
              :class="[
                'text-sm font-medium transition-colors',
                activeId === item.id ? 'text-blue-600' : 'text-neutral-700 dark:text-neutral-300 hover:text-blue-600'
              ]"
            >{{ item.label }}</a>
          </li>
        </ul>
      </div>
      <div v-if="isOpen" class="sm:hidden pb-3">
        <ul class="space-y-2">
          <li v-for="item in items" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="block rounded-md px-3 py-2 text-base font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              @click="isOpen = false"
            >{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const items = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

const isOpen = ref(false)
const activeId = ref<string>('home')

let observer: IntersectionObserver | null = null

onMounted(() => {
  const sections = items
    .map((i) => document.getElementById(i.id))
    .filter((el): el is HTMLElement => !!el)

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top))
      if (visible[0]) {
        activeId.value = visible[0].target.id
      }
    },
    { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
  )

  sections.forEach((section) => observer?.observe(section))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
</style>
