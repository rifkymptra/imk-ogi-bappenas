<template>
  <div class="bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 mx-28 w-[861px]">
    <div @click="toggle" class="flex justify-between items-center p-4 cursor-pointer">
      <div class="flex items-center space-x-4">
        <div class="flex items-center justify-center h-12 w-12 bg-primary-5/35 rounded-full">
          <img v-if="icon === 'key'" src="../../assets/key.svg" alt="Key Icon" class="w-6 h-6 text-primary-1">
          <img v-else-if="icon === 'briefcase'" src="../../assets/briefcase.svg" alt="Briefcase Icon" class="w-6 h-6 text-primary-1">
          <div v-else v-html="icons[icon]" class="w-6 h-6 text-primary-1"></div>
        </div>
        <h2 class="text-xl font-semibold">{{ title }}</h2>
      </div>
      <div>
        <span v-if="!expanded" v-html="icons.plus" class="w-6 h-6 text-primary-1"></span>
        <span v-if="expanded" v-html="icons.x" class="w-6 h-6 text-primary-1"></span>
      </div>
    </div>
    <transition name="fade">
      <div v-if="expanded">
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
    if (this.icon === 'key' || this.icon === 'briefcase') {
      // No need to use feather-icons for key.svg and briefcase.svg
      // You can directly use them as img src
    } else {
      this.icons[this.icon] = feather.icons[this.icon].toSvg();
    }
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

