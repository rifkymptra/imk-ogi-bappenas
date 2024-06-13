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
        <InfoCard
          iconClass="/RAN/document.svg"
          title="Dokumen dan Publikasi Data"
          link="/ran/Dokumen-dan-Publikasi-Data"
        />
        <InfoCard
          iconClass="/RAN/list.svg"
          title="Monitoring dan Evaluasi"
          link="/ran/Monitoring-dan-Evaluasi"
        />
      </div>
      <div v-if="infoCards.length % 2 !== 0" class="flex justify-center mt-4">
        <InfoCard
          iconClass="/RAN/lock.svg"
          title="Komitmen RAN OGI VII"
          link="/ran/komitmen"
        />
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
  