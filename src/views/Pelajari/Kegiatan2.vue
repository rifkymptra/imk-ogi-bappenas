<template>
    <div>
      <Header />
      <div class="container mx-auto">
        <div class="h-[calc(16vh)]"></div>
        <EventDetail />
        <div class="h-[calc(8vh)]"></div>
      </div>
      
      <Footer />
      <ScrollButton />
    </div>
  </template>
  
  <script>
  import Header from "../../components/Header.vue";
  import Footer from "../../components/Footer.vue";
  import ScrollButton from "../../components/ScrollButton.vue";
  import EventDetail from "../../components/Pelajari/EventDetail.vue";
  
  export default {
    name: "Details",
    components: {
      Header,
      Footer,
      EventDetail,
      ScrollButton,
    },
    
  };
  </script>
  
  