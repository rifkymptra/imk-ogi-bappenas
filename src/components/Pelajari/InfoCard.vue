<template>
  <div class="border p-4 rounded shadow">
    <img :src="card.image" alt="" class="w-full h-32 object-cover rounded mb-4">
    <div class="text-sm text-red-500">{{ card.category }}</div>
    <div class="font-bold text-lg">{{ card.title }}</div>
    <div class="text-gray-500">{{ card.date }}</div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  }
}
</script>
