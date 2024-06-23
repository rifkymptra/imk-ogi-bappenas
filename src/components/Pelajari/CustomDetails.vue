<template>
  <details @toggle="toggleOpen" :open="isOpen" class="bg-white border-2 rounded-lg drop-shadow-lg p-4 hover:shadow-lg transition-shadow duration-300 flex mx-28">
    <summary class="flex flex-col font-semibold cursor-pointer list-none">
      <div class="flex items-top justify-between w-full">
        <span class="year-label text-primary-1 ml-6 font-bold" :style="{ fontSize: '25px' }">{{ title }}</span>
        <span v-show="isOpen" class="details-content ml-5 mt-1" :style="{ fontSize: '15px' }">
          <slot></slot>
        </span>
        <span ref="icon" class="transform transition-transform duration-200"></span>
      </div>
    </summary>
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
    };
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
        this.$refs.icon.innerHTML = feather.icons[icon].toSvg({ class: 'w-6 h-6 text-primary-1' });
      });
    }
  },
  watch: {
    isOpen(newVal) {
      this.updateIcon();
    }
  }
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
