<template>
  <div class="p-4">
    <!-- Filter Section -->
    <FilterButtons
      class="flex flex-row justify-center items-center space-x-8" 
      :filters="filters" 
      :selectedFilter="selectedFilter" 
      @select-filter="selectFilter"
    />
    
    <!-- Information Cards Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <InfoCard 
        v-for="card in filteredCards" 
        :key="card.title" 
        :card="card"
      />
    </div>
    
    <!-- Pagination Section -->
    <Pagination 
      :current-page="currentPage" 
      :total-pages="totalPages" 
      @prev-page="prevPage" 
      @next-page="nextPage"
      @change-page="changePage"
    />
  </div>
</template>

<script>
import FilterButtons from './FilterButtons.vue'
import InfoCard from './InfoCard.vue'
import Pagination from './Pagination.vue'
import cards from '/src/data/data.js'  // Importing the data

export default {
  components: {
    FilterButtons,
    InfoCard,
    Pagination
  },
  data() {
    return {
      filters: [
        'Semua', 
        'Open Government Talk', 
        'OGI Goes to Campus', 
        'Open Government Week', 
        'Open Government Local Learning'
      ],
      selectedFilter: 'Semua',
      cards: cards, // Using the imported data
      currentPage: 1,
      itemsPerPage: 6 // Set to 9 for 3x3 grid
    }
  },
  computed: {
    filteredCards() {
      const filtered = this.selectedFilter === 'Semua' ? this.cards : this.cards.filter(card => card.category === this.selectedFilter);
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return filtered.slice(start, end);
    },
    totalPages() {
      const filtered = this.selectedFilter === 'Semua' ? this.cards : this.cards.filter(card => card.category === this.selectedFilter);
      return Math.ceil(filtered.length / this.itemsPerPage);
    }
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter;
      this.currentPage = 1; // reset to first page on filter change
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    changePage(page) {
      this.currentPage = page;
    }
  }
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>

