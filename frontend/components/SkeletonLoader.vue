<template>
  <div
    role="status"
    class="animate-pulse flex items-center justify-center bg-slate-200 dark:bg-slate-700 cursor-progress"
  >
    <span class="sr-only">Loading...</span>
    <slot />
  </div>
</template>
