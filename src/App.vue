<script setup lang="ts">
import MenuList from '@/components/MenuList.vue';
import CartList from '@/components/CartList.vue';
</script>

<template>
  <main class="px-4 py-6 md:py-10 lg:py-22">
    <div class="mx-auto max-w-lg space-y-8 md:max-w-none lg:max-w-7xl">
      <h1 class="text-preset-1">Desserts</h1>
      <div class="space-y-8 xl:flex xl:items-start xl:space-y-0 xl:gap-x-8">
        <MenuList />
        <CartList />
      </div>
    </div>
  </main>
</template>
