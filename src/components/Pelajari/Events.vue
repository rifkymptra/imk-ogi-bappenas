<template>
  <div class="p-4 flex flex-col items-center">
    <!-- Filter Section -->
    <FilterButtons
      class="flex flex-row justify-center items-center space-x-8" 
      :filters="filters" 
      :selectedFilter="selectedFilter" 
      @select-filter="selectFilter"
    />
    
    <!-- Information Cards Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <InfoCard 
        v-for="card in paginatedCards" 
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
      itemsPerPage: 6 // Set to 6 for 2x3 grid
    }
  },
  computed: {
    filteredCards() {
      return this.selectedFilter === 'Semua' ? this.cards : this.cards.filter(card => card.category === this.selectedFilter);
    },
    totalPages() {
      return Math.ceil(this.filteredCards.length / this.itemsPerPage);
    },
    paginatedCards() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredCards.slice(start, end);
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

