<template>
  <div class="bg-white border border-gray-100 rounded-lg drop-shadow-lg p-4 hover:shadow-lg transition-shadow duration-200 mx-48">
    <div @click="toggle" class="flex justify-between items-center space-x-4 w-42 cursor-pointer mx-4">
      <div class="flex items-center">
        <div class="flex items-center justify-center h-12 w-12 bg-primary-5/35 rounded-full">
          <div v-html="icons[icon]" class="w-6 h-6 text-primary-1"></div>
        </div>
        <h2 class="text-xl font-semibold ml-4">{{ title }}</h2>
      </div>
      <div>
        <span v-if="!expanded" v-html="icons.plus" class="w-6 h-6 text-primary-1"></span>
        <span v-if="expanded" v-html="icons.x" class="w-6 h-6 text-primary-1"></span>
      </div>
    </div>
    <transition name="fade">
      <div v-if="expanded" class="mx-28">
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
  created() {
    this.icons[this.icon] = feather.icons[this.icon].toSvg();
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
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
