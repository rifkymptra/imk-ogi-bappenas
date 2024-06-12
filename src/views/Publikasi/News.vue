<template>
    <div id="app">
        <Header />
        <div class="h-[calc(5vh)]"></div>
        <TitleSection link="/publikasi" linkText="PUBLIKASI OGI" heading="OGI " subheading="News" :headingPrimary="false"
            :subheadingPrimary="true" />
        <div class="container mx-auto flex justify-center mt-5 px-4">
            <SearchBar placeholder="Cari Berita OGI" customClasses="" maxWidth="1166px" />
        </div>
        <div class="h-[calc(5vh)]"></div>
        <Footer />
    </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import TitleSection from "../../components/TitleSection.vue";
import SearchBar from "../../components/SearchBar.vue"; // Adjust the path as needed

export default {
    name: "Publikasi",
    components: {
        Header,
        Footer,
        TitleSection,
        SearchBar,
    },
};
</script>