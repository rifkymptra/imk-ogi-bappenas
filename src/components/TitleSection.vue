<template>
  <div class="container mx-auto flex flex-col items-center mb-5">
    <div class="h-[calc(10vh)]"></div>
    <a :href="link" class="font-bold flex items-center text-primary-1 hover:text-red-500 mb-1 group">
      <i data-feather="arrow-left" class="mr-1 transition-transform transform group-hover:-translate-x-1"></i>
      {{ linkText }}
    </a>
    <h1 class="text-[4.5rem] font-bold my-5">
      <span :class="headingClass">{{ heading }}</span>
      <span :class="subheading1Class">{{ subheading1 }}</span>
      <!-- Render subheading2 only if it is provided -->
      <span v-if="subheading2" :class="subheading2Class">{{ subheading2 }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "TitleSection",
  props: {
    link: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      required: true
    },
    subheading1: {
      type: String,
      required: true
    },
    subheading2: {
      type: String,
      required: false, // Make subheading2 not required
      default: '' // Default to an empty string if not provided
    },
    headingPrimary: {
      type: Boolean,
      default: false
    },
    subheading1Primary: {
      type: Boolean,
      default: true
    },
    subheading2Primary: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    headingClass() {
      return this.headingPrimary ? 'text-primary-1' : '';
    },
    subheading1Class() {
      return this.subheading1Primary ? 'text-primary-1' : '';
    },
    subheading2Class() {
      return this.subheading2Primary ? 'text-primary-1' : '';
    }
  },
  mounted() {
    // Initialize Feather icons
    this.$nextTick(() => {
      this.$feather.replace();
    });
  }
};
</script>
