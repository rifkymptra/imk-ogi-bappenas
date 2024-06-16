<template>
  <a :href="card.link" class="block">
    <div class="border rounded-3xl shadow-lg w-80 h-[30rem] hover:shadow-xl transition-shadow duration-200 flex flex-col">
      <img :src="card.image" alt="" class="w-80 h-[204px] rounded-t-3xl">
      <div class="flex flex-col flex-1 p-5">
        <div class="text-sm font-bold font-jakarta text-primary-1" :style="{ fontSize : '20px'}">{{ card.category }}</div>
        <div class="font-bold font-jakarta text-lg pt-4" :style="{ fontSize : '28px'}">{{ card.title }}</div>
        <div class="flex-1"></div> <!-- This will take up remaining space -->
        <div class="text-neutral-3 font-medium font-jakarta pb-1" :style="{ fontSize : '14px'}">{{ card.date }}</div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>
