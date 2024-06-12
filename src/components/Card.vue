<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-gray-100">
      <img :src="image" alt="" class="w-full h-30 object-cover">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">
          {{ description }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 bottom-0">
        <a :href="link" class="text-primary-1 hover:text-red-500">{{ linkText }}</a>
        <i
                    data-feather="arrow-right"
                    class=" text-primary-1 inline transition-all group-hover:bg-primary-5"
                ></i>
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

  