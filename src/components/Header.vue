<template>
  <header class="bg-white border-b font-jakarta fixed w-full top-0 z-50">
    <div
      class="container mx-auto px-4 flex items-center justify-between flex-wrap md:flex-nowrap"
    >
      <a href="/" class="flex items-center space-x-4">
        <img
          src="../assets/Logo_Original.svg"
          alt="Logo"
          class="h-12 md:h-20"
        />
      </a>
      <nav
        :class="{ hidden: !mobileMenuOpen, flex: mobileMenuOpen }"
        class="hidden md:flex space-x-4 items-center w-full md:w-auto mt-4 md:mt-0 flex-col md:flex-row"
      >
        <a href="/" class="text-gray-800 font-semibold hover:text-primary-1"
          >Beranda</a
        >
        <div class="relative group">
          <a
            href="/ran"
            class="text-gray-800 font-semibold flex items-center group"
          >
            <span class="block md:hidden hover:text-primary-1">RAN</span>
            <span class="hidden md:block hover:text-primary-1"
              >Rencana Aksi Nasional</span
            >
            <img
              src="../assets/chevron-down.svg"
              alt="Dropdown"
              class="ml-1 w-4 h-4 transition-transform ease-in-out duration-300 group-hover:rotate-180"
            />
          </a>
          <div
            class="absolute hidden group-hover:block bg-white shadow-lg py-2 w-48"
          >
            <a
              href="/ran/dokumen-dan-publikasi-data"
              class="block px-4 py-2 hover:bg-gray-100"
              >Dokumen dan Publikasi Data</a
            >
            <a
              href="/ran/monitoring-dan-evaluasi"
              class="block px-4 py-2 hover:bg-gray-100"
              >Monitoring dan Evaluasi</a
            >
            <a href="/ran/komitmen" class="block px-4 py-2 hover:bg-gray-100"
              >Komitmen RAN OGI VII</a
            >
          </div>
        </div>
        <div class="relative group">
          <a
            href="/publikasi"
            class="text-gray-800 font-semibold flex items-center group hover:text-primary-1"
          >
            Publikasi
            <img
              src="../assets/chevron-down.svg"
              alt="Dropdown"
              class="ml-1 w-4 h-4 transition-transform ease-in-out duration-300 group-hover:rotate-180"
            />
          </a>
          <div
            class="absolute hidden group-hover:block bg-white shadow-lg py-2 w-48"
          >
            <a
              href="/publikasi/ogi-news"
              class="block px-4 py-2 hover:bg-gray-100"
              >OGI News</a
            >
            <a
              href="/publikasi/infografis"
              class="block px-4 py-2 hover:bg-gray-100"
              >Infografik</a
            >
            <a
              href="/publikasi/laporan-dan-kajian"
              class="block px-4 py-2 hover:bg-gray-100"
              >Laporan dan Kajian</a
            >
            <a href="/publikasi/irm" class="block px-4 py-2 hover:bg-gray-100"
              >IRM</a
            >
          </div>
        </div>
        <div class="relative group">
          <a
            href="/pelajari"
            class="text-gray-800 font-semibold flex items-center group hover:text-primary-1"
          >
            Pelajari
            <img
              src="../assets/chevron-down.svg"
              alt="Dropdown"
              class="ml-1 w-4 h-4 transition-transform ease-in-out duration-300 group-hover:rotate-180"
            />
          </a>
          <div
            class="absolute hidden group-hover:block bg-white shadow-lg py-2 w-48"
          >
            <a
              href="/pelajari/perjalanan"
              class="block px-4 py-2 hover:bg-gray-100"
              >Tentang Kami</a
            >
            <a
              href="/pelajari/sekretariat"
              class="block px-4 py-2 hover:bg-gray-100"
              >Sekretariat Kami</a
            >
            <a
              href="/pelajari/kegiatan"
              class="block px-4 py-2 hover:bg-gray-100"
              >Kegiatan Kami</a
            >
            <a
              href="/pelajari/karir"
              class="block px-4 py-2 hover:bg-gray-100 hover:text-primary-1"
              >Karir</a
            >
          </div>
        </div>
      </nav>
      <div class="flex items-center space-x-4 mt-4 md:mt-0 relative z-50">
        <button class="text-gray-800" @click="toggleSearch">
          <img src="../assets/search.svg" alt="Search" class="h-6 w-6" />
        </button>
        <button class="flag text-gray-800 relative" @click="toggleMenu">
          <span class="flex items-center">
            <img
              src="../assets/indonesia.png"
              alt=""
              class="h-4 w-6 border border-black inline"
            />
            <img
              src="../assets/chevron-down.svg"
              alt="Dropdown"
              :class="{ 'rotate-180': showMenu }"
              class="ml-1 w-4 h-4 transition-transform ease-in-out duration-300"
            />
          </span>
        </button>
        <div
          class="absolute bg-white shadow-lg pt-2 mt-12 md:mt-40"
          v-if="showMenu"
          ref="menu"
        >
          <a
            href="#"
            class="flex justify-center items-center gap-2 hover:bg-gray-100 py-2 w-20"
          >
            <img
              src="../assets/indonesia.png"
              alt="Bahasa Indonesia"
              class="h-4 w-6 border border-black"
            />
            <p class="block text-sm font-bold">ID</p>
          </a>
          <a
            href="#"
            class="flex items-center gap-2 hover:bg-gray-100 py-2 w-20 justify-center"
          >
            <img
              src="../assets/english.png"
              alt="English"
              class="h-4 w-6 border border-black"
            />
            <p class="block text-sm font-bold">EN</p>
          </a>
        </div>
        <button
          @click="toggleMobileMenu"
          class="block md:hidden text-gray-800 z-50 transition-transform ease-in-out duration-300"
        >
          <img
            :src="
              mobileMenuOpen ? '/src/assets/close.svg' : '/src/assets/menu.svg'
            "
            alt="Menu"
            class="h-6 w-6"
          />
        </button>
      </div>
    </div>
  </header>

  <div>
    <div
      class="w-full search-bar-overlay max-w-screen-2xl fixed bottom-0 right-0 z-50 bg-neutral-5/50 py-16 flex justify-center items-center h-[88vh]"
      v-if="showSearchBar"
    >
      <input
        type="text"
        placeholder="Cari Dokumen RAN OGI..."
        class="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 mx-24"
        v-model="searchQuery"
        @keyup.enter="searchDocuments"
      />
      <button
        v-if="searchQuery"
        class="absolute right-10 top-1/2 transform -translate-y-1/2 text-red-400 hover:text-red-600 focus:outline-none mx-24"
        @click="clearSearch"
      >
        <i data-feather="x"></i>
      </button>
      <button
        class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none mx-24"
        @click="searchDocuments"
      >
        <i data-feather="search"></i>
      </button>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      showMenu: false,
      mobileMenuOpen: false,
      showSearchBar: false,
      searchQuery: "",
    };
  },
  watch: {
    searchQuery() {
      this.updateFeatherIcons();
    },
  },
  mounted() {
    this.updateFeatherIcons();
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      if (this.showMenu) {
        document.addEventListener("click", this.closeMenu);
      } else {
        document.removeEventListener("click", this.closeMenu);
      }
    },
    closeMenu(event) {
      if (
        !this.$refs.menu.contains(event.target) &&
        !this.$refs.toggleButton.contains(event.target)
      ) {
        this.showMenu = false;
        document.removeEventListener("click", this.closeMenu);
      }
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    toggleSearch() {
      this.showSearchBar = !this.showSearchBar;
    },
    clearSearch() {
      this.searchQuery = "";
    },
    updateFeatherIcons() {
      this.$nextTick(() => {
        this.$feather.replace();
      });
    },
    searchDocuments() {
      if (this.searchQuery) {
        this.$router.push({
          path: "/ran/dokumen-dan-publikasi-data",
          query: { search: this.searchQuery },
        });
        this.showSearchBar = false;
      }
    },
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeMenu);
  },
};
</script>


<style>
.search-bar-overlay {
  position: fixed;
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>
