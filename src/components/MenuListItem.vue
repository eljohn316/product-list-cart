<script setup lang="ts">
import type { MenuItem } from '@/types';
import { getImageUrl } from '@/utils';
import MenuListItemButton from '@/components/MenuListItemButton.vue';

const props = defineProps<MenuItem>();
</script>

<template>
  <div>
    <img
      :src="getImageUrl(props.image.mobile)"
      :alt="props.name"
      class="h-53 w-full rounded-lg border-2 border-transparent object-cover md:hidden"
    />
    <img
      :src="getImageUrl(props.image.tablet)"
      :alt="props.name"
      class="hidden h-53 w-full rounded-lg border-2 border-transparent object-cover md:block lg:hidden"
    />
    <img
      :src="getImageUrl(props.image.desktop)"
      :alt="props.name"
      class="hidden h-53 w-full rounded-lg border-2 border-transparent object-cover lg:block"
    />
    <div class="-mt-5.5">
      <MenuListItemButton />
      <div class="mt-4 space-y-1">
        <p class="text-preset-4 text-rose-500">{{ props.category }}</p>
        <h2 class="text-preset-3 text-rose-900">{{ props.name }}</h2>
        <p class="text-preset-3 text-red">&dollar;{{ props.price.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>
