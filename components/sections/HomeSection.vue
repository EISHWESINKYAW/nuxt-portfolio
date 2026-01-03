<template>
  <section id="home" class="min-h-screen scroll-mt-14 flex items-center bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
        <h2 class="text-lg font-lg tracking-tight">Hey,</h2>
          <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight">I'm Ei Shwe Sin Kyaw</h1>
          <p class="mt-2 text-xl font-semibold">
          <span>I am a </span>
            <span class="text-blue-600">{{ typedText }}</span>
            <span class="ml-1 inline-block w-[2px] h-[1.25em] align-text-bottom bg-blue-600 animate-blink"></span>
          </p>
          <p class="mt-4 text-neutral-600 dark:text-neutral-300 text-lg">As a Full-Stack Web Developer, I specialize in building responsive front-end interfaces and robust back-end systems. My focus is creating efficient, intuitive web solutions that merge creativity with solid engineering.</p>
          <div class="mt-6 flex gap-3">
            <a href="#projects" class="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700">View Projects</a>
            <a href="#contact" class="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">Contact Me</a>
            <a href="https://drive.google.com/file/d/1naDgyqU7c39MowlB9Urne0nsdbAviU16/view" target="_blank" rel="noopener" class="inline-flex items-center rounded-md border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50">Download CV</a>
          </div>
        </div>
        <div class="hidden md:block">
          <img
            src="/images/cgirl.png"
            alt="Coding Girl Blog"
            class="aspect-square rounded-2xl object-cover "
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const titles = [
  'Full Stack Web Developer',
  'Frontend Developer',
  'Backend Developer',
  'Software Engineer',
  'Web Developer',
  'PHP Developer',
  'Vue Js Developer'
]

const typedText = ref('')
let wordIndex = 0
let charIndex = 0
let deleting = false
let timer: number | null = null

const loop = () => {
  const current = titles[wordIndex]
  if (!deleting) {
    typedText.value = current.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      deleting = true
      clearTimer()
      timer = window.setTimeout(loop, 1200)
      return
    }
    clearTimer()
    timer = window.setTimeout(loop, 100)
  } else {
    typedText.value = current.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      deleting = false
      wordIndex = (wordIndex + 1) % titles.length
      clearTimer()
      timer = window.setTimeout(loop, 400)
      return
    }
    clearTimer()
    timer = window.setTimeout(loop, 60)
  }
}

const clearTimer = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

onMounted(() => {
  loop()
})

onBeforeUnmount(() => {
  clearTimer()
})
</script>

<style scoped>
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.animate-blink { animation: blink 1s step-end infinite; }
</style>
