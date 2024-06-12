<template>
    <details @toggle="toggleOpen" :open="isOpen" class=" rounded-lg p-4 w-4/5 shadow-lg mx-auto flex flex-col items-center border border-gray-100 h-20">
      <summary class="flex items-center text-xl mt-2 font-semibold cursor-pointer list-none">
        <span class="flex-grow text-primary-1 pl-4 text-inter">{{ title }}</span>
        <span ref="icon" class="transform transition-transform duration-200"></span>
      </summary>
      <div v-show="isOpen" class="mt-4">
        <slot></slot>
      </div>
    </details>
  </template>
  
  <script>
  import feather from 'feather-icons';
  
  export default {
    name: 'CustomDetails',
    props: {
      title: {
        type: String,
        required: true
      },
      open: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isOpen: this.open
      }
    },
    mounted() {
      this.updateIcon();
    },
    methods: {
      toggleOpen(event) {
        this.isOpen = event.target.open;
        this.updateIcon();
      },
      updateIcon() {
        const icon = this.isOpen ? 'chevron-down' : 'chevron-right';
        this.$nextTick(() => {
          this.$refs.icon.innerHTML = feather.icons[icon].toSvg({ class: 'w-11 h-6 text-primary-1' });
        });
      }
    },
    watch: {
      isOpen(newVal) {
        this.updateIcon();
      }
    }
  }
  </script>
  
  <style scoped>
  /* No custom CSS needed */
  </style>
  