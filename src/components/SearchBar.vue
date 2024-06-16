<template>
  <div class="relative w-full" :class="customClasses" :style="{ maxWidth: maxWidth }">
    <input
      type="text"
      :placeholder="placeholder"
      class="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
      v-model="searchQuery"
      @input="onInput"
    />
    <button
      v-if="searchQuery"
      class="absolute right-10 top-1/2 transform -translate-y-1/2 text-primary-1 hover:text-primary-4 focus:outline-none"
      @click="clearSearch"
    >
      <i data-feather="x"></i>
    </button>
    <button
      class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
    >
      <i data-feather="search"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    placeholder: {
      type: String,
      default: 'Search...'
    },
    customClasses: {
      type: String,
      default: ''
    },
    maxWidth: {
      type: String,
      default: '1166px'
    }
  },
  data() {
    return {
      searchQuery: ''
    };
  },
  watch: {
    searchQuery() {
      this.updateFeatherIcons();
    }
  },
  mounted() {
    this.updateFeatherIcons();
  },
  methods: {
    clearSearch() {
      this.searchQuery = '';
      this.$emit('clear-search'); // Emit an event when search is cleared
    },
    updateFeatherIcons() {
      this.$nextTick(() => {
        this.$feather.replace();
      });
    },
    onInput() {
      this.$emit('search-query', this.searchQuery); // Emit the search query
    }
  }
};
</script>