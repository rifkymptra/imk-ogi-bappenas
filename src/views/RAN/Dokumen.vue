<template>
  <Header />
  <div class="h-[1000vh] my-16 mx-60">
    <TitleSection
      link="/ran"
      linkText="Rencana Aksi Nasional"
      heading="Dokumen dan Publikasi Data"
      subheading=""
      :headingPrimary="false"
      :subheadingPrimary="true"
    />

    <div class="container mx-auto flex justify-center mt-5 px-4">
      <SearchBar
        placeholder="Cari Dokumen OGI"
        customClasses=""
        maxWidth="1166px"
      />
    </div>
  </div>
  <Footer />
  <ScrollButton />
</template>

<script>
import Header from "../../components/Header.vue";
import TitleSection from "../../components/TitleSection.vue";
import ScrollButton from "../../components/ScrollButton.vue";
import Footer from "../../components/Footer.vue";
import SearchBar from "../../components/SearchBar.vue";
export default {
  components: {
    Header,
    TitleSection,
    ScrollButton,
    Footer,
    SearchBar,
  },
};
</script>