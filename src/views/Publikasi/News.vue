<template>
    <div id="app">
      <Header />
      <TitleSection 
        link="/publikasi" 
        linkText="PUBLIKASI OGI" 
        heading="OGI"
        subheading="News" 
      />
      <div class="container mx-auto flex flex-col items-center mt-5">
        <div class="w-full md:w-1/2 relative">
          <input
            type="text"
            placeholder="Telusuri"
            class="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
          />
          <button
            class="absolute right-0 top-0 mt-2 mr-4 text-gray-400 hover:text-gray-600 focus:outline-none"
            @click="clearSearch"
          >
            <i data-feather="x"></i>
          </button>
          <button
            class="absolute right-0 top-0 mt-2 mr-10 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <i data-feather="search"></i>
          </button>
        </div>
      </div>
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
    mounted() {
      // Initialize Feather icons
      this.$nextTick(() => {
        feather.replace()
      })
    },
    methods: {
      clearSearch() {
        // Add your search clearing logic here
      }
    }
  };
  </script>
  