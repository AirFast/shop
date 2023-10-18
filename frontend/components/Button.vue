<script setup lang="ts">
type Props = {
  type?: "button" | "submit" | "reset";
  variant?: "default" | "action";
};

const { type, variant } = withDefaults(defineProps<Props>(), {
  type: "button",
  variant: "default",
});

const isAction = computed(() => variant === "action");
</script>

<template>
  <button
    :type="type"
    :class="{
      'text-white hover:text-white bg-green-500 hover:bg-green-400': isAction,
      'hover:text-green-500 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700':
        !isAction,
    }"
    class="transition-all px-6 py-3 md:px-9 rounded-full text-sm md:text-base font-semibold ring-1 ring-indigo-500/5 shadow-md"
  >
    <slot />
  </button>
</template>
