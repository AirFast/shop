<script setup lang="ts">
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/vue/24/solid";

const { slides } = defineProps<{
  slides: Slide[];
}>();

const {
  currentIndex,
  currentSlideItem,
  isShowSlider,
  isShowNavigation,
  prev,
  next,
  setActiveIndex,
} = useSliderNavigation(slides);

const isOpen = ref(false);
const open = () => (isOpen.value = true);
const close = () => (isOpen.value = false);
</script>

<template>
  <div
    v-if="isShowSlider"
    class="relative group inline-block rounded-lg overflow-hidden w-full"
  >
    <NuxtImg
      :src="currentSlideItem.src"
      :alt="currentSlideItem.alt"
      loading="lazy"
      class="w-full object-cover aspect-[6/4]"
    />
    <IconButton
      v-if="isShowNavigation"
      class="absolute left-5 md:left-6 top-1/2 -mt-5 md:-mt-6 opacity-0 group-hover:opacity-100"
      @click="prev"
    >
      <ArrowSmallLeftIcon class="w-5 h-5 md:w-6 md:h-6" />
    </IconButton>
    <IconButton
      v-if="isShowNavigation"
      class="absolute right-5 md:right-6 top-1/2 -mt-5 md:-mt-6 opacity-0 group-hover:opacity-100"
      @click="next"
    >
      <ArrowSmallRightIcon class="w-5 h-5 md:w-6 md:h-6" />
    </IconButton>
    <IconButton
      class="absolute right-5 md:right-6 bottom-5 md:bottom-6 opacity-0 group-hover:opacity-100"
      @click="open"
    >
      <ArrowsPointingOutIcon class="w-5 h-5 md:w-6 md:h-6" />
    </IconButton>
  </div>

  <Carrousel
    :items="slides"
    :activeIndex="currentIndex"
    :setActiveIndex="setActiveIndex"
  />

  <Teleport to="body">
    <PopupSlider
      v-if="isOpen"
      :slides="slides"
      :activeIndex="currentIndex"
      :close="close"
    />
  </Teleport>
</template>
