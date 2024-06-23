<template>
  <div class="w-card-500 rounded-border-20 overflow-hidden shadow-lg m-4 border border-gray-100">
    <img :src="image" alt="" class="w-full h-30 object-cover">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-10 bottom-0">
      <a :href="link" class="font-bold text-primary-1 hover:text-red-500 group inline-flex items-center">
        {{ linkText }}
        <i
          data-feather="arrow-right"
          class="ml-1 transition-transform transform group-hover:translate-x-1 group-hover:text-red-500"
        ></i>
      </a>
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
  },
  mounted() {
    // Initialize Feather icons
    this.$nextTick(() => {
      this.$feather.replace()
    })
  }
}
</script>
