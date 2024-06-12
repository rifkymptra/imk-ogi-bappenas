<template>
   <div id = "app">
    <Header />
    <div class="container mx-auto text-center">
        <div class="h-[calc(20vh)]"></div>
        <h1 class="text-4xl font-bold my-5">
            Pelajari tentang <span class="text-primary-1">OGI</span></h1>
        
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5">
        <Card
        image="require('@/assets/foto-1.png')" 
        title="Tentang Kami" 
        description="Pelajari Open Government Indonesia secara lebih detail."
        linkText="Baca lebih lanjut"
        link="#"
      />
        <Card 
        image="../assets/foto-2.png" 
        title="Sekretariat Kami" 
        description="Kenali orang-orang yang ada di dalam sekretariat kami."
        linkText="Kenali sekretariat kami"
        link="#"
      />
      <Card 
        image="../assets/foto-3.png" 
        title="Kegiatan Kami" 
        description="Kepoin kegiatan-kegiatan yang sudah kami lakukan di OGI."
        linkText="Lihat kegiatan"
        link="#"
      />
      <Card 
        image="../assets/foto-4.png" 
        title="Karir OGI" 
        description="Gabung bersama tim OGI."
        linkText="Lihat lowongan"
        link="#"
      />
      </div>
        <div class="h-[calc(12vh)]"></div>
    </div>
   
    <Footer />

   </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";
export default {
    name : "Pelajari",
  components: {
    Header,
    Footer,
    Card,
  },
  
};  
</script>