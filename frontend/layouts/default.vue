<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";

const { isDark, toggleDark } = useTheme();
</script>

<template>
  <div>
    Some default layout shared across all pages
    <slot />

    <div>
      <TheButton @click="toggleDark()">
        <MoonIcon v-if="!isDark" class="w-6 h-6 text-indigo-500" />
        <SunIcon v-else class="w-6 h-6 dark:text-indigo-200" />
      </TheButton>
    </div>
  </div>
</template>
