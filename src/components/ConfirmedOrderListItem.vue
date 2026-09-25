<script setup lang="ts">
import type { CartItem } from '@/types';

const props = defineProps<CartItem>();
</script>

<template>
  <div class="flex items-center gap-x-4 py-4 first:pt-0 last:pb-0">
    <img
      :src="props.item.image.thumbnail"
      :alt="props.item.name"
      class="size-12 flex-none rounded-sm" />
    <div class="flex-1">
      <p class="text-preset-4-bold line-clamp-1 text-rose-900">{{ props.item.name }}</p>
      <div class="mt-2">
        <span class="text-red text-preset-4-bold">{{ props.count }}x</span>
        <span class="text-preset-4 ml-2 text-rose-500">
          @ &dollar;{{ props.item.price.toFixed(2) }}
        </span>
      </div>
    </div>
    <div class="text-preset-3 text-rose-900">
      &dollar;{{ (props.count * props.item.price).toFixed(2) }}
    </div>
  </div>
</template>
