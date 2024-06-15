<template>
  <div id="app">
    <!-- Header Navbar -->
    <Header />

    <!-- Title Section -->
    <div class="h-[calc(5vh)]"></div>
    <TitleSection
      link="/publikasi"
      linkText="PUBLIKASI OGI"
      heading="OGI "
      subheading1="News"
      :headingPrimary="false"
      :subheading1Primary="true"
    />

    <!-- Search Bar -->
    <div class="container mx-auto flex justify-center mt-5 px-4">
      <SearchBar placeholder="Telusuri" customClasses="" maxWidth="1166px" />
    </div>
    <div class="h-[calc(5vh)]"></div>

    <!-- Main Content -->
    <div class="container mx-auto justify-center flex px-4">
      <div class="w-full max-w-[1166px] flex">
        <!-- Filter Section -->
        <div class="w-1/4">
          <div class="p-4 bg-white shadow rounded-lg">
            <h3 class="font-inter font-semibold text-[12px] mb-2">Urutkan Berdasarkan</h3>
            <div class="flex space-x-0.3 mb-4 rounded-full p-0.5">
              <button
                @click="setSortCriteria('relevance')"
                :class="{
                  'bg-primary-1 text-white': sortCriteria === 'relevance',
                  'bg-gray-200 text-neutral-3': sortCriteria !== 'relevance'
                }"
                class="w-[90px] h-[32px] font-inter font-medium text-[11px] rounded-l-[15px] hover:bg-primary-3 hover:text-white focus:outline-none"
              >
                Relevansi
              </button>
              <button
                @click="setSortCriteria('latest')"
                :class="{
                  'bg-primary-1 text-white': sortCriteria === 'latest',
                  'bg-gray-200 text-neutral-3': sortCriteria !== 'latest'
                }"
                class="w-[79px] h-[32px] font-inter font-medium text-[11px] hover:bg-primary-3 hover:text-white focus:outline-none"
              >
                Terbaru
              </button>
              <button
                @click="setSortCriteria('mostRead')"
                :class="{
                  'bg-primary-1 text-white': sortCriteria === 'mostRead',
                  'bg-gray-200 text-neutral-3': sortCriteria !== 'mostRead'
                }"
                class="w-[170px] h-[32px] font-inter font-medium text-[11px] rounded-r-[15px] hover:bg-primary-3 hover:text-white focus:outline-none"
              >
                Paling Banyak Dibaca
              </button>
            </div>
            <h3 class="font-inter font-semibold text-[12px] mb-2">Kategori Berita</h3>
            <div class="relative w-full">
              <select v-model="selectedCategory" class="w-full px-4 py-2 border rounded-lg pr-10 appearance-none">
                <option>Semua</option>
                <option>RAN</option>
                <!-- Add other options as needed -->
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
                <i data-feather="chevron-down"></i>
              </div>
              <button
                v-if="selectedCategory !== 'Semua'"
                @click="clearCategory"
                class="absolute right-10 top-1/2 transform -translate-y-1/2 text-primary-1 hover:text-primary-4"
              >
                <i data-feather="x" class="icon-clear-category"></i>
              </button>
            </div>
            <h3 class="font-inter font-semibold text-[12px] mb-3 mt-4">Tahun</h3>
            <Slider
              v-model="yearRange"
              :min="2013"
              :max="2024"
              :tooltips="true"
              showTooltip="drag"
              class="custom-slider"
            />
            <div class="flex justify-between text-sm mt-4">
              <input type="number" v-model.number="yearRange[0]" class="year-input" min="2013" max="2024"/>
              <input type="number" v-model.number="yearRange[1]" class="year-input" min="2013" max="2024"/>
            </div>
            <button @click="applyFilter" class="w-full mt-4 px-4 py-2 bg-primary-1 text-white rounded-lg hover:bg-primary-3 focus:outline-none">
              Terapkan
            </button>
          </div>
        </div>

        <!-- Reports Section -->
        <div class="w-3/4 pl-4">
          <div class="space-y-4">
            <!-- Report Card -->
            <div class="p-4 bg-white shadow rounded-lg">
              <h3 class="font-inter font-semibold text-[12px] text-primary-1 mb-2">Laporan RAN</h3>
              <p class="font-inter font-bold text=[18px]">Kunjungan Sekretariat OGI ke Kabupaten Banggai dalam Rangka Pemantauan Implementasi Rencana Aksi Daerah OGP Local Banggai</p>
              <div class="flex justify-between items-center mt-2">
                <button class="w-[79px] h-[32px] font-jakarta font-bold text-[13px] bg-primary-1 text-white rounded-lg hover:bg-primary-3 focus:outline-none">Baca</button>
                <div class="text-gray-500 text-sm flex space-x-4">
                  <span><i data-feather="calendar"></i> 30 Desember 2022</span>
                  <span><i data-feather="eye"></i> 2,000</span>
                </div>
              </div>
            </div>

            <!-- Duplicate the above block for additional reports -->
            <div class="p-4 bg-white shadow rounded-lg">
              <h3 class="font-inter font-semibold text-[12px] text-primary-1 mb-2">Laporan RAN</h3>
              <p class="font-inter font-bold text=[18px]">Kunjungan Sekretariat OGI ke Kabupaten Banggai dalam Rangka Pemantauan Implementasi Rencana Aksi Daerah OGP Local Banggai</p>
              <div class="flex justify-between items-center mt-2">
                <button class="w-[79px] h-[32px] font-jakarta font-bold text-[13px] bg-primary-1 text-white rounded-lg hover:bg-primary-3 focus:outline-none">Baca</button>
                <div class="text-gray-500 text-sm flex space-x-4">
                  <span><i data-feather="calendar"></i> 30 Desember 2022</span>
                  <span><i data-feather="eye"></i> 2,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import TitleSection from "../../components/TitleSection.vue";
