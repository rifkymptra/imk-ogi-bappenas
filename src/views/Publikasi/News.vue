<template>
    <div id="app">
      <Header />
      <div class="h-[calc(5vh)]"></div>
      <TitleSection 
        link="/publikasi" 
        linkText="PUBLIKASI OGI" 
        heading="OGI"
        subheading="News" 
      />
      <div class="container mx-auto flex justify-center mt-5 px-4">
        <div class="w-full" style="max-width: 1166px; position: relative;">
          <input
            type="text"
            placeholder="Cari Berita OGI"
            class="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
            v-model="searchQuery"
          />
          <button
            v-if="searchQuery"
            class="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
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
      </div>
      <div class="h-[calc(5vh)]"></div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from "../../components/Header.vue";
  import Footer from "../../components/Footer.vue";
  import TitleSection from "../../components/TitleSection.vue";
  
  export default {
    name: "Publikasi",
    components: {
      Header,
      Footer,
      TitleSection,
    },
    data() {
      return {
        searchQuery: '',  // Data property to hold the input value
      };
    },
    watch: {
      searchQuery() {
        this.updateFeatherIcons();
      }
    },
    mounted() {
      // Initialize Feather icons
      this.updateFeatherIcons();
    },
    methods: {
      clearSearch() {
        this.searchQuery = ''; // Clear the search input
      },
      updateFeatherIcons() {
        this.$nextTick(() => {
            this.$feather.replace(); // Re-render Feather icons
        });
      }
    },
  };
  </script>  