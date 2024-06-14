<template>
    <div class="flex flex-col items-center">
      <div class="bg-white rounded-full shadow-md p-4 flex items-center justify-center border border-gray-100">
        <img :src="photoSrc" :alt="alt" class="w-20 h-20 rounded-full">
      </div>
      <span class="text-center text-sm font-semibold mt-2">{{ label }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FotoSekretariat',
    props: {
      photoSrc: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  