<template>
  <div class="flex justify-center mt-12 space-x-2">
    <button 
      class="px-4 py-2 bg-gray-200 rounded" 
      @click="$emit('prev-page')" 
      :disabled="currentPage === 1"
    >
      <i data-feather="chevron-left"></i>
    </button>
    <button 
      v-for="page in totalPages" 
      :key="page" 
      class="px-4 py-2 bg-gray-200 rounded" 
      :class="{'bg-red-500 text-white': currentPage === page}"
      @click="$emit('change-page', page)"
    >
      {{ page }}
    </button>
    <button 
      class="px-4 py-2 bg-gray-200 rounded" 
      @click="$emit('next-page')" 
      :disabled="currentPage >= totalPages"
    >
      <i data-feather="chevron-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number
  }
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>
