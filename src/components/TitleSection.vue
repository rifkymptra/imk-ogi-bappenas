<template>
    <div class="container mx-auto flex flex-col items-center mb-5">
      <div class="h-[calc(10vh)]"></div>
      <a :href="link" class="font-bold flex items-center text-primary-1 hover:text-red-500 mb-1 group">
        <i data-feather="arrow-left" class="mr-1 transition-transform transform group-hover:-translate-x-1"></i>
        {{ linkText }}
      </a>
      <h1 class="text-[4.5rem] font-bold my-5">
        {{ heading }} <span class="text-primary-1">{{ subheading }}</span>
      </h1>
    </div>
  </template>
  
  <script>
  export default {
    name: "TitleSection",
    props: {
      link: {
        type: String,
        required: true
      },
      linkText: {
        type: String,
        required: true
      },
      heading: {
        type: String,
        required: true
      },
      subheading: {
        type: String,
        required: true
      }
    },
    mounted() {
      // Initialize Feather icons
      this.$nextTick(() => {
        this.$feather.replace()
      });
    }
  };
  </script>
  

  