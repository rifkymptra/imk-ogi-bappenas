<template>
  <div
    class="partner-slider bg-neutral-1 text-center text-white py-12 rounded-3xl relative overflow-hidden mx-4 sm:mx-8 md:mx-12"
  >
    <h2 class="text-3xl md:text-[3.5rem] font-bold mb-4">
      Kenali <span class="text-red-500">mitra masyarakat</span> OGI
    </h2>
    <p class="text-base md:text-lg mb-6 max-w-3xl mx-auto">
      Mitra masyarakat OGI berkomitmen mendorong partisipasi publik untuk
      menciptakan pemerintahan yang lebih transparan dan akuntabel.
    </p>
    <div class="overflow-hidden relative mx-auto max-w-full lg:max-w-5xl z-10">
      <div
        class="flex transition-transform duration-300"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(group, index) in chunkedPartners"
          :key="index"
          class="flex-shrink-0 w-full"
        >
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4 justify-center"
          >
            <div
              v-for="(partner, i) in group.slice(0, 6)"
              :key="i"
              class="flex justify-center items-center bg-white text-center px-2 mx-2 rounded-md"
            >
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="h-20 w-20 pt-4 mb-4"
              />
            </div>
          </div>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center"
          >
            <div
              class="col-start-1 sm:col-start-2 md:col-start-2 lg:col-start-2 col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              <div
                v-for="(partner, i) in group.slice(6, 10)"
                :key="i"
                class="flex justify-center items-center bg-white text-center px-2 mx-2 rounded-md mb-4"
              >
                <img
                  :src="partner.logo"
                  :alt="partner.name"
                  class="h-20 w-20 pt-4 mb-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-between absolute inset-y-1/2 w-full px-4 transform -translate-y-1/2 z-20"
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
      src="@/assets/grafik-home-3.png"
      alt=""
      class="absolute -bottom-36 -left-36 w-1/4 z-0"
    />
    <img
      src="@/assets/grafik-home-3.png"
      alt=""
      class="absolute -bottom-36 -right-36 w-1/4 z-0"
    />
  </div>
</template>
<script>
import cso1 from "@/assets/cso1.png";
import cso2 from "@/assets/cso2.png";
import cso3 from "@/assets/cso3.png";
import cso4 from "@/assets/cso4.png";
import cso5 from "@/assets/cso5.png";
import cso6 from "@/assets/cso6.png";
import cso7 from "@/assets/cso7.png";
import cso8 from "@/assets/cso8.png";
import cso9 from "@/assets/cso9.png";
import cso10 from "@/assets/cso10.png";
import cso11 from "@/assets/cso11.png";
import cso12 from "@/assets/cso12.png";
import cso13 from "@/assets/cso13.png";
import cso14 from "@/assets/cso14.png";
import cso15 from "@/assets/cso15.png";
import cso16 from "@/assets/cso16.jpg";
import cso17 from "@/assets/cso17.png";
import cso18 from "@/assets/cso18.jpg";
import cso19 from "@/assets/cso19.png";
import cso20 from "@/assets/cso20.png";

export default {
  data() {
    return {
      currentSlide: 0,
      partners: [
        { logo: cso1, name: "Partner 1" },
        { logo: cso2, name: "Partner 2" },
        { logo: cso3, name: "Partner 3" },
        { logo: cso4, name: "Partner 4" },
        { logo: cso5, name: "Partner 5" },
        { logo: cso6, name: "Partner 6" },
        { logo: cso7, name: "Partner 7" },
        { logo: cso8, name: "Partner 8" },
        { logo: cso9, name: "Partner 9" },
        { logo: cso10, name: "Partner 10" },
        { logo: cso11, name: "Partner 11" },
        { logo: cso12, name: "Partner 12" },
        { logo: cso13, name: "Partner 13" },
        { logo: cso14, name: "Partner 14" },
        { logo: cso15, name: "Partner 15" },
        { logo: cso16, name: "Partner 16" },
        { logo: cso17, name: "Partner 17" },
        { logo: cso18, name: "Partner 18" },
        { logo: cso19, name: "Partner 19" },
        { logo: cso20, name: "Partner 20" },
        // { logo: "cso20.png", name: "Partner 21" },
        // { logo: "cso21.png", name: "Partner 22" },
      ],
      interval: null,
    };
  },
  computed: {
    chunkedPartners() {
      const chunkSize = 10;
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
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoSlide() {
      clearInterval(this.interval);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
};
</script>
