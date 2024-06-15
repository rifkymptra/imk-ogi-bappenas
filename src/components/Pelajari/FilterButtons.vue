<template>
  <div class="flex space-x-2 mb-10">
    <button 
      class="px-4 py-2 rounded-xl font-jakarta font-bold text-neutral-2" 
      :style="{ fontSize: '13px' }"
      :class="{
        'bg-primary-1 text-white font-extrabold': selectedFilter === filter,
        'bg-neutral-4': selectedFilter !== filter
      }"
      v-for="filter in filters" 
      :key="filter"
      @click="$emit('select-filter', filter)"
    >
      {{ filter }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    filters: {
      type: Array,
      required: true
    },
    selectedFilter: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>
