<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});

const htmlAttrs = computed(() => head.value.htmlAttrs!);
</script>

<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
    <Body
      class="font-app h-full transition-all duration-300 text-slate-700 ease-out dark:text-white dark:bg-slate-900"
    >
      <div class="min-h-screen flex flex-col container px-6 mx-auto">
        <header class="flex justify-between items-center gap-4 my-6">
          <Header />
        </header>
        <main class="flex-1 my-6">
          <slot />
        </main>
        <footer class="flex justify-between items-center gap-4 my-6">
          <Footer />
        </footer>
      </div>
    </Body>
  </Html>
</template>
