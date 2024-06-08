<template>
  <div id="app">
    <Header />
    <!-- Hero -->
    <div
      id="hero"
      class="container mx-auto max-w-5xl text-center relative z-1000"
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
      <a href="#" class="cursor-pointer z-1000">
        <button
          class="bg-primary-1 hover:bg-primary-2 text-white font-semibold py-2 px-6 rounded-full shadow-sm transition duration-300 shadow-primary-1 group mt-4 cursor-pointer relative"
        >
          Cari Tahu Lebih Lanjut
          <i
            data-feather="arrow-right"
            class="bg-primary-1 text-white inline transition-all group-hover:bg-primary-2"
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
    <div class="bg-primary-5/10 py-12 mt-36 ml-4 mr-4 rounded-3xl">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4 text-primary-1">
          <span class="text-neutral-1">Apa itu</span> Rencana Aksi Nasional
          (RAN)?
        </h2>
        <p class="text-lg mb-6 max-w-3xl mx-auto text-neutral-1">
          Langkah nyata menuju transparansi dan partisipasi publik.
          Bersama-sama, kita wujudkan pemerintahan yang inovatif, akuntabel, dan
          inklusif!
        </p>
        <a href="#" class="cursor-pointer">
          <button
            class="bg-primary-1 hover:bg-primary-2 text-white font-semibold py-2 px-6 rounded-full shadow-sm transition duration-300 shadow-primary-1 group mt-4 cursor-pointer"
          >
            Lihat Rencana Aksi Nasional
          </button>
        </a>
      </div>
    </div>

    <!-- Tim Pengarah -->
    <div class="container mx-auto py-12 text-center max-w-5xl">
      <h2 class="text-4xl font-bold mb-4">
        Siapa <span class="text-red-500">tim pengarah</span> OGI? 👀
      </h2>
      <p class="text-lg mb-8">
        Tim Pengarah OGI memberikan arahan strategis untuk mendorong
        pemerintahan yang transparan dan partisipatif melalui kolaborasi antara
        pemerintah, masyarakat sipil, akademisi, dan mitra pembangunan.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <LogoCard description="Kantor Staf Wakil Presiden" logoSrc="logo-ksp.png" />
        <LogoCard description="Kementrian Luar Negeri" logoSrc="logo-kemlu.png" />
        <LogoCard description="Badan Perencanaan Pembagunan Nasional" logoSrc="logo-bappenas.png" />
        <LogoCard description="Kementrian Dalam Negeri" logoSrc="logo-kemdagri.png"/>
        <LogoCard description="Kementrian Komunikasi dan Informatika RI" logoSrc="logo-kominfo.png"/>
        <LogoCard description="International NGO Forum on Indonesian Development" logoSrc="logo-imfid.png"/>
        <LogoCard description="Komisi Informasi Pusat" logoSrc="logo-KIP.png"/>
        <LogoCard description="Kementrian PANRB" logoSrc="logo-panrb.png"/>
      </div>
    </div>

    <div class="h-[calc(100vh*2)]"></div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import LogoCard from "../components/LogoCard.vue";

export default {
  components: {
    Header,
    Footer,
    LogoCard,
  },

  data() {
    return {
      logoSrc: "logo-ksp.png",
    };
  },
};
</script>