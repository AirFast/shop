<script setup lang="ts">
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <ul class="flex gap-4">
    <li>
      <NuxtLink
        to="/"
        class="transition-all font-semibold hover:text-green-500"
      >
        Home
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/products"
        class="transition-all font-semibold hover:text-green-500"
      >
        Products
      </NuxtLink>
    </li>
  </ul>
  <ul class="flex gap-4">
    <li>
      <NuxtLink to="/cart">
        <IconButton>
          <ShoppingCartIcon class="w-6 h-6" />
        </IconButton>
      </NuxtLink>
    </li>
  </ul>
</template>

<style>
.router-link-active {
  @apply text-green-500;
}
</style>
