<template>
  <button @click="navigate">
    <div
      class="bg-white border-2 rounded-lg drop-shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
    >
      <div class="flex items-center space-x-4">
        <div
          class="flex items-center justify-center h-16 w-16 bg-red-100 rounded-full"
        >
          <img :src="iconPath" alt="" class="h-8 w-8 object-cover" />
        </div>
        <h3 class="font-semibold text-lg">{{ title }}</h3>
      </div>
    </div>
  </button>
</template>

<script>
// Menggunakan require.context untuk memuat gambar
const images = require.context("@/assets", false, /\.svg$/);

export default {
  name: "InfoCard",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconPath() {
      return images(`./${this.iconClass}`).default;
    },
  },
  methods: {
    navigate() {
      window.location.href = this.link;
    },
  },
};
</script>

<style scoped>
/* Tambahkan style tambahan jika diperlukan */
</style>
