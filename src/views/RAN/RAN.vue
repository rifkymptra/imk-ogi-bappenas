<template>
  <div>
    <Header />
    <div class="container mx-auto mt-24 py-12 text-center">
      <h1 class="text-[3.5rem] font-bold mb-6">Rencana Aksi Nasional</h1>
      <p class="mb-8 max-w-[59rem] mx-auto font-inter text-xl">
        Rencana Aksi Nasional (RAN) merupakan sebuah dokumen yang menjadi inti
        pelaksanaan praktik keterbukaan pemerintah oleh Open Government
        Indonesia (OGI). RAN berisikan komitmen-komitmen hasil dari ko-kreasi
        antara K/L bersama dengan Organisasi Masyarakat Sipil (OMS). Setiap
        komitmen berisikan ukuran keberhasilan yang rinci untuk memastikan
        terlaksananya komitmen tersebut. Setiap komitmen juga mencerminkan
        nilai-nilai OGI yakni
        <span class="font-bold"
          >Transparansi, Partisipasi, Inovasi, Akuntabilitas, dan
          Inklusif.</span
        >
      </p>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto items-center"
      >
        <div v-if="infoCards.length % 2 !== 0" class="flex justify-center mt-4">
          <button @click="navigate3">
            <div
              class="bg-white border-2 rounded-lg drop-shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="flex items-center justify-center h-16 w-16 bg-red-100 rounded-full"
                >
                  <img
                    src="../../assets/RAN/document.svg"
                    alt=""
                    class="h-8 w-8 object-cover"
                  />
                </div>
                <h3 class="font-semibold text-lg">
                  Dokumen dan Publikasi Data
                </h3>
              </div>
            </div>
          </button>
        </div>
        <div v-if="infoCards.length % 2 !== 0" class="flex justify-center mt-4">
          <button @click="navigate2">
            <div
              class="bg-white border-2 rounded-lg drop-shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="flex items-center justify-center h-16 w-16 bg-red-100 rounded-full"
                >
                  <img
                    src="../../assets/RAN/list.svg"
                    alt=""
                    class="h-8 w-8 object-cover"
                  />
                </div>
                <h3 class="font-semibold text-lg">Monitoring dan Evaluasi</h3>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div v-if="infoCards.length % 2 !== 0" class="flex justify-center mt-4">
        <button @click="navigate">
          <div
            class="bg-white border-2 rounded-lg drop-shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div class="flex items-center space-x-4">
              <div
                class="flex items-center justify-center h-16 w-16 bg-red-100 rounded-full"
              >
                <img
                  src="../../assets/RAN/lock.svg"
                  alt=""
                  class="h-8 w-8 object-cover"
                />
              </div>
              <h3 class="font-semibold text-lg">Komitmen RAN OGI VII</h3>
            </div>
          </div>
        </button>
      </div>
    </div>
    <Footer />
    <ScrollButton />
  </div>
</template>
  
  <script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import InfoCard from "../../components/RAN/InfoCard.vue";
import ScrollButton from "../../components/ScrollButton.vue";

export default {
  components: {
    Header,
    Footer,
    InfoCard,
    ScrollButton,
  },

  methods: {
    navigate() {
      window.location.href = "/ran/komitmen";
    },
    navigate2() {
      window.location.href = "/ran/monitoring-dan-evaluasi";
    },
    navigate3() {
      window.location.href = "/ran/dokumen-dan-publikasi-data";
    },
  },
  data() {
    return {
      infoCards: [
        { iconClass: "cso.png", title: "Dokumen dan Publikasi Data" },
        { iconClass: "cso.png", title: "Monitoring dan Evaluasi" },
        { iconClass: "cso.png", title: "Komitmen RAN OGI VII" },
      ],
    };
  },
};
</script>
  
  <style scoped>
/* Tambahkan style tambahan jika diperlukan */
</style>
  