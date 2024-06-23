<template>
   <div id = "app">
    <Header />
    <div class="container mx-auto">
        <div class="h-[calc(12vh)]"></div>
        <h1 class="text-[3.5rem] font-bold my-5 text-center font-jakarta" :style="{fontSize : '56px'}">
            Pelajari tentang <span class="text-primary-1">OGI</span></h1>
        
      <div class="my-5 flex justify-center items-center min-h-screen">
        <div class= "grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <Card
          image="/src/assets/foto-1.png"
          title="Tentang Kami" 
          description="Pelajari Open Government Indonesia secara lebih detail."
          linkText="Baca lebih lanjut"
          link="/pelajari/perjalanan"
          />
          <Card 
          image="/src/assets/foto-2.png" 
          title="Sekretariat Kami" 
          description="Kenali orang-orang yang ada di dalam sekretariat kami."
          linkText="Kenali sekretariat kami"
          link="/pelajari/sekretariat"
          />
          <Card 
          image="/src/assets/foto-3.png" 
          title="Kegiatan Kami" 
          description="Kepoin kegiatan-kegiatan yang sudah kami lakukan di OGI."
          linkText="Lihat kegiatan"
          link="/pelajari/kegiatan"
          />
          <Card 
          image="/src/assets/foto-4.png" 
          title="Karir OGI" 
          description="Gabung bersama tim OGI."
          linkText="Lihat lowongan"
          link="/pelajari/karir"
          />
        </div>
      </div>
      <div class="h-[calc(12vh)]"></div>
    </div>
   
    <Footer />
    <ScrollButton />

   </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Card from "../../components/Card.vue";
import ScrollButton from "../../components/ScrollButton.vue";

export default {
    name : "Pelajari",
  components: {
    Header,
    Footer,
    Card,
    ScrollButton,
  },
  
};  
</script>