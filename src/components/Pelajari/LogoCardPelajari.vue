<template>
  <div class="flex flex-col items-center">
    <div class="bg-white rounded-lg shadow-md p-4 flex items-center justify-center border border-gray-100">
      <img :src="LogoSrc" :alt="alt" class="w-20 h-20">
    </div>
    <span class="text-center text-sm font-semibold mt-2">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'LogoCard',
  props: {
    LogoSrc: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

