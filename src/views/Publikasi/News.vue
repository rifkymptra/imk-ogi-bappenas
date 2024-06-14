<template>
    <div id="app">
      <!-- Header Navbar -->
      <Header />
  
      <!-- Title Section -->
      <div class="h-[calc(5vh)]"></div>
      <TitleSection
        link="/publikasi"
        linkText="PUBLIKASI OGI"
        heading="OGI "
        subheading1="News"
        :headingPrimary="false"
        :subheading1Primary="true"
      />
  
      <!-- Search Bar -->
      <div class="container mx-auto flex justify-center mt-5 px-4">
        <SearchBar placeholder="Telusuri" customClasses="" maxWidth="1166px" />
      </div>
      <div class="h-[calc(5vh)]"></div>
  
      <!-- Filters and Sorting -->
      <div class="container mx-auto px-4 flex">
        <div class="w-1/4 pr-4">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Urutkan Berdasarkan</label>
            <div class="flex space-x-2 mt-2">
              <button @click="sortReports('relevance')" :class="{'bg-red-500 text-white rounded-full': sortBy === 'relevance'}" class="px-4 py-2 border rounded-full">Relevansi</button>
              <button @click="sortReports('newest')" :class="{'bg-red-500 text-white rounded-full': sortBy === 'newest'}" class="px-4 py-2 border rounded-full">Terbaru</button>
              <button @click="sortReports('mostRead')" :class="{'bg-red-500 text-white rounded-full': sortBy === 'mostRead'}" class="px-4 py-2 border rounded-full">Paling Banyak Dibaca</button>
            </div>
          </div>
  
          <div class="mb-4">
            <label for="category" class="block text-sm font-medium text-gray-700">Kategori Bahan Pustaka</label>
            <select v-model="selectedCategory" @change="filterReports" class="border px-4 py-2 rounded w-full mt-2">
              <option value="">Semua</option>
              <option value="RAN">RAN</option>
            </select>
          </div>
  
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Tahun</label>
            <Slider
              v-model="yearRange"
              :min="2013"
              :max="2024"
              :tooltip="'hover'"
              :color="'#EF4444'"
              @input="updateYearRange"
            />
            <div class="flex justify-between text-sm text-gray-600 mt-2">
              <span>{{ yearRange[0] }}</span>
              <span>{{ yearRange[1] }}</span>
            </div>
            <button @click="filterReports" class="w-full px-4 py-2 bg-red-500 text-white rounded mt-2">Terapkan</button>
          </div>
        </div>
  
        <!-- Report List -->
        <div class="w-3/4">
          <div v-for="report in filteredReports" :key="report.title" class="mb-5">
            <div class="p-5 border border-gray-300 rounded-lg">
              <h2 class="text-xl font-bold mb-2">{{ report.title }}</h2>
              <p class="text-sm text-gray-500">{{ report.date }} · {{ report.views }} views</p>
              <button @click="downloadReport(report.link)" class="mt-3 px-4 py-2 bg-red-500 text-white rounded">
                Unduh
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from "../../components/Header.vue";
  import Footer from "../../components/Footer.vue";
  import TitleSection from "../../components/TitleSection.vue";
  import SearchBar from "../../components/SearchBar.vue";
  import { fetchReports } from "../../data/ReportController.js";
  import Slider from '@vueform/slider';
  
  export default {
    name: "Publikasi",
    components: {
      Header,
      Footer,
      TitleSection,
      SearchBar,
      Slider
    },
    data() {
      return {
        reports: [],
        filteredReports: [],
        yearRange: [2013, 2024],
        sortBy: 'newest',
        selectedCategory: ''
      };
    },
    async created() {
      this.reports = await fetchReports();
      this.filteredReports = this.reports;
    },
    methods: {
      async filterReports() {
        let reports = await fetchReports();
        reports = reports.filter(report => report.year >= this.yearRange[0] && report.year <= this.yearRange[1]);
        if (this.selectedCategory) {
          reports = reports.filter(report => report.category === this.selectedCategory);
        }
        this.filteredReports = reports;
      },
      sortReports(criteria) {
        this.sortBy = criteria;
        if (criteria === 'newest') {
          this.filteredReports.sort((a, b) => b.year - a.year);
        } else if (criteria === 'mostRead') {
          this.filteredReports.sort((a, b) => b.views - a.views);
        }
      },
      downloadReport(link) {
        window.location.href = link;
      },
      updateYearRange() {
        if (this.yearRange[0] > this.yearRange[1]) {
          this.yearRange = [this.yearRange[1], this.yearRange[0]];
        }
      }
    }
  };
  </script>