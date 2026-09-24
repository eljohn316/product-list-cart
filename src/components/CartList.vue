<script setup lang="ts">
import emptyCart from '@/assets/icons/illustration-empty-cart.svg';

const totalCartItems = 0;
</script>

<template>
  <div class="rounded-xl bg-white p-6 xl:w-[384px] xl:shrink-0">
    <h2 class="text-preset-2 text-red">Your Cart ({{ totalCartItems }})</h2>
    <img :src="emptyCart" alt="" class="mt-6 h-70 w-full" />
    <p class="text-preset-4-bold mt-4 text-center text-rose-500">
      Your added items will appear here
    </p>
  </div>
</template>
