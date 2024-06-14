<template>
    <div class="bg-white border-2 rounded-lg drop-shadow-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <div @click="toggle" class="flex justify-between items-center space-x-4 w-42 cursor-pointer">
        <div class="flex items-center">
          <div class="flex items-center justify-center h-12 w-12 bg-primary-5/35 rounded-full">
            <div v-html="icons[icon]" class="w-6 h-6 text text-primary-1"></div>
          </div>
          <h2 class="text-xl font-semibold">{{ title }}</h2>
        </div>
        <div>
          <span v-if="!expanded" v-html="icons.plus" class="w-6 h-6 text-primary-1"></span>
          <span v-if="expanded" v-html="icons.x" class="w-6 h-6 text-primary-1"></span>
        </div>
      </div>
      <transition name="fade">
        <div v-if="expanded" class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <slot></slot>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  import feather from 'feather-icons';
  
  export default {
    name: 'TeamSection',
    props: {
      title: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        expanded: false,
        icons: {
          plus: feather.icons.plus.toSvg(),
          x: feather.icons.x.toSvg()
        }
      };
    },
    methods: {
      toggle() {
        this.expanded = !this.expanded;
      }
    }
  };
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  