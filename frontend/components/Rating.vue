<script setup lang="ts">
import { StarIcon as StarIconOutline } from "@heroicons/vue/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/vue/24/solid";

type Props = {
  rating?: number;
  reviews?: number;
};

const localePath = useLocalePath();

const props = withDefaults(defineProps<Props>(), {
  rating: 0,
  reviews: 0,
});

const MAX_RATING = 5;
const roundRating = Math.round(props.rating);

const userRating = ref(0);

const setRating = (value: number) => {
  userRating.value = value;
};
</script>

<template>
  <div class="flex gap-3 items-center">
    <div class="flex group w-fit">
      <span
        v-for="starValue in MAX_RATING"
        :key="starValue"
        @click="setRating(starValue)"
        :class="{
          'text-green-500': starValue <= roundRating,
          'text-slate-500': starValue > roundRating,
        }"
        class="cursor-pointer transition-all peer peer-hover:text-slate-700 dark:peer-hover:text-white group-hover:text-green-500"
      >
        <StarIconSolid v-if="starValue <= roundRating" class="w-6 h-6" />
        <StarIconOutline v-else class="w-6 h-6" />
      </span>
    </div>
    <span class="font-bold text-xs md:text-sm text-slate-500">
      {{ rating.toFixed(2) }} {{ $t("rating.outOf") }} {{ MAX_RATING }}
    </span>
    <span class="w-1 h-1 bg-slate-500 rounded-full"></span>
    <NuxtLink
      :to="localePath('/')"
      class="transition-all font-bold text-xs md:text-sm text-slate-500 hover:text-green-500"
    >
      {{ $t("rating.reviews", reviews) }}
    </NuxtLink>
  </div>
</template>
