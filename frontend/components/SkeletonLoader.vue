<template>
  <div
    role="status"
    class="relative z-10 animate-pulse flex items-center justify-center bg-slate-200 dark:bg-slate-700 cursor-progress"
  >
    <span class="sr-only">{{ $t("loader") }}</span>
    <slot />
  </div>
</template>
