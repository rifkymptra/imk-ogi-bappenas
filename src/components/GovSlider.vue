<template>
  <div
    class="partner-slider bg-neutral-5/25 my-12 text-center text-white py-12 rounded-3xl relative mx-12 overflow-hidden"
  >
    <h2 class="text-[3.5rem] font-bold text-neutral-1">
      Selain mitra masyarakat,
    </h2>
    <h2 class="text-[3.5rem] font-bold text-neutral-1 mb-4">
      Ada juga <span class="text-red-500">mitra pemerintah</span> OGI
    </h2>
    <p class="text-lg mb-6 max-w-3xl mx-auto text-neutral-1">
      Mitra pemerintah OGI adalah kolaborator dari elemen pemerintah, masyarakat
      sipil, akademisi, dan mitra pembangunan untuk mendorong partisipasi publik
      dan menciptakan pemerintahan yang transparan dan akuntabel.
    </p>
    <div class="overflow-hidden relative mx-auto max-w-full z-10">
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(group, index) in chunkedPartners"
          :key="index"
          class="flex-shrink-0 flex w-full justify-around px-16"
        >
          <div
            v-for="(partner, i) in group"
            :key="i"
            class="flex justify-center items-center bg-white h-44 w-44 rounded-3xl p-6"
          >
            <img
              :src="partner.logo"
              alt=""
              class="max-h-fit flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-between absolute inset-y-2/3 w-full px-4 transform -translate-y-1/2 z-20"
    >
      <button
        @click="prevSlide"
        class="focus:outline-none bg-primary-1 h-11 w-11 rounded-2xl items-center justify-center flex shadow-md shadow-primary-1"
      >
        <svg data-feather="arrow-left" class="h-6 w-6"></svg>
      </button>
      <button
        @click="nextSlide"
        class="focus:outline-none bg-primary-1 h-11 w-11 rounded-2xl items-center justify-center flex shadow-md shadow-primary-1"
      >
        <i data-feather="arrow-right" class="h-6 w-6"></i>
      </button>
    </div>
    <div class="flex justify-center mt-8 mb-8 space-x-2">
      <span
        v-for="(group, index) in chunkedPartners"
        :key="index"
        :class="{
          'bg-primary-1': index === currentSlide,
          'bg-neutral-2': index !== currentSlide,
        }"
        class="h-[10px] w-[10px] rounded-full cursor-pointer"
        @click="setSlide(index)"
      ></span>
    </div>
    <img
      src="../assets/grafik-home-1.png"
      alt=""
      class="absolute -bottom-32 -left-24 w-64 z-0"
    />
    <img
      src="../assets/grafik-home-4.png"
      alt=""
      class="absolute -top-24 -right-40 w-76 z-0"
    />
  </div>
</template>
  
  <script>
import pemerintah from "@/assets/pemerintah.png";
import pemerintah1 from "@/assets/pemerintah1.png";
import pemerintah2 from "@/assets/pemerintah2.png";
import pemerintah3 from "@/assets/pemerintah3.png";
import pemerintah4 from "@/assets/pemerintah4.png";
import pemerintah5 from "@/assets/pemerintah5.png";
import pemerintah7 from "@/assets/pemerintah7.png";
import pemerintah8 from "@/assets/pemerintah8.png";
import pemerintah9 from "@/assets/pemerintah9.png";
import pemerintah10 from "@/assets/pemerintah10.png";
import newkl1 from "@/assets/newkl1.png";
import newkl2 from "@/assets/newkl2.png";
import newkl3 from "@/assets/newkl3.png";
import newkl4 from "@/assets/newkl4.png";
import newkl5 from "@/assets/newkl5.png";
import newkl6 from "@/assets/newkl6.png";
import newkl7 from "@/assets/newkl7.png";
import newkl8 from "@/assets/newkl8.png";
import newkl9 from "@/assets/newkl9.png";
import newkl10 from "@/assets/newkl10.png";

export default {
  data() {
    return {
      currentSlide: 0,
      partners: [
        { logo: pemerintah, name: "Pemerintah 1" },
        { logo: pemerintah1, name: "Pemerintah 2" },
        { logo: pemerintah2, name: "Pemerintah 3" },
        { logo: pemerintah3, name: "Pemerintah 4" },
        { logo: pemerintah4, name: "Pemerintah 5" },
        { logo: pemerintah5, name: "Pemerintah 6" },
        { logo: pemerintah7, name: "Pemerintah 8" },
        { logo: pemerintah8, name: "Pemerintah 9" },
        { logo: pemerintah9, name: "Pemerintah 10" },
        { logo: pemerintah10, name: "Pemerintah 11" },
        { logo: newkl1, name: "KL 1" },
        { logo: newkl2, name: "KL 2" },
        { logo: newkl3, name: "KL 3" },
        { logo: newkl4, name: "KL 4" },
        { logo: newkl5, name: "KL 5" },
        { logo: newkl6, name: "KL 6" },
        { logo: newkl7, name: "KL 7" },
        { logo: newkl8, name: "KL 8" },
        { logo: newkl9, name: "KL 9" },
        { logo: newkl10, name: "KL 10" },
      ],
      autoSlideInterval: null,
    };
  },
  computed: {
    chunkedPartners() {
      const chunkSize = 5;
      return Array.from(
        { length: Math.ceil(this.partners.length / chunkSize) },
        (v, i) => this.partners.slice(i * chunkSize, i * chunkSize + chunkSize)
      );
    },
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.chunkedPartners.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide + this.chunkedPartners.length - 1) %
        this.chunkedPartners.length;
    },
    setSlide(index) {
      this.currentSlide = index;
    },
    autoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    clearAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
  },
  mounted() {
    this.autoSlide();
  },
  beforeDestroy() {
    this.clearAutoSlide();
  },
};
</script>
  
  <style scoped>
/* Tidak perlu menambahkan gaya di sini karena semuanya menggunakan Tailwind CSS */
</style>
  