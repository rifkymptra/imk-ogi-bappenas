<template>
    <div class="card bg-white shadow-md rounded-lg overflow-hidden">
      <img :src="imageSrc" alt="Card image" class="w-full h-48 object-cover">
      <div class="p-4">
        <h2 class="font-inter font-semibold text-primary-1 text-[14px] mb-2">{{ kategori }}</h2>
        <p class="font-jakarta font-bold text-[16px] mb-8">{{ judul }}</p>
        <div class="flex justify-between items-center">
          <span class="font-jakarta font-medium text-neutral-2 text-[14px]">{{ tanggal }}</span>
          <a :href="link" target="_blank" rel="noopener noreferrer"
             class="w-[79px] h-[32px] flex justify-center items-center font-jakarta font-bold text-[13px] bg-primary-1 text-white rounded-lg hover:bg-primary-3 focus:outline-none">Unduh</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InfografisCard',
    props: {
      kategori: String,
      judul: String,
      tanggal: String,
      imageSrc: String,
      link: String
    }
  };
  </script>
  
  <style scoped>
  .card {
    width: 100%;
    max-width: 300px;
  }
  </style>
  