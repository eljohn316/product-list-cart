<script setup lang="ts">
import { useCartStore } from '@/store/cart';
import ConfirmedOrderListItem from '@/components/ConfirmedOrderListItem.vue';

const store = useCartStore();
</script>

<template>
  <div class="my-8 rounded-lg bg-rose-50 p-6">
    <div class="divide-y divide-rose-100">
      <ConfirmedOrderListItem
        v-for="cartItem in store.cartItems"
        :key="cartItem.item.id"
        :item="cartItem.item"
        :count="cartItem.count" />
    </div>
    <div class="mt-6 border-t border-rose-100 pt-6">
      <div class="flex items-center justify-between">
        <div class="text-preset-4 text-rose-900">Order Total</div>
        <div class="text-preset-2 text-rose-900">
          &dollar;{{ store.totalCartAmount.toFixed(2) }}
        </div>
      </div>
    </div>
  </div>
</template>
