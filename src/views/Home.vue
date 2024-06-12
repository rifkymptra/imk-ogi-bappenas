<template>
  <div id="app">
    <Header />
    <!-- Hero -->
    <div
      id="hero"
      class="container mx-auto max-w-5xl text-center relative z-20"
    >
      <div class="h-[calc(30vh)]"></div>
      <h3 class="text-sm mb-6 text-neutral-2">
        Mewujudkan Pemerintahan Terbuka dan Inovatif Bersama Rakyat
      </h3>
      <h1 class="text-primary-2 font-bold text-7xl mb-8">
        Open Government Indonesia
      </h1>
      <h3 class="font-bold text-xl">
        Bersama Open Government Indonesia (OGI), kami berkomitmen menciptakan
        solusi inovatif melalui kolaborasi antara pemerintah, masyarakat sipil,
        akademisi, dan mitra pembangunan untuk masa depan yang lebih transparan
        dan partisipatif.
      </h3>
      <a href="#" class="">
        <button
          class="bg-primary-1 hover:bg-primary-2 text-white font-semibold py-2 px-6 rounded-full shadow-sm transition duration-300 shadow-primary-1 group mt-4 cursor-pointer relative"
        >
          Cari Tahu Lebih Lanjut
          <i
            data-feather="arrow-right"
            class="bg-primary-1 text-white inline transition-all group-hover:bg-primary-2 group-hover:translate-x-1"
          ></i>
        </button>
      </a>
    </div>

    <div class="z-0">
      <div
        class="flex justify-start items-start absolute top-[-5.5rem] -left-40 w-2/3"
      >
        <img src="../assets/grafik-home-1.png" alt="" class="w-1/2" />
      </div>
      <div class="flex flex-row justify-end absolute top-36 -right-56 w-3/4">
        <img src="../assets/grafik-home-2.png" alt="" class="w-1/2" />
      </div>
    </div>

    <!-- RAN Card -->
    <RanCard />

    <!-- Tim Pengarah -->
    <div class="container mx-auto py-12 text-center max-w-5xl">
      <h2 class="text-5xl font-bold mb-4">
        Siapa <span class="text-primary-1">tim pengarah</span> OGI? 👀
      </h2>
      <p class="text-lg mb-8">
        Tim Pengarah OGI memberikan arahan strategis untuk mendorong
        pemerintahan yang transparan dan partisipatif melalui kolaborasi antara
        pemerintah, masyarakat sipil, akademisi, dan mitra pembangunan.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <LogoCard
          description="Kantor Staf Wakil Presiden"
          logoSrc="logo-ksp.png"
        />
        <LogoCard
          description="Kementrian Luar Negeri"
          logoSrc="logo-kemlu.png"
        />
        <LogoCard
          description="Badan Perencanaan Pembagunan Nasional"
          logoSrc="logo-bappenas.png"
        />
        <LogoCard
          description="Kementrian Dalam Negeri"
          logoSrc="logo-kemdagri.png"
        />
        <LogoCard
          description="Kementrian Komunikasi dan Informatika RI"
          logoSrc="logo-kominfo.png"
        />
        <LogoCard
          description="International NGO Forum on Indonesian Development"
          logoSrc="logo-imfid.png"
        />
        <LogoCard description="Komisi Informasi Pusat" logoSrc="logo-KIP.png" />
        <LogoCard description="Kementrian PANRB" logoSrc="logo-panrb.png" />
      </div>
    </div>

    <!-- Partner Slider -->
    <PartnerSlider />

    <!-- Gov Slider -->
    <GovSlider />

    <!-- Social Media -->
    <div class="py-12">
      <div class="text-center mb-12">
        <h2 class="text-[3.5rem] font-bold text-neutral-1">
          Ikuti jejak sosial kami
        </h2>
      </div>
      <div class="flex justify-center space-x-12">
        <!-- Facebook Card -->
        <div
          class="bg-white rounded-2xl p-6 text-center w-96 drop-shadow-xl max-h-[390px] overflow-hidden border-2"
        >
          <div
            class="flex justify-center items-center mb-4 bg-red-100 rounded-full w-24 h-24 mx-auto"
          >
            <i data-feather="facebook" class="h-12 w-12 text-primary-1"></i>
          </div>
          <h3 class="text-lg font-bold text-neutral-1">Facebook</h3>
          <a href="#" class="link-hover text-sm text-primary-1"
            >Lihat Profil ➔</a
          >
          <div class="flex justify-center -space-x-4 mt-8">
            <div
              class="transform transition-transform hover:-translate-y-1 z-0 pt-16"
            >
              <img
                src="../assets/fb-2.jpg"
                alt="Facebook-2"
                class="w-92 -rotate-6 rounded-lg"
              />
            </div>
            <div
              class="transform transition-transform hover:-translate-y-1 z-10"
            >
              <img
                src="../assets/fb-1.jpg"
                alt="Facebook-1"
                class="w-92 rounded-lg mt-6"
              />
            </div>
            <div
              class="transform transition-transform hover:-translate-y-1 z-0 pt-16"
            >
              <img
                src="../assets/fb-3.jpg"
                alt="Facebook-3"
                class="w-92 rotate-12 rounded-lg"
              />
            </div>
          </div>
        </div>
        <!-- Twitter Card -->
        <div
          class="bg-white rounded-2xl drop-shadow-xl p-6 text-center w-96 max-h-[390px] overflow-hidden border-2"
        >
          <div
            class="flex justify-center items-center mb-4 bg-red-100 rounded-full w-24 h-24 mx-auto"
          >
            <img
              src="../assets/x-twitter.png"
              class="h-20 w-20 text-primary-1"
              alt="twitter"
            />
          </div>
          <h3 class="text-lg font-bold text-neutral-1">Twitter</h3>
          <a href="#" class="link-hover text-sm text-primary-1"
            >Lihat Profil ➔</a
          >
          <div>
            <img
              src="../assets/tw-1.png"
              alt="twitter-1"
              class="drop-shadow-xl rounded-xl -rotate-3 mt-2 max-h-16 ml-4 hover:-translate-y-1"
            />
            <img
              src="../assets/tw-2.png"
              alt="twitter-2"
              class="drop-shadow-xl rounded-xl mt-4 max-h-20 ml-6 w-72 hover:-translate-y-1"
            />
            <img
              src="../assets/tw-3.png"
              alt="twitter-3"
              class="drop-shadow-xl rounded-xl -rotate-3 mt-4 max-h-24 ml-6 w-72 hover:-translate-y-1"
            />
          </div>
        </div>
        <!-- Instagram Card -->
        <div
          class="bg-white rounded-2xl drop-shadow-xl p-6 text-center w-96 max-h-[390px] overflow-hidden border-2"
        >
          <div
            class="flex justify-center items-center mb-4 bg-red-100 rounded-full w-24 h-24 mx-auto"
          >
            <i data-feather="instagram" class="h-12 w-12 text-primary-1"></i>
          </div>
          <h3 class="text-lg font-bold text-neutral-1">Instagram</h3>
          <a href="#" class="link-hover text-sm text-primary-1"
            >Lihat Profil ➔</a
          >
          <div class="flex justify-center -space-x-4 mt-8">
            <div
              class="transform transition-transform hover:-translate-y-1 z-0 pt-16"
            >
              <img
                src="../assets/ig-1.jpg"
                alt="Instagram-2"
                class="w-92 -rotate-6 rounded-lg"
              />
            </div>
            <div
              class="transform transition-transform hover:-translate-y-1 z-10"
            >
              <img
                src="../assets/ig-2.jpg"
                alt="Instagram-1"
                class="w-92 rounded-lg mt-6"
              />
            </div>
            <div
              class="transform transition-transform hover:-translate-y-1 z-0 pt-16"
            >
              <img
                src="../assets/ig-3.jpg"
                alt="Instagram-3"
                class="w-92 rotate-12 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />

    <ScrollButton />

    <!-- <div class="h-[calc(100vh*2)]"></div> -->
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LogoCard from "../components/LogoCard.vue";
import PartnerSlider from "../components/PartnerSlider.vue";
import GovSlider from "../components/GovSlider.vue";
import RanCard from "../components/RanCard.vue";
import ScrollButton from "../components/ScrollButton.vue";

export default {
  components: {
    Header,
    Footer,
    LogoCard,
    PartnerSlider,
    GovSlider,
    RanCard,
    ScrollButton,
  },

  data() {
    return {
      logoSrc: "logo-ksp.png",
    };
  },
};
</script>