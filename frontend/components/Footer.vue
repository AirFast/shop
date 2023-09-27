<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";

const year = new Date().getFullYear();
const { isDark, toggleDark } = useTheme();
</script>

<template>
  <p class="text-xs">&copy; Shop, {{ year }}</p>
  <ClientOnly>
    <IconButton @click="toggleDark()">
      <SunIcon v-if="isDark" class="w-6 h-6" />
      <MoonIcon v-else class="w-6 h-6" />
    </IconButton>
  </ClientOnly>
</template>
