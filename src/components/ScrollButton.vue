<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 bg-primary-1 text-white p-3 rounded-2xl shadow-lg hover:bg-primary-2 transition duration-300"
  >
    <i class="feather" v-html="iconArrowUp"></i>
  </button>
</template>
  
  <script>
import feather from "feather-icons";

export default {
  data() {
    return {
      isVisible: false,
      iconArrowUp: feather.icons["arrow-up"].toSvg(),
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      this.isVisible = window.scrollY > 200;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
  
  <style scoped>
/* Tambahkan style tambahan jika diperlukan */
</style>
  