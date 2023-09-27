<script setup lang="ts">
type Props = {
  type?: "button" | "submit" | "reset";
  isAction?: boolean;
};

const { type, isAction } = withDefaults(defineProps<Props>(), {
  type: "button",
  isAction: false,
});
</script>

<template>
  <button
    :type="type"
    :class="{
      'text-white hover:text-white bg-green-500 hover:bg-green-400 dark:hover:bg-green-600':
        isAction,
      'hover:text-green-500 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700':
        !isAction,
    }"
    class="transition-all duration-200 px-9 py-3 rounded-full font-semibold ring-1 ring-indigo-500/5 shadow-md"
  >
    <slot />
  </button>
</template>
