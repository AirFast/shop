<script setup lang="ts">
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps<{
  items: Slide[];
  activeIndex?: number;
  setActiveIndex: (index: number) => void;
}>();

const carrousel = ref<HTMLDivElement | null>(null);
const carrouselItem = ref<HTMLDivElement[] | null>(null);
const isHideLeft = ref(true);
const isHideRight = ref(true);

const buttonVisibility = () => {
  if (carrousel.value) {
    const scrollLeft = carrousel.value.scrollLeft;
    const scrollWidth = carrousel.value.scrollWidth;
    const clientWidth = carrousel.value.clientWidth;

    isHideLeft.value = scrollLeft === 0;
    isHideRight.value = scrollLeft + clientWidth >= scrollWidth;
  }
};

const scrollTo = (left: number) => {
  carrousel.value?.scrollTo({ left });
  setTimeout(() => buttonVisibility(), 700);
};

const left = () => {
  if (carrousel.value && carrouselItem.value) {
    const left =
      carrousel.value.scrollLeft - carrouselItem.value[1].clientWidth * 2;

    scrollTo(left);
  }
};

const right = () => {
  if (carrousel.value && carrouselItem.value) {
    const left =
      carrousel.value.scrollLeft + carrouselItem.value[0].clientWidth * 2;

    scrollTo(left);
  }
};

const scrollToActiveItem = (index: number) => {
  if (carrousel.value && carrouselItem.value) {
    const left = --index * carrouselItem.value[0].clientWidth;

    scrollTo(left);
  }
};

onMounted(() => {
  setTimeout(() => buttonVisibility(), 100);
});

watch(
  () => props.activeIndex,
  (index) => {
    scrollToActiveItem(index as number);
  }
);
</script>

<template>
  <div class="relative group">
    <div
      ref="carrousel"
      class="flex gap-2 snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        ref="carrouselItem"
        @click="setActiveIndex(index)"
        :class="{ 'after:opacity-100': index === activeIndex }"
        class="relative p-2 snap-center shrink-0 cursor-pointer hover:after:opacity-100 after:duration-200 after:opacity-0 after:border-2 after:border-green-500 after:top-0 after:left-0 after:absolute after:w-40 after:h-28 md:after:w-48 md:after:h-36 lg:after:w-44 lg:after:h-32 xl:after:w-48 xl:after:h-36 after:rounded-2xl"
      >
        <NuxtImg
          :src="item.src"
          :alt="item.alt"
          loading="lazy"
          class="w-36 h-24 md:w-44 md:h-32 lg:w-40 lg:h-28 xl:w-44 xl:h-32 rounded-lg object-cover"
        />
      </div>
    </div>
    <IconButton
      @click="left"
      :class="{
        'pointer-events-none': isHideLeft,
        'group-hover:opacity-100': !isHideLeft,
      }"
      class="absolute left-5 md:left-6 top-1/2 -mt-5 md:-mt-6 opacity-0"
    >
      <ArrowLeftIcon class="w-4 h-4 md:w-5 md:h-5" />
    </IconButton>
    <IconButton
      @click="right"
      :class="{
        'pointer-events-none': isHideRight,
        'group-hover:opacity-100': !isHideRight,
      }"
      class="absolute right-5 md:right-6 top-1/2 -mt-5 md:-mt-6 opacity-0"
    >
      <ArrowRightIcon class="w-4 h-4 md:w-5 md:h-5" />
    </IconButton>
  </div>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
