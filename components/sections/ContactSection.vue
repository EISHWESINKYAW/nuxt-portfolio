<template>
  <section id="contact" class="min-h-screen scroll-mt-14 flex items-center bg-neutral-50 dark:bg-neutral-900">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <h2 class="text-2xl sm:text-3xl font-bold">Contact</h2>
      <p class="mt-4 text-neutral-700 dark:text-neutral-300">Have a project in mind? Let's talk.</p>
      <div class="mt-8 grid md:grid-cols-2 gap-8">
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium">Name</label>
            <input type="text" class="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" placeholder="Your name" />
          </div>
          <div>
            <label class="block text-sm font-medium">Email</label>
            <input type="email" class="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" placeholder="you@example.com" />
          </div>
          <div>
            <label class="block text-sm font-medium">Message</label>
            <textarea rows="4" class="mt-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" placeholder="Tell me about your idea" />
          </div>
          <button type="button" class="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700">Send</button>
        </form>
        <div class="space-y-20">
          <a href="https://eishwesinkyaw.site" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-blue-600 hover:underline">
            <img src="/images/code-girl.webp" alt="Site logo" class="h-5 w-5 rounded-sm object-contain" />
            <span>Website</span>
          </a>
          <a href="#" class="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:underline">
            <img
              class="h-5 w-5"
              alt="LinkedIn"
              src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><rect width='20' height='20' rx='3' fill='%230A66C2'/><text x='5' y='15' fill='white' font-family='Arial' font-size='12'>in</text></svg>"
            />
            <span>LinkedIn</span>
          </a>
          <a href="#" class="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:underline">
            <img
              class="h-5 w-5"
              alt="GitHub"
              src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><circle cx='10' cy='10' r='10' fill='black'/><text x='3' y='14' fill='white' font-family='Arial' font-size='10'>GH</text></svg>"
            />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
