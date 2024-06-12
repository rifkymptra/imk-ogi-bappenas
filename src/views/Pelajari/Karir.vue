<template>
    <div id="app">
      <Header />
      <div class="container mx-auto">
        <div class="h-[calc(20vh)]"></div>
        <div class="text-center">
            <div class="flex justify-center items-center space-x-1 font-jakarta">
                <i
                    data-feather="arrow-left"
                    class=" text-primary-1 inline transition-all group-hover:text-primary-5"
                ></i>
                <h2 class="text-primary-1 font-bold">PELAJARI</h2>
            </div>
            
            <h1 class="text-4xl font-bold my-5 font-jakarta">
            Karir <span class="text-primary-1">OGI</span></h1>
            <p class="text-black font-inter">Gabung bersama Open Government Indonesia (OGI) 
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
                link="#"
                />
                <Card 
                image="/src/assets/foto-lomag.png" 
                title="Lowongan Magang" 
                description="Menambah pengalaman dengan bergabung tim OGI"
                linkText="Daftar sekarang juga"
                link="#"
                />
            </div>
        </div>
      </div>

      <div class="h-[calc(12vh)]"></div>

      <Footer />
    </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Card from "../../components/Card.vue";
export default {
    name : "Karir",
  components: {
    Header,
    Footer,
    Card,
  },
  
};  

</script>
