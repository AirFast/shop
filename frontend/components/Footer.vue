<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";

const { isDark, toggleDark } = useTheme();
</script>

<template>
  <ClientOnly>
    <IconButton @click="toggleDark()">
      <SunIcon v-if="isDark" class="w-6 h-6" />
      <MoonIcon v-else class="w-6 h-6" />
    </IconButton>
  </ClientOnly>
</template>
