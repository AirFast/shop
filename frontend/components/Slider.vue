<script setup lang="ts">
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/vue/24/solid";
import { PhotoIcon } from "@heroicons/vue/24/outline";

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
  <ClientOnly>
    <template #default>
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
          <ArrowLeftIcon class="w-4 h-4 md:w-5 md:h-5" />
        </IconButton>
        <IconButton
          v-if="isShowNavigation"
          class="absolute right-5 md:right-6 top-1/2 -mt-5 md:-mt-6 opacity-0 group-hover:opacity-100"
          @click="next"
        >
          <ArrowRightIcon class="w-4 h-4 md:w-5 md:h-5" />
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

    <template #placeholder>
      <SkeletonLoader class="rounded-lg aspect-[6/4]">
        <PhotoIcon class="w-16 h-16" />
      </SkeletonLoader>

      <div class="relative flex gap-2 overflow-x-hidden">
        <div
          v-for="item in 4"
          :key="item"
          class="relative p-2 first:after:opacity-100 after:opacity-0 after:border-2 after:border-slate-200 dark:after:border-slate-800 after:top-0 after:left-0 after:absolute after:w-40 after:h-28 md:after:w-48 md:after:h-36 lg:after:w-44 lg:after:h-32 xl:after:w-48 xl:after:h-36 after:rounded-2xl"
        >
          <SkeletonLoader
            class="w-36 h-24 md:w-44 md:h-32 lg:w-40 lg:h-28 xl:w-44 xl:h-32 rounded-lg"
          >
            <PhotoIcon class="w-6 h-6" />
          </SkeletonLoader>
        </div>
      </div>
    </template>
  </ClientOnly>
</template>
