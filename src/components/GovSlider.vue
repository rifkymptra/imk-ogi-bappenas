
<template>
  <div
    class="partner-slider bg-neutral-5/25 my-12 text-center text-white py-12 rounded-3xl relative"
  >
    <h2 class="text-[56px] font-bold text-neutral-1">
      Selain mitra masyarakat,
    </h2>
    <h2 class="text-[56px] font-bold text-neutral-1 mb-4">
      Ada juga <span class="text-red-500">mitra pemerintah</span> OGI
    </h2>
    <p class="text-lg mb-6 max-w-3xl mx-auto text-neutral-1">
      Mitra pemerintah OGI adalah kolaborator dari elemen pemerintah, masyarakat
      sipil, akademisi, dan mitra pembangunan untuk mendorong partisipasi publik
      dan menciptakan pemerintahan yang transparan dan akuntabel.
    </p>
    <div class="overflow-hidden relative mx-auto max-w-full">
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(group, index) in chunkedPartners"
          :key="index"
          class="flex-shrink-0 flex w-full justify-around"
        >
          <div
            v-for="(partner, i) in group"
            :key="i"
            class="flex justify-center"
          >
            <img
              :src="`/src/assets/${partner.logo}`"
              alt=""
              class="h-20 w-20 mb-4"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-between absolute inset-y-1/2 w-full px-4 transform -translate-y-1/2"
    >
      <button @click="prevSlide" class="text-4xl text-white focus:outline-none">
        &#10094;
      </button>
      <button @click="nextSlide" class="text-4xl text-white focus:outline-none">
        &#10095;
      </button>
    </div>
    <div class="flex justify-center mt-4 space-x-2">
      <span
        v-for="(group, index) in chunkedPartners"
        :key="index"
        :class="{
          'bg-white': index === currentSlide,
          'bg-gray-500': index !== currentSlide,
        }"
        class="h-3 w-3 rounded-full cursor-pointer"
        @click="setSlide(index)"
      ></span>
    </div>
    <img
      src="../assets/dekorasi-kiri.png"
      alt=""
      class="absolute bottom-0 left-0 w-32"
    />
    <img
      src="../assets/dekorasi-kanan.png"
      alt=""
      class="absolute top-0 right-0 w-32"
    />
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      currentSlide: 0,
      partners: [
        { logo: "pemerintah.png", name: "Pemerintah 1" },
        { logo: "pemerintah1.png", name: "Pemerintah 2" },
        { logo: "pemerintah2.png", name: "Pemerintah 3" },
        { logo: "pemerintah3.png", name: "Pemerintah 4" },
        { logo: "pemerintah4.png", name: "Pemerintah 5" },
        { logo: "pemerintah5.png", name: "Pemerintah 6" },
        { logo: "pemerintah7.png", name: "Pemerintah 8" },
        { logo: "pemerintah8.png", name: "Pemerintah 9" },
        { logo: "pemerintah9.png", name: "Pemerintah 10" },
        { logo: "pemerintah10.png", name: "Pemerintah 11" },
        { logo: "newkl1.png", name: "KL 1" },
        { logo: "newkl2.png", name: "KL 2" },
        { logo: "newkl3.png", name: "KL 3" },
        { logo: "newkl4.png", name: "KL 4" },
        { logo: "newkl5.png", name: "KL 5" },
        { logo: "newkl6.png", name: "KL 6" },
        { logo: "newkl7.png", name: "KL 7" },
        { logo: "newkl8.png", name: "KL 8" },
        { logo: "newkl9.png", name: "KL 9" },
        { logo: "newkl10.png", name: "KL 10" },
      ],
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
  },
};
</script>
  
  <style scoped>
/* Tidak perlu menambahkan gaya di sini karena semuanya menggunakan Tailwind CSS */
</style>
  