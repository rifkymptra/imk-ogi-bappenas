<template>
    <div id="app">
    <Header />
    <div class="container mx-auto">
        <div class="h-[calc(12vh)]"></div>
        <div class="text-center flex flex-col items-center">
            <TitleSection 
            link="/pelajari" 
            linkText="PELAJARI" 
            heading="Kegiatan " 
            subheading1="kami di OGI" 
            :headingPrimary="true"
            :subheading1Primary="false"
            /> 
            <div class="flex justify-center items-center p-4 bg-white rounded-border-20 shadow-lg border border-gray-300 mt-4 w-3/10 ">
            <div class="bg-red-100 p-2 rounded-full">
                <img src="/src/assets/pin.svg" alt="Pin Icon" class="h-6 w-6">
            </div>
            <span class="ml-3 text-black text-center font-jakarta font-bold" :style="{ fontSize : '20px'}">Jangan lupa untuk menandai kalender Anda untuk kegiatan mendatang!</span>
            </div>
        </div>
        <div >
            <div class="h-[calc(6vh)]"></div>
            <Events />
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
import ScrollButton from "../../components/ScrollButton.vue";
import TitleSection from "../../components/TitleSection.vue";
import Events from "../../components/Pelajari/Events.vue";

export default {
  components: {
    Header,
    Footer,
    ScrollButton,
    TitleSection,
    Events,
  },
};

</script>