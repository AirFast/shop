export type Slide = {
  src: string;
  alt: string;
};

export const useSliderNavigation = (slides: Slide[], index?: number) => {
  const slidesLength = slides.length;
  const isShowSlider = slidesLength !== 0;
  const isShowNavigation = slidesLength > 1;
  const currentIndex = ref(index ?? 0);

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
  const setActiveIndex = (index: number) => {
    currentIndex.value = index;
  };

  return {
    currentIndex,
    currentSlideItem,
    isShowSlider,
    isShowNavigation,
    prev,
    next,
    setActiveIndex,
  };
};
