<script setup lang="ts">
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/vue/24/solid";

const galleryList = [
  {
    src: "https://images.unsplash.com/photo-1695751240056-c9aea1e799df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2728&q=80",
    alt: "Alt 1",
  },
  {
    src: "https://images.unsplash.com/photo-1695751240426-0f15ea056103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    alt: "Alt 2",
  },
  {
    src: "https://images.unsplash.com/photo-1695751240451-2e499d93eb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    alt: "Alt 3",
  },
  {
    src: "https://images.unsplash.com/photo-1584645396585-6eea31193922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2614&q=80",
    alt: "Alt 4",
  },
  {
    src: "https://images.unsplash.com/photo-1584645304588-e1c8b63d7e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    alt: "Alt 5",
  },
];

const galleryLength = galleryList.length;
const currentIndex = ref(0);

const nextIndex = computed(() => (currentIndex.value + 1) % galleryLength);
const prevIndex = computed(
  () => (currentIndex.value - 1 + galleryList.length) % galleryLength
);

const next = () => {
  currentIndex.value = nextIndex.value;
};

const prev = () => {
  currentIndex.value = prevIndex.value;
};

const currentGalleryItem = computed(() => galleryList[currentIndex.value]);
</script>

<template>
  <div
    class="relative group inline-block rounded-lg overflow-hidden w-full mb-8"
  >
    <NuxtImg
      :src="currentGalleryItem.src"
      :alt="currentGalleryItem.alt"
      loading="lazy"
      class="w-full object-cover aspect-[6/4]"
    />
    <IconButton
      class="absolute left-5 md:left-6 top-1/2 -mt-5 md:-mt-6 opacity-0 group-hover:opacity-100"
      @click="prev"
    >
      <ArrowSmallLeftIcon class="w-5 h-5 md:w-6 md:h-6" />
    </IconButton>
    <IconButton
      class="absolute right-5 md:right-6 top-1/2 -mt-5 md:-mt-6 opacity-0 group-hover:opacity-100"
      @click="next"
    >
      <ArrowSmallRightIcon class="w-5 h-5 md:w-6 md:h-6" />
    </IconButton>
  </div>
</template>
