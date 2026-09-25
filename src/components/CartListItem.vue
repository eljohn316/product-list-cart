<script setup lang="ts">
import type { CartItem } from '@/types';

defineEmits(['remove-cart-item']);

const cartItem = defineProps<CartItem>();
</script>

<template>
  <div class="flex items-center py-4 first:pt-0 last:pb-0">
    <div class="flex-1">
      <p class="text-preset-4-bold text-rose-900">{{ cartItem.item.name }}</p>
      <div class="mt-2">
        <span class="text-preset-4-bold text-red">{{ cartItem.count }}x</span>
        <span class="text-preset-4 ml-2 text-rose-500">
          @ &dollar;{{ cartItem.item.price.toFixed(2) }}
        </span>
        <span class="text-preset-4-bold ml-2 text-rose-500">
          &dollar;{{ (cartItem.count * cartItem.item.price).toFixed(2) }}
        </span>
      </div>
    </div>
    <button
      class="inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-rose-400 text-rose-400 hover:border-rose-900 hover:text-rose-900"
      @click="$emit('remove-cart-item')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill="currentColor"
        viewBox="0 0 10 10">
        <path
          fill="currentColor"
          d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
      </svg>
      <span class="sr-only">Remove item</span>
    </button>
  </div>
</template>
