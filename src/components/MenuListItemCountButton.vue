<script setup lang="ts">
defineEmits(['increment', 'decrement']);
const { action } = defineProps<{ action: 'increment' | 'decrement' }>();
</script>

<template>
  <button
    type="button"
    class="inline-flex size-5 items-center justify-center rounded-full border border-white hover:opacity-80"
    @click="action === 'increment' ? $emit('increment') : $emit('decrement')">
    <template v-if="action === 'decrement'">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
        <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
      </svg>
      <span class="sr-only">Decrease item count</span>
    </template>

    <template v-if="action === 'increment'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill="none"
        viewBox="0 0 10 10">
        <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
      </svg>
      <span class="sr-only">Increase item count</span>
    </template>
  </button>
</template>
