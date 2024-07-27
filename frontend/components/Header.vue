<script setup lang="ts">
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/vue/24/outline";

const { locale } = useI18n();
const localePath = useLocalePath();

const { currentRoute, options, back, push } = useRouter();

const goBack = () => {
  options.history.state.back ? back() : push("/");
};
</script>

<template>
  <header class="flex justify-between items-center gap-4 my-6">
    <nav>
      <ul class="flex gap-2 -mx-2">
        <li>
          <NuxtLink
            :to="localePath('/')"
            class="transition-all text-sm md:text-base font-semibold hover:text-green-500 p-2"
          >
            {{ $t("menu.home") }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            :to="localePath('/products')"
            class="transition-all text-sm md:text-base font-semibold hover:text-green-500 p-2"
          >
            {{ $t("menu.products") }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <ul class="flex gap-4">
      <li>
        <IconButton
          v-if="currentRoute.path === `/${locale}/cart`"
          @click="goBack"
          :title="$t('closeCart')"
        >
          <XMarkIcon class="w-5 h-5 md:w-6 md:h-6" />
        </IconButton>
        <NuxtLink v-else :to="localePath('/cart')" :title="$t('openCart')">
          <IconButton class="relative">
            <span
              class="w-5 h-5 md:w-6 md:h-6 absolute -top-2 -right-3 flex items-center justify-center rounded-full ring-4 ring-green-500/30 bg-green-500 text-white text-xs/none font-medium"
            >
              17
            </span>
            <ShoppingCartIcon class="w-5 h-5 md:w-6 md:h-6" />
          </IconButton>
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.router-link-active {
  @apply text-green-500;
}
</style>
