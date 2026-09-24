<script setup lang="ts">
import MenuListItemButton from '@/components/MenuListItemButton.vue';
import type { MenuItem } from '@/types';
import { getImageUrl } from '@/utils';
import { useCartStore } from '@/store/cart';

const props = defineProps<MenuItem>();
const store = useCartStore();
</script>

<template>
  <div>
    <img
      :src="getImageUrl(props.image.mobile)"
      :alt="props.name"
      class="h-53 w-full rounded-lg border-2 object-cover md:hidden"
      :class="[store.isCartItemInCart(props.id) ? 'border-red' : 'border-transparent']" />
    <img
      :src="getImageUrl(props.image.tablet)"
      :alt="props.name"
      class="hidden h-53 w-full rounded-lg border-2 object-cover md:block lg:hidden"
      :class="[store.isCartItemInCart(props.id) ? 'border-red' : 'border-transparent']" />
    <img
      :src="getImageUrl(props.image.desktop)"
      :alt="props.name"
      class="hidden h-53 w-full rounded-lg border-2 object-cover lg:block"
      :class="[store.isCartItemInCart(props.id) ? 'border-red' : 'border-transparent']" />
    <div class="-mt-5.5">
      <MenuListItemButton
        @add-to-cart="store.addCartItem(props)"
        @remove-from-cart="store.removeCartItem(props)"
        :is-item-in-cart="store.isCartItemInCart(props.id)"
        :item-count="store.findCartItembyId(props.id)?.count || 0" />
      <div class="mt-4 space-y-1">
        <p class="text-preset-4 text-rose-500">{{ props.category }}</p>
        <h2 class="text-preset-3 text-rose-900">{{ props.name }}</h2>
        <p class="text-preset-3 text-red">&dollar;{{ props.price.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>
