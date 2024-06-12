<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img :src="image" alt="" class="w-full h-48 object-cover">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">
          {{ description }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <a :href="link" class="text-primary-1 hover:text-red-500">{{ linkText }}</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
    props: {
        image: {
      type: String,
      required: true
    },
      title: String,
      description: String,
      link: String,
      linkText: String
    }
  }
  </script>

  