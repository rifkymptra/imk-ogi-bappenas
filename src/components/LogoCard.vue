<template>
  <div class="flex flex-col items-center">
    <div
      class="flex flex-col items-center border rounded-lg shadow-md bg-white h-48 w-48"
    >
      <img :src="logoSrc" alt="" class="h-full w-full object-cover" />
    </div>
    <p class="text-[16px] font-inter font-semibold mt-2">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
    logoSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
  

