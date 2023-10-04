<script setup lang="ts">
type Props = {
  inStock?: number;
};

const props = withDefaults(defineProps<Props>(), {
  inStock: 0,
});
</script>

<template>
  <div>
    <p class="flex gap-2 items-baseline font-bold text-lg text-green-500">
      $24.00
      <span class="font-semibold text-base text-slate-500 line-through">
        $28.00
      </span>
    </p>
    <p class="text-sm font-semibold text-green-500">
      {{ $t("price.youSave") }}: $28.00 (50%)
    </p>
    <p v-if="inStock" class="text-sm font-bold text-slate-500 mt-2">
      {{ $t("price.inStock") }} ({{ inStock }})
    </p>
    <p v-else class="text-sm font-bold text-slate-500 mt-2">
      {{ $t("price.outStock") }}
    </p>
  </div>
</template>
