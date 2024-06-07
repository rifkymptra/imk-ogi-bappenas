<template>
  <div id="app">
    <Header />
    <div class="container mx-auto text-center">
      <div class="h-[calc(50vh)]"></div>
      <h3 class="text-sm mb-8 text-gray-400">
        Mewujudkan Pemerintahan Terbuka dan Inovatif Bersama Rakyat
      </h3>
      <h1 class="text-primary-2 font-bold text-3xl">
        Open Government Indonesia
      </h1>
      <h3>
        Bersama Open Government Indonesia (OGI), kami berkomitmen menciptakan
        solusi inovatif melalui kolaborasi antara pemerintah, masyarakat sipil,
        akademisi, dan mitra pembangunan untuk masa depan yang lebih transparan
        dan partisipatif.
      </h3>
      <button>
        Cari Tahu Lebih Lanjut
        <i data-feather="arrow-right" class="bg-white inline"></i>
      </button>
    </div>
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