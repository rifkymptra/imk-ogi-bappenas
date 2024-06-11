<template>
  <div
    class="partner-slider bg-neutral-800 text-center text-white py-12 rounded-3xl relative"
  >
    <h2 class="text-4xl font-bold mb-4">
      Kenali <span class="text-red-500">mitra masyarakat</span> OGI
    </h2>
    <p class="text-lg mb-6 max-w-3xl mx-auto">
      Mitra masyarakat OGI berkomitmen mendorong partisipasi publik untuk
      menciptakan pemerintahan yang lebih transparan dan akuntabel.
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
        { logo: "logo-partner1.png", name: "Partner 1" },
        { logo: "logo-partner2.png", name: "Partner 2" },
        { logo: "logo-partner3.png", name: "Partner 3" },
        { logo: "logo-partner4.png", name: "Partner 4" },
        { logo: "logo-partner5.png", name: "Partner 5" },
        { logo: "logo-partner6.png", name: "Partner 6" },
        { logo: "logo-partner7.png", name: "Partner 7" },
        { logo: "logo-partner8.png", name: "Partner 8" },
        { logo: "logo-partner9.png", name: "Partner 9" },
        { logo: "logo-partner10.png", name: "Partner 10" },
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
