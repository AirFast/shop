export type Slide = {
  src: string;
  alt: string;
};

export const useSliderNavigation = (slides: Slide[]) => {
  const slidesLength = slides.length;
  const currentIndex = ref(0);

  const nextIndex = computed(() => (currentIndex.value + 1) % slidesLength);
  const prevIndex = computed(
    () => (currentIndex.value - 1 + slides.length) % slidesLength
  );

  const next = () => {
    currentIndex.value = nextIndex.value;
  };

  const prev = () => {
    currentIndex.value = prevIndex.value;
  };

  const currentSlideItem = computed(() => slides[currentIndex.value]);

  return { currentSlideItem, prev, next };
};
