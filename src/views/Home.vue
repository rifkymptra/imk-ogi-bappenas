<template>
  <div id="app">
    <Header />
    <div class="h-[calc(100vh*2)]"></div>
    <Footer />
  </div>
</template>
    
  <script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>