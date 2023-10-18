<script setup lang="ts">
import {
  ArrowsPointingInIcon,
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/vue/24/solid";

const { slides, activeIndex, close } = defineProps<{
  slides: Slide[];
  activeIndex?: number;
  close: () => boolean;
}>();

const { currentSlideItem, isShowNavigation, prev, next } = useSliderNavigation(
  slides,
  activeIndex
);
</script>

<template>
  <div
    class="fixed z-10 inset-0 flex items-center justify-center group bg-white dark:bg-slate-900"
  >
    <div class="mx-6">
      <NuxtImg
        :src="currentSlideItem.src"
        :alt="currentSlideItem.alt"
        loading="lazy"
        class="h-[92vh] rounded-lg object-contain"
      />
    </div>
    <IconButton
      v-if="isShowNavigation"
      class="absolute left-6 top-1/2 -mt-5 md:-mt-6 opacity-0 group-hover:opacity-100"
      @click="prev"
    >
      <ArrowSmallLeftIcon class="w-5 h-5 md:w-6 md:h-6" />
    </IconButton>
    <IconButton
      v-if="isShowNavigation"
      class="absolute right-6 top-1/2 -mt-5 md:-mt-6 opacity-0 group-hover:opacity-100"
      @click="next"
    >
      <ArrowSmallRightIcon class="w-5 h-5 md:w-6 md:h-6" />
    </IconButton>
    <IconButton
      class="absolute right-6 top-6 opacity-0 group-hover:opacity-100"
      @click="close"
    >
      <ArrowsPointingInIcon class="w-5 h-5 md:w-6 md:h-6" />
    </IconButton>
  </div>
</template>
