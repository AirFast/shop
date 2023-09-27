<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";

const { isDark, toggleDark } = useTheme();
</script>

<template>
  <div
    class="font-app h-full transition-all duration-300 text-slate-700 ease-out dark:text-white dark:bg-slate-900"
  >
    Some default layout shared across all pages
    <slot />

    <ClientOnly>
      <IconButton @click="toggleDark()">
        <MoonIcon v-if="!isDark" class="w-6 h-6 text-indigo-500" />
        <SunIcon v-else class="w-6 h-6 dark:text-indigo-200" />
      </IconButton>
    </ClientOnly>
  </div>
</template>
