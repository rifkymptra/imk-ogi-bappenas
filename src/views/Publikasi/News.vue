<template>
    <div id="app">
        <!-- Header Navbar -->
        <Header />

        <!-- Title Section -->
        <div class="h-[calc(5vh)]"></div>
        <TitleSection link="/publikasi" linkText="PUBLIKASI OGI" heading="OGI " subheading1="News " :headingPrimary="false"
            :subheading1Primary="true"/>

        <!-- Search Bar -->
        <div class="container mx-auto flex justify-center mt-5 px-4">
            <SearchBar placeholder="Cari Berita OGI" customClasses="" maxWidth="1166px" />
        </div>
        <div class="h-[calc(5vh)]"></div>

        <!-- Main Content -->
        <div class="container mx-auto flex px-4">
            <!-- Filter Panel -->
            <div class="w-1/4 p-4">
                <div class="bg-white shadow rounded p-4">
                    <h2 class="text-xl font-bold mb-4">Urutkan Berdasarkan</h2>
                    <div class="mb-4 flex space-x-4">
                        <button class="text-red-500 font-bold focus:outline-none">Relevansi</button>
                        <button class="focus:outline-none">Terbaru</button>
                        <button class="focus:outline-none">Paling Banyak Dibaca</button>
                    </div>
                    <h2 class="text-xl font-bold mb-4">Kategori</h2>
                    <select class="w-full mb-4 p-2 border rounded">
                        <option>Semua</option>
                        <option>Kategori 1</option>
                        <option>Kategori 2</option>
                    </select>
                    <h2 class="text-xl font-bold mb-4">Tahun</h2>
                    <vue-slider
                        v-model="yearRange"
                        :min="2013"
                        :max="2024"
                        :interval="1"
                        :dotSize="16"
                        :sliderSize="4"
                        class="mb-4"
                    ></vue-slider>
                    <div class="flex justify-between text-sm mb-4">
                        <span>{{ yearRange[0] }}</span>
                        <span>{{ yearRange[1] }}</span>
                    </div>
                    <button class="w-full bg-red-500 text-white py-2 rounded">Terapkan</button>
                </div>
            </div>

            <!-- Cards Display -->
            <div class="w-3/4 p-4 grid grid-cols-1 gap-4">
                <div v-for="(item, index) in items" :key="index" class="bg-white shadow rounded p-4">
                    <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                    <p class="text-gray-600 mb-2">{{ item.date }}</p>
                    <button class="bg-red-500 text-white py-2 px-4 rounded">Unduh</button>
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
import SearchBar from "../../components/SearchBar.vue"; // Adjust the path as needed
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
    name: "Publikasi",
    components: {
        Header,
        Footer,
        TitleSection,
        SearchBar,
        VueSlider
    },
    data() {
        return {
            yearRange: [2013, 2024],
            items: [
                {
                    title: "Laporan Pelaksanaan Rencana Aksi Nasional Keterbukaan Pemerintah 2020-2022",
                    date: "31 December 2022",
                },
                {
                    title: "Laporan Pelaksanaan Rencana Aksi Nasional Keterbukaan Pemerintah 2018-2020",
                    date: "31 December 2020",
                },
                {
                    title: "Laporan Pelaksanaan Rencana Aksi Open Government Indonesia Tahun 2017",
                    date: "31 December 2017",
                },
                {
                    title: "Laporan Pelaksanaan Rencana Aksi Open Government Indonesia Tahun 2016",
                    date: "31 December 2016",
                },
                {
                    title: "Understanding the Gap Between Policy Formulations and Implementation in Collaborative Governance Mechanism",
                    date: "31 December 2022",
                },
            ],
        };
    },
};
</script>
