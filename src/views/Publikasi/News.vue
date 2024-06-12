<template>
    <div id="app">
      <Header />
      <TitleSection 
      link="/publikasi" 
      linkText="PUBLIKASI OGI" 
      heading="OGI"
      subheading="News" 
      />
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
    }
  };
  </script>
  