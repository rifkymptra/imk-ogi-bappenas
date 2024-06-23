<template>
    <div id="app">
      <Header />
      <div class="container mx-auto">
        <div class="h-[calc(12vh)]"></div>
        <div class="text-center">
            <TitleSection 
              link="/pelajari" 
              linkText="PELAJARI" 
              heading="Karir " 
              subheading1="OGI" 
              :headingPrimary="true"
              :subheading1Primary="false" 
            />
            <p class="text-black font-inter" :style="{ fontSize: '20px' }">Gabung bersama Open Government Indonesia (OGI) 
                untuk membantu dalam wujudkan <br> 
                pemerintahan yang inovatif, akuntabel, dan inklusif!  </p>
        </div>
        
        <div class="my-5 flex justify-center items-center">
            <div class= "grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
                <Card
                image="/src/assets/foto-loker.png"
                title="Lowongan Kerja" 
                description="Daftar dan jadilah tim OGI."
                linkText="Informasi lebih lanjut"
                link="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODc5Nzc4OTQ5MjU0ODIw?story_media_id=2792798205547609942_5571750346&igsh=bTV0ZHV2NWRuMjRw"
                />
                <Card 
                image="/src/assets/foto-lomag.png" 
                title="Lowongan Magang" 
                description="Menambah pengalaman dengan bergabung tim OGI"
                linkText="Daftar sekarang juga"
                link="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODc5Nzc4OTQ5MjU0ODIw?story_media_id=2792798205547609942_5571750346&igsh=bTV0ZHV2NWRuMjRw"
                />
            </div>
        </div>
      </div>

      <div class="h-[calc(12vh)]"></div>

      <Footer />

      <ScrollButton />
    </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Card from "../../components/Card.vue";
import TitleSection from "../../components/TitleSection.vue";
import ScrollButton from "../../components/ScrollButton.vue";

export default {
    name : "Karir",
  components: {
    Header,
    Footer,
    Card,
    TitleSection,
    ScrollButton,
  },
  mounted() {
      // Initialize Feather icons
      this.$nextTick(() => {
        feather.replace()
      })
    }
  
};  

</script>
