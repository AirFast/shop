<script setup lang="ts">
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
  {
    src: "https://images.unsplash.com/photo-1581544697726-30c6f9d401da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2753&q=80",
    alt: "Alt 6",
  },
  {
    src: "https://images.unsplash.com/photo-1582761370934-3e7a1cb2be33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    alt: "Alt 7",
  },
  {
    src: "https://images.unsplash.com/photo-1505937059382-aab581fd88c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    alt: "Alt 8",
  },
  {
    src: "https://images.unsplash.com/photo-1559627755-42212e5c5fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2307&q=80",
    alt: "Alt 9",
  },
  {
    src: "https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    alt: "Alt 10",
  },
];
</script>

<template>
  <div>
    <div class="sticky top-12 grid gap-4">
      <Slider :slides="galleryList" />
    </div>
  </div>
</template>
