<template>
    <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <img :src="photoSrc" :alt="alt" class="w-20 h-20 rounded-full">
      <h3 class="mt-4 text-lg font-semibold">{{ name }}</h3>
      <p class="text-sm text-neutral-600">{{ role }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TeamMemberCard',
    props: {
      photoSrc: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus jika diperlukan */
  </style>
  