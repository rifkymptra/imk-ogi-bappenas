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
              <button 
                @click="sortReports('relevance')" 
                :class="{'bg-red-500 text-white': sortBy === 'relevance'}" 
                class="px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
              >
                Relevansi
              </button>
              <button 
                @click="sortReports('newest')" 
                :class="{'bg-red-500 text-white': sortBy === 'newest'}" 
                class="px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
              >
                Terbaru
              </button>
              <button 
                @click="sortReports('mostRead')" 
                :class="{'bg-red-500 text-white': sortBy === 'mostRead'}" 
                class="px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
              >
                Paling Banyak Dibaca
              </button>
            </div>
          </div>
  
          <div class="mb-4">
            <label for="category" class="block text-sm font-medium text-gray-700">Kategori Bahan Pustaka</label>
            <select 
              v-model="selectedCategory" 
              @change="filterReports" 
              class="border border-gray-300 px-4 py-2 rounded w-full mt-2 focus:outline-none focus:border-gray-400"
            >
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
              :tooltip="true"
              :tooltipMerge="true"
              :tooltipFormat="value => value.toString()"
              :direction="'ltr'"
              :showTicks="true"
              :tickInterval="1"
              class="w-full custom-slider"
              @input="updateYearRange"
            />
            <div class="flex justify-between text-sm text-gray-600 mt-2">
              <span>{{ yearRange[0] }}</span>
              <span>{{ yearRange[1] }}</span>
            </div>
            <button @click="filterReports" class="w-full px-4 py-2 bg-red-500 text-white rounded mt-2 focus:outline-none">
              Terapkan
            </button>
          </div>
        </div>
  
        <!-- Report List -->
        <div class="w-3/4">
          <div v-for="report in filteredReports" :key="report.title" class="mb-5">
            <div class="p-5 border border-gray-300 rounded-lg shadow-sm">
              <h2 class="text-xl font-bold mb-2">{{ report.title }}</h2>
              <p class="text-sm text-gray-500 flex items-center mb-3">
                <i data-feather="calendar" class="h-4 w-4 mr-1"></i>{{ report.date }}
                <span class="mx-2">·</span> 
                <i data-feather="eye" class="h-4 w-4 mr-1"></i>{{ report.views.toLocaleString() }} views
              </p>
              <button @click="downloadReport(report.link)" class="px-4 py-2 bg-red-500 text-white rounded focus:outline-none">
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
  import feather from 'feather-icons';
  
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
    mounted() {
      feather.replace();  // Replace <i> tags with Feather Icons on mount
    },
    updated() {
      feather.replace();  // Ensure icons are updated when component re-renders
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
  
  <style scoped>
  /* Tailwind CSS is used in components */
  
  .custom-slider .slider-track {
    background-color: var(--tw-bg-opacity, 1) theme('colors.primary-1'); /* Using Tailwind color */
  }
  
  .custom-slider .slider-track-fill {
    background-color: var(--tw-bg-opacity, 1) theme('colors.primary-5'); /* Using Tailwind color */
  }
  
  .custom-slider .slider-thumb {
    background-color: var(--tw-bg-opacity, 1) theme('colors.primary-1'); /* Using Tailwind color */
    border-color: var(--tw-bg-opacity, 1) theme('colors.primary-1'); /* Using Tailwind color */
  }
  </style>
  