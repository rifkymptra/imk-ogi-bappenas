<template>
    <div id="app">
        <!-- Header Navbar -->
        <Header />

        <!-- Title Section -->
        <div class="h-[calc(5vh)]"></div>
        <TitleSection link="/publikasi" linkText="PUBLIKASI OGI" heading="Independent Reporting Mechanism"
            :headingPrimary="false" />

        <!-- Search Bar -->
        <div class="container mx-auto flex justify-center mt-5 px-4">
            <SearchBar placeholder="Cari Berkas IRM" customClasses="" maxWidth="1166px" @search-query="onSearchQuery"
                @clear-search="clearSearchQuery" />
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
                            <button @click="setSortCriteria('relevance')" :class="{
                                'bg-primary-1 text-white': sortCriteria === 'relevance',
                                'bg-gray-200 text-neutral-3': sortCriteria !== 'relevance'
                            }" class="w-[90px] h-[32px] font-inter font-medium text-[11px] rounded-l-[15px] hover:bg-primary-3 hover:text-white focus:outline-none">
                                Relevansi
                            </button>
                            <button @click="setSortCriteria('latest')" :class="{
                                'bg-primary-1 text-white': sortCriteria === 'latest',
                                'bg-gray-200 text-neutral-3': sortCriteria !== 'latest'
                            }" class="w-[79px] h-[32px] font-inter font-medium text-[11px] hover:bg-primary-3 hover:text-white focus:outline-none">
                                Terbaru
                            </button>
                            <button @click="setSortCriteria('mostDownloaded')" :class="{
                                'bg-primary-1 text-white': sortCriteria === 'mostDownloaded',
                                'bg-gray-200 text-neutral-3': sortCriteria !== 'mostDownloaded'
                            }" class="w-[170px] h-[32px] font-inter font-medium text-[11px] rounded-r-[15px] hover:bg-primary-3 hover:text-white focus:outline-none">
                                Paling Banyak Diunduh
                            </button>
                        </div>
                        <h3 class="font-inter font-semibold text-[12px] mb-2">Kategori IRM</h3>
                        <div class="relative w-full">
                            <select v-model="selectedCategory"
                                class="w-full px-4 py-2 border rounded-lg pr-10 appearance-none text-[14px]">
                                <option v-for="category in categories" :key="category">{{ category }}</option>
                            </select>
                            <div
                                class="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
                                <i data-feather="chevron-down"></i>
                            </div>
                            <button v-if="selectedCategory !== 'Semua'" @click="clearCategory"
                                class="absolute right-10 top-1/2 transform -translate-y-1/2 text-primary-1 hover:text-primary-4">
                                <i data-feather="x" class="icon-clear-category"></i>
                            </button>
                        </div>
                        <h3 class="font-inter font-semibold text-[12px] mb-3 mt-4">Tahun</h3>
                        <Slider v-model="yearRange" :min="minYear" :max="maxYear" :tooltips="true" showTooltip="drag"
                            class="custom-slider" />
                        <div class="flex justify-between text-sm mt-4">
                            <input type="number" v-model.number="yearRange[0]" class="year-input" :min="minYear"
                                :max="maxYear" />
                            <input type="number" v-model.number="yearRange[1]" class="year-input" :min="minYear"
                                :max="maxYear" />
                        </div>
                        <button @click="applyFilter"
                            class="w-full mt-4 px-4 py-2 font-jakarta font-bold bg-primary-1 text-white rounded-lg hover:bg-primary-3 focus:outline-none">
                            Terapkan
                        </button>
                    </div>
                </div>

                <!-- Reports Section -->
                <div class="w-3/4 pl-4">
                    <div v-if="filteredReports.length === 0" class="p-4 bg-white shadow-card rounded-lg">
                        <p class="font-inter font-bold text-[18px] text-center">Tidak ada berkas IRM terkait.</p>
                    </div>
                    <div v-else class="space-y-4">
                        <!-- Report Card -->
                        <div v-for="(report, index) in paginatedReports" :key="index"
                            class="p-4 bg-white shadow-card rounded-lg">
                            <h3 class="font-inter font-semibold text-[12px] text-primary-1 mb-2">{{ report.kategori }}</h3>
                            <p class="font-inter font-bold text-[18px]">{{ report.judul }}</p>
                            <div class="flex justify-between items-center mt-2">
                                <a :href="report.link" target="_blank">
                                    <button
                                        class="w-[79px] h-[32px] font-jakarta font-bold text-[13px] bg-primary-1 text-white rounded-lg hover:bg-primary-3 focus:outline-none">Unduh</button>
                                </a>
                                <div class="text-gray-500 text-sm flex space-x-4">
                                    <span class="flex items-center font-jakarta font-semibold text-[10px] text-neutral-3">
                                        <i data-feather="calendar" class="icon-calendar mr-1"></i> {{ report.tahun }}
                                    </span>
                                    <span class="flex items-center font-jakarta font-semibold text-[10px] text-neutral-3">
                                        <i data-feather="download" class="icon-eye mr-1"></i> {{
                                            report.totalDownload.toLocaleString() }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="filteredReports.length > 0" class="flex justify-center space-x-2 mt-4">
                        <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" :class="{
                            'bg-neutral-4 text-white cursor-not-allowed': currentPage === 1,
                            'bg-white text-neutral-2 border border-neutral-3': currentPage !== 1
                        }" class="w-[32px] h-[32px] flex items-center justify-center border border-neutral-3 rounded-md hover:bg-neutral-4 focus:outline-none">
                            <i data-feather="chevron-left"></i>
                        </button>

                        <button v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{
                            'bg-white border-primary-1 text-primary-1': currentPage === page,
                            'bg-white border-neutral-3 text-neutral-3': currentPage !== page
                        }" class="w-[32px] h-[32px] font-inter font-medium text-[13px] flex items-center justify-center border rounded-md hover:bg-neutral-4 focus:outline-none">
                            {{ page }}
                        </button>

                        <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" :class="{
                            'bg-neutral-4 text-white cursor-not-allowed': currentPage === totalPages,
                            'bg-white text-neutral-2': currentPage !== totalPages
                        }" class="w-[32px] h-[32px] flex items-center justify-center border border-neutral-3 rounded-md hover:bg-neutral-4 focus:outline-none">
                            <i data-feather="chevron-right"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <!-- Footer -->
        <div class="h-[calc(5vh)]"></div>
        <Footer />
        <ScrollButton />
    </div>
</template>
  
<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import TitleSection from "../../components/TitleSection.vue";
import SearchBar from "../../components/SearchBar.vue";
import Slider from "@vueform/slider";
import IRM from '../../assets/data/IRM.json';
import ScrollButton from "../../components/ScrollButton.vue";

export default {
    name: "IRM",
    components: {
        Header,
        Footer,
        TitleSection,
        SearchBar,
        Slider,
        ScrollButton,
    },
    data() {
        return {
            sortCriteria: 'relevance', // Default sorting criteria
            selectedCategory: 'Semua', // Default selected category
            reports: IRM, // Load the reports data from JSON
            filteredReports: IRM, // To store filtered reports
            searchQuery: '', // To store the search query
            currentPage: 1,
            itemsPerPage: 5,
            yearRange: [2000, 2024] // Placeholder, will be set in created hook
        };
    },
    computed: {
        paginatedReports() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredReports.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.filteredReports.length / this.itemsPerPage);
        },
        categories() {
            if (this.reports.length === 0) {
                return ['Semua'];
            }
            const categories = new Set(this.reports.map(report => report.kategori));
            return ['Semua', ...categories];
        },
        minYear() {
            if (this.reports.length === 0) {
                return new Date().getFullYear();
            }
            return Math.min(...this.reports.map(report => report.tahun));
        },
        maxYear() {
            if (this.reports.length === 0) {
                return new Date().getFullYear();
            }
            return Math.max(...this.reports.map(report => report.tahun));
        }
    },
    watch: {
        yearRange: {
            handler(newRange) {
                // Handle the changes in yearRange and update other components if needed
                console.log('Year range changed:', newRange);
            },
            deep: true
        },
        searchQuery(newQuery) {
            this.applyFilter(); // Apply filter whenever search query changes
        }
    },
    methods: {
        setSortCriteria(criteria) {
            this.sortCriteria = criteria;
        },
        clearCategory() {
            this.selectedCategory = 'Semua';
        },
        applyFilter() {
            console.log(`Applying filter: Sorting by ${this.sortCriteria}, Year range: ${this.yearRange}, Category: ${this.selectedCategory}, Search Query: ${this.searchQuery}`);

            let filtered = this.reports.filter(report => {
                const isInYearRange = report.tahun >= this.yearRange[0] && report.tahun <= this.yearRange[1];
                const isInCategory = this.selectedCategory === 'Semua' || report.kategori === this.selectedCategory;
                const matchesSearchQuery = report.judul.toLowerCase().includes(this.searchQuery.toLowerCase()) || report.kategori.toLowerCase().includes(this.searchQuery.toLowerCase());
                return isInYearRange && isInCategory && matchesSearchQuery;
            });

            if (this.sortCriteria === 'latest') {
                filtered.sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
            } else if (this.sortCriteria === 'mostDownloaded') {
                filtered.sort((a, b) => b.totalDownload - a.totalDownload);
            }

            this.filteredReports = filtered;
            this.currentPage = 1; // Reset to the first page after applying filter
        },
        changePage(page) {
            this.currentPage = page;
        },
        onSearchQuery(query) {
            this.searchQuery = query;
        },
        clearSearchQuery() {
            this.searchQuery = '';
            this.applyFilter(); // Apply filter to refresh the list
        }
    },
    created() {
        // Set the initial year range based on the reports data
        if (this.reports.length > 0) {
            this.yearRange = [this.minYear, this.maxYear];
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
    background-color: #63666A !important;
    /* primary-1 */
}

.slider-connect {
    background: #AD2330 !important;
    /* primary-1 */
}

.slider-handle {
    background: #AD2330 !important;
    /* primary-1 */
    border: 2px solid white !important;
    width: 20px !important;
    height: 20px !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.slider-handle:focus {
    box-shadow: 0 0 0 3px rgba(173, 35, 48, 0.3) !important;
    /* primary-1 with transparency */
}

.slider-tooltip {
    background-color: #AD2330 !important;
    /* primary-1 */
    color: white !important;
    border: 1px solid #AD2330 !important;
    /* primary-1 */
    border-radius: 4px;
    padding: 5px;
}

button:focus {
    outline: none;
}

/* Styles for the clear category icon */
.icon-clear-category {
    width: 18px;
    /* Adjust the size as needed */
    height: 18px;
    /* Adjust the size as needed */
}

/* Styles for input fields */
input[type="number"] {
    border: none;
    border-bottom: 1px solid #63666A;
    /* Adjust color as needed */
    padding: 5px 0;
    font-size: 1rem;
    text-align: center;
    width: 80px;
    box-sizing: border-box;
}

input[type="number"]:focus {
    outline: none;
    border-bottom: 2px solid #AD2330;
    /* Adjust color as needed */
}

/* Custom icon styles */
.icon-calendar,
.icon-eye {
    width: 16px;
    /* Adjust the size as needed */
    height: 16px;
    /* Adjust the size as needed */
    color: #63666A;
    /* Adjust color to neutral-3 */
}

/* Add shadow to report cards */
.shadow-card {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}
</style>