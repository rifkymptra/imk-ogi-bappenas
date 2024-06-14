<template>
    <div class="relative bg-white p-4 rounded-lg shadow-md text-center">
      <div @click="toggleExpand" class="absolute top-2 right-2 cursor-pointer">
        <span v-if="!isExpanded" v-html="icons.plus" class="w-6 h-6 text-gray-500"></span>
        <span v-if="isExpanded" v-html="icons.x" class="w-6 h-6 text-gray-500"></span>
      </div>
      <PhotoComponent :photoSrc="photoSrc" :alt="alt" />
      <h3 class="mt-4 text-lg font-semibold">{{ name }}</h3>
      <p class="text-sm text-neutral-600">{{ role }}</p>
      <div v-if="isExpanded" class="mt-2 text-left">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import FotoSekretariat from './FotoSekretariat.vue';
  import feather from 'feather-icons';
  
  export default {
    name: 'BoxSekretariat',
    components: {
      FotoSekretariat
    },
    props: {
      name: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      photoSrc: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isExpanded: false,
        icons: {
          plus: feather.icons.plus.toSvg(),
          x: feather.icons.x.toSvg()
        }
      };
    },
    methods: {
      toggleExpand() {
        this.isExpanded = !this.isExpanded;
      }
    }
  };
  </script>
  