import SearchBar from "../../components/SearchBar.vue";
import Slider from "@vueform/slider";

export default {
  name: "Publikasi",
  components: {
    Header,
    Footer,
    TitleSection,
    SearchBar,
    Slider
  },
  data() {
    return {
      yearRange: [2013, 2024],
      sortCriteria: 'relevance', // Default sorting criteria
      selectedCategory: 'Semua' // Default selected category
    };
  },
  methods: {
    setSortCriteria(criteria) {
      this.sortCriteria = criteria;
    },
    clearCategory() {
      this.selectedCategory = 'Semua';
    },
    applyFilter() {
      console.log(`Applying filter: Sorting by ${this.sortCriteria}, Year range: ${this.yearRange}, Category: ${this.selectedCategory}`);
      // Add your filtering logic here based on sortCriteria, yearRange, and selectedCategory
    }
  },
  mounted() {
    this.$feather.replace(); // Replace <i> tags with Feather Icons on mount
  },
  updated() {
    this.$feather.replace(); // Ensure icons are updated when component re-renders
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style>
/* Custom styles for the slider */
.slider-base {
  background-color: #63666A !important; /* primary-1 */
}

.slider-connect {
  background: #AD2330 !important; /* primary-1 */
}

.slider-handle {
  background: #AD2330 !important; /* primary-1 */
  border: 2px solid white !important;
  width: 20px !important;
  height: 20px !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.slider-handle:focus {
  box-shadow: 0 0 0 3px rgba(173, 35, 48, 0.3) !important; /* primary-1 with transparency */
}

.slider-tooltip {
  background-color: #AD2330 !important; /* primary-1 */
  color: white !important;
  border: 1px solid #AD2330 !important; /* primary-1 */
  border-radius: 4px;
  padding: 5px;
}

button:focus {
  outline: none;
}

/* Styles for the clear category icon */
.icon-clear-category {
  width: 18px; /* Adjust the size as needed */
  height: 18px; /* Adjust the size as needed */
}

/* Styles for input fields */
input[type="number"] {
  border: none;
  border-bottom: 1px solid #63666A; /* Adjust color as needed */
  padding: 5px 0;
  font-size: 1rem;
  text-align: center;
  width: 80px;
  box-sizing: border-box;
}
input[type="number"]:focus {
  outline: none;
  border-bottom: 2px solid #AD2330; /* Adjust color as needed */
}
</style>
