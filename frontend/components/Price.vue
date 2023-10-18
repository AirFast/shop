<script setup lang="ts">
type Props = {
  price?: number;
  discount?: number;
  inStock?: number;
};

const props = withDefaults(defineProps<Props>(), {
  price: 0,
  discount: 0,
  inStock: 0,
});

const discountAmount = computed(() => (props.price * props.discount) / 100);
const discountedPrice = computed(() => props.price - discountAmount.value);
</script>

<template>
  <div>
    <p class="flex gap-2 items-baseline font-bold text-lg text-green-500">
      ${{ discountedPrice.toFixed(2) }}
      <span class="font-semibold text-base text-slate-500 line-through">
        ${{ price.toFixed(2) }}
      </span>
    </p>
    <p class="text-sm font-semibold text-green-500">
      {{ $t("price.youSave") }}: ${{ discountAmount.toFixed(2) }} ({{
        discount
      }}%)
    </p>
    <p v-if="inStock" class="text-sm font-bold text-slate-500 mt-2">
      {{ $t("price.inStock") }} ({{ inStock }})
    </p>
    <p v-else class="text-sm font-bold text-slate-500 mt-2">
      {{ $t("price.outStock") }}
    </p>
  </div>
</template>
