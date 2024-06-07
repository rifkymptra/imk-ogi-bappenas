<script>
import feather from "feather-icons";
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
  mounted() {
    feather.replace();
  },
};
</script>

<template>
  <header
    class="bg-white border-b font-jakarta fixed w-full top-0"
    style="z-index: 1"
  >
    <div class="container mx-auto px-4 flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <img src="../assets/logo.png" alt="Logo" class="h-20" />
      </div>
      <nav class="flex space-x-4">
        <a href="#" class="text-gray-800 font-semibold">Beranda</a>
        <div class="relative group">
          <a href="#" class="text-gray-800 font-semibold group"
            >Rencana Aksi Nasional
            <i
              data-feather="chevron-down"
              class="bg-white mr-1 w-4 h-4 transition-transform ease-in-out duration-300 group-hover:rotate-180 inline"
            ></i>
          </a>
          <div
            class="absolute hidden group-hover:block bg-white shadow-lg py-2"
          >
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Submenu 1</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Submenu 2</a>
          </div>
        </div>
        <div class="relative group">
          <a href="#" class="text-gray-800 font-semibold group"
            >Publikasi
            <i
              data-feather="chevron-down"
              class="bg-white mr-1 w-4 h-4 transition-transform ease-in-out duration-300 group-hover:rotate-180 inline"
            ></i>
          </a>
          <div
            class="absolute hidden group-hover:block bg-white shadow-lg py-2"
          >
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Submenu 1</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Submenu 2</a>
          </div>
        </div>
        <div class="relative group">
          <a href="#" class="text-gray-800 font-semibold group"
            >Pelajari
            <i
              data-feather="chevron-down"
              class="bg-white mr-1 w-4 h-4 transition-transform ease-in-out duration-300 group-hover:rotate-180 inline"
            ></i>
          </a>
          <div
            class="absolute hidden group-hover:block bg-white shadow-lg py-2"
          >
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Submenu 1</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Submenu 2</a>
          </div>
        </div>
      </nav>
      <div class="flex items-center space-x-4">
        <button class="text-gray-800">
          <i data-feather="search" class="bg-white text-red-500 h-6 w-6"></i>
        </button>
        <button class="flag text-gray-800" @click="toggleMenu">
          <span class="flex items-center">
            <img
              src="../assets/indonesia.png"
              alt=""
              class="h-4 w-6 border border-black inline"
            />
            <i
              data-feather="chevron-down"
              class="bg-white mr-1 w-4 h-4 transition-transform ease-in-out duration-300 group-hover:rotate-180 inline"
            ></i>
          </span>
        </button>
        <div class="absolute bg-white shadow-lg py-2 mt-40" v-if="showMenu">
          <a href="#" class="flex items-center gap-2 hover:bg-gray-100">
            <img
              src="../assets/indonesia.png"
              alt="Bahasa Indonesia"
              class="h-4 w-6 ml-1 border border-black"
            />
            <p class="block px-2 py-2 text-sm font-bold">ID</p>
          </a>
          <a href="#" class="flex items-center gap-2 hover:bg-gray-100">
            <img
              src="../assets/english.png"
              alt="English"
              class="h-4 w-6 ml-1 border border-black"
            />
            <p class="block px-2 py-2 text-sm font-bold">EN</p>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

