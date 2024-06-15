<template>
  <div id="app">
    <!-- Header Navbar -->
    <Header />

    <!-- Title Section -->
    <div class="h-[calc(5vh)]"></div>
    <TitleSection
      link="/publikasi"
      linkText="PUBLIKASI OGI"
      heading="OGI"
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
    <div class="container mx-auto flex px-4">
      <!-- Filter Section -->
      <div class="w-1/4">
        <div class="p-4 bg-white shadow rounded-lg">
          <h3 class="text-lg font-semibold mb-4">Urutkan Berdasarkan</h3>
          <div class="flex space-x-2 mb-4">
            <button class="px-4 py-2 bg-primary-1 text-white rounded-full">Relevansi</button>
            <button class="px-4 py-2 bg-gray-200 rounded-full">Terbaru</button>
            <button class="px-4 py-2 bg-gray-200 rounded-full">Paling Banyak Dibaca</button>
          </div>
          <h3 class="text-lg font-semibold mb-4">Kategori Bahan Pustaka</h3>
          <select class="w-full px-4 py-2 border rounded-lg">
            <option>Semua</option>
            <!-- Add other options as needed -->
          </select>
          <h3 class="text-lg font-semibold mt-4 mb-2">Tahun</h3>
          <Slider
            v-model="yearRange"
            :min="2013"
            :max="2024"
            :tooltips="true"
            showTooltip="drag"
            class="custom-slider"
          />
          <div class="flex justify-between text-sm mt-2">
            <span>{{ yearRange[0] }}</span>
            <span>{{ yearRange[1] }}</span>
          </div>
          <button class="w-full mt-4 px-4 py-2 bg-primary-1 text-white rounded-lg">Terapkan</button>
        </div>
      </div>

      <!-- Reports Section -->
      <div class="w-3/4 pl-4">
        <div class="space-y-4">
          <!-- Report Card -->
          <div class="p-4 bg-white shadow rounded-lg">
            <h3 class="text-lg font-semibold">Laporan RAN</h3>
            <p>Laporan Pelaksanaan Rencana Aksi Nasional Keterbukaan Pemerintah 2020-2022</p>
            <div class="flex justify-between items-center mt-2">
              <button class="px-4 py-2 bg-primary-1 text-white rounded-lg">Unduh</button>
              <div class="text-gray-500 text-sm flex space-x-4">
                <span><i data-feather="calendar"></i> 30 Desember 2022</span>
                <span><i data-feather="eye"></i> 2,000</span>
              </div>
            </div>
          </div>

          <!-- Duplicate the above block for additional reports -->
          <div class="p-4 bg-white shadow rounded-lg">
            <h3 class="text-lg font-semibold">Laporan RAN</h3>
            <p>Laporan Pelaksanaan Rencana Aksi Nasional Keterbukaan Pemerintah 2018-2020</p>
            <div class="flex justify-between items-center mt-2">
              <button class="px-4 py-2 bg-primary-1 text-white rounded-lg">Unduh</button>
              <div class="text-gray-500 text-sm flex space-x-4">
                <span><i data-feather="calendar"></i> 30 Desember 2020</span>
                <span><i data-feather="eye"></i> 10,000</span>
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
      yearRange: [2013, 2024]
    };
  },
  mounted() {
    this.$feather.replace(); // Replace <i> tags with Feather Icons on mount
  },
  updated() {
    feather.replace(); // Ensure icons are updated when component re-renders
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
</style>
