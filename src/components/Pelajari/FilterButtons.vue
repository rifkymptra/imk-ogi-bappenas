<template>
  <div class="flex space-x-2 mb-10">
    <button 
      class="bg-gray-200 px-4 py-2 rounded-xl" 
      :class="{'bg-red-500 text-white': selectedFilter === filter}"
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
    filters: Array,
    selectedFilter: String
  }
}
</script>
