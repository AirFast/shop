<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";

const { isDark, toggleDark } = useTheme();
</script>

<template>
  <div
    class="font-app h-full transition-all duration-300 text-slate-700 ease-out dark:text-white dark:bg-slate-900"
  >
    <div class="min-h-screen flex flex-col container px-6 mx-auto">
      <header class="flex justify-between items-center gap-4 my-6">
        <Header />
      </header>
      <main class="flex-1 my-6">
        <slot />
      </main>
      <footer class="my-6">
        <Footer />
      </footer>
    </div>
  </div>
</template>

<style>
.router-link-active {
  @apply text-green-500;
}
</style>
