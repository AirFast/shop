<script setup lang="ts">
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/vue/24/outline";

const { currentRoute, options, back, push } = useRouter();
const goBack = () => {
  options.history.state.back ? back() : push("/");
};
</script>

<template>
  <nav>
    <ul class="flex gap-2 -mx-2">
      <li>
        <NuxtLink
          to="/"
          class="transition-all font-semibold hover:text-green-500 p-2"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/products"
          class="transition-all font-semibold hover:text-green-500 p-2"
        >
          Products
        </NuxtLink>
      </li>
    </ul>
  </nav>

  <ul class="flex gap-4">
    <li>
      <IconButton v-if="currentRoute.name === 'cart'" @click="goBack">
        <XMarkIcon class="w-6 h-6" />
      </IconButton>
      <NuxtLink v-else to="/cart">
        <IconButton class="relative">
          <span
            class="w-6 h-6 absolute -top-2 -right-3 flex items-center justify-center rounded-full ring-4 ring-green-500/30 bg-green-500 text-white text-xs/none font-medium"
          >
            17
          </span>
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
