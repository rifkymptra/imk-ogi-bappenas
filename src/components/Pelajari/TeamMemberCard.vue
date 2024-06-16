<template>
  <div class=" text-center flex flex-col items-center p-4 bg-white rounded-border-20 border border-gray-200 shadow-md w-[228px] h-[279px]">
    <img :src="photoSrc" :alt="alt" class="w-32 h-32 rounded-full mt-4">
    <h3 class="px-4 text-lg font-semibold mt-4 font-jakarta" :style="{ fontSize : '14px'}">{{ name }}</h3>
    <p class="text-sm text-neutral-600  mt-4 bottom-0 font-jakarta" :style="{ fontSize : '12px'}">{{ role }}</p>
  </div>
</template>

<script>
export default {
  name: 'TeamMemberCard',
  props: {
    photoSrc: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
