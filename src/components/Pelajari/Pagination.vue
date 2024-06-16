<template>
  <div class="flex justify-center mt-12 space-x-2">
    <button 
      class="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-black rounded disabled:bg-neutral-300" 
      @click="$emit('prev-page')" 
      :disabled="currentPage === 1"
    >
      <img src="../../assets/chevron-left.svg" alt="Previous" class="w-6 h-6 "/>
    </button>
    <button 
      v-for="page in totalPages" 
      :key="page" 
      class="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-black rounded" 
      :class="{
        'border-primary-3 text-primary-3': currentPage === page
      }"
      @click="$emit('change-page', page)"
    >
      {{ page }}
    </button>
    <button 
      class="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-black rounded disabled:bg-neutral-300" 
      @click="$emit('next-page')" 
      :disabled="currentPage >= totalPages"
    >
      <img src="../../assets/chevron-right.svg" alt="Next" class="w-6 h-6"/>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
