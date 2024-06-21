<template>
    <div id="app">
      <!-- Header Navbar -->
      <Header />
  
      <!-- Title Section -->
      <div class="h-[5vh]"></div>
      <TitleSection link="/publikasi" linkText="PUBLIKASI OGI" heading="Infografis" :headingPrimary="false" />
  
      <!-- Search Bar and Filters -->
      <div class="container mx-auto flex justify-center items-center mt-5 px-4 gap-4">
        <SearchBar placeholder="Cari Infografis" customClasses="w-full max-w-[676px]" maxWidth="676px"
          @search-query="onSearchQuery" @clear-search="clearSearchQuery" v-model="searchQuery" />
        <div class="relative w-[289px]">
          <select v-model="categoryFilter"
            class="bg-white border border-gray-300 rounded-lg px-4 py-2 appearance-none text-gray-700 w-full">
            <option value="">Filter Berdasarkan Kategori</option>
            <option v-for="category in uniqueCategories" :key="category" :value="category">{{ category }}</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <i data-feather="chevron-down"></i>
          </div>
          <button v-if="categoryFilter" @click="clearCategoryFilter"
            class="absolute inset-y-0 right-6 flex items-center px-2 text-primary-1 hover:text-primary-4">
            <i data-feather="x" class="w-4 h-4"></i>
          </button>
        </div>
        <div class="relative w-[289px]">
          <select v-model="yearFilter"
            class="bg-white border border-gray-300 rounded-lg px-4 py-2 appearance-none text-gray-700 w-full">
            <option value="">Filter Berdasarkan Tahun</option>
            <option v-for="year in uniqueYears" :key="year" :value="year">{{ year }}</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <i data-feather="chevron-down"></i>
          </div>
          <button v-if="yearFilter" @click="clearYearFilter"
            class="absolute inset-y-0 right-6 flex items-center px-2 text-primary-1 hover:text-primary-4">
            <i data-feather="x" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
  
      <!-- Cards Section -->
      <div class="container mx-auto mt-10 justify-center flex">
        <div class="w-full max-w-[1311px] justify-center flex">
          <div v-if="filteredAndPaginatedData.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InfografisCard v-for="(item, index) in filteredAndPaginatedData" :key="index" :kategori="item.kategori"
              :judul="item.judul" :tanggal="item.tanggal" :imageSrc="item.imageSrc" :link="item.link" />
          </div>
          <div v-else class="text-center text-neutral-1 font-jakarta text-[16px] mt-10">
            Tidak ada infografis yang ditemukan.
          </div>
        </div>
      </div>
  
      <!-- Pagination -->
      <div v-if="totalPages > 1 && filteredAndPaginatedData.length > 0" class="flex justify-center space-x-2 mt-4">
        <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" :class="{
            'bg-neutral-4 text-white cursor-not-allowed': currentPage === 1,
            'bg-white text-neutral-2 border border-neutral-3': currentPage !== 1
          }"
          class="w-[32px] h-[32px] flex items-center justify-center border border-neutral-3 rounded-md hover:bg-neutral-4 focus:outline-none">
          <i data-feather="chevron-left"></i>
        </button>
  
        <button v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{
            'bg-white border-primary-1 text-primary-1': currentPage === page,
            'bg-white border-neutral-3 text-neutral-3': currentPage !== page
          }"
          class="w-[32px] h-[32px] font-inter font-medium text-[13px] flex items-center justify-center border rounded-md hover:bg-neutral-4 focus:outline-none">
          {{ page }}
        </button>
  
        <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" :class="{
            'bg-neutral-4 text-white cursor-not-allowed': currentPage === totalPages,
            'bg-white text-neutral-2 border border-neutral-3': currentPage !== totalPages
          }"
          class="w-[32px] h-[32px] flex items-center justify-center rounded-md hover:bg-neutral-4 focus:outline-none">
          <i data-feather="chevron-right"></i>
        </button>
      </div>
  
      <div class="h-[5vh]"></div>
  
      <!-- Footer -->
      <Footer />
      <ScrollButton />
    </div>
  </template>
  
  <script>
  import Header from "../../components/Header.vue";
  import TitleSection from "../../components/TitleSection.vue";
  import SearchBar from "../../components/SearchBar.vue";
  import Footer from "../../components/Footer.vue";
  import ScrollButton from "../../components/ScrollButton.vue";
  import InfografisCard from "../../components/InfografisCard.vue";
  import infografisData from '../../assets/data/infografis.json'; // Import the JSON file
  
  export default {
    name: "Infografis",
    components: {
      Header,
      Footer,
      TitleSection,
      SearchBar,
      ScrollButton,
      InfografisCard,
    },
    data() {
      return {
        categoryFilter: '',
        yearFilter: '',
        searchQuery: '',
        cardsData: [],
        currentPage: 1,
        itemsPerPage: 8
      };
    },
    computed: {
      uniqueCategories() {
        return [...new Set(this.cardsData.map(card => card.kategori))];
      },
      uniqueYears() {
        return [...new Set(this.cardsData.map(card => card.tahun))];
      },
      totalPages() {
        return Math.ceil(this.filteredCards.length / this.itemsPerPage);
      },
      paginatedData() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.filteredCards.slice(start, end);
      },
      filteredCards() {
        return this.cardsData.filter(card => {
          const matchesTitle = card.judul.toLowerCase().includes(this.searchQuery.toLowerCase());
          const matchesDate = card.tanggal.toLowerCase().includes(this.searchQuery.toLowerCase());
          const matchesCategory = this.categoryFilter ? card.kategori === this.categoryFilter : true;
          const matchesYear = this.yearFilter ? card.tahun === this.yearFilter : true;
          return (matchesTitle || matchesDate) && matchesCategory && matchesYear;
        });
      },
      filteredAndPaginatedData() {
        return this.paginatedData;
      }
    },
    methods: {
      clearCategoryFilter() {
        this.categoryFilter = '';
      },
      clearYearFilter() {
        this.yearFilter = '';
      },
      onSearchQuery(query) {
        this.searchQuery = query;
        this.currentPage = 1; // Reset to first page on new search
      },
      clearSearchQuery() {
        this.searchQuery = '';
        this.currentPage = 1; // Reset to first page on clear search
      },
      fetchCardsData() {
        // Directly set the imported JSON data to cardsData
        this.cardsData = infografisData;
      },
      changePage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
      }
    },
    mounted() {
      this.fetchCardsData();
      this.$nextTick(() => {
        this.$feather.replace(); // Replace <i> tags with Feather Icons on mount
      });
    },
    updated() {
      this.$nextTick(() => {
        this.$feather.replace(); // Ensure icons are updated when component re-renders
      });
    },
  };
  </script>
  
  <style scoped>
  select {
    transition: background-color 0.3s, border-color 0.3s;
  }
  
  select:hover {
    background-color: #f3f3f3;
    border-color: #b3b3b3;
  }
  
  button i {
    width: 20px;
    height: 20px;
  }
  </style>
  