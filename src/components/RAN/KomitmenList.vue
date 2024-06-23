<template>
  <div class="flex flex-col justify-center items-center w-full">
    <button class="relative my-4 w-full max-w-3xl" @click="toggle">
      <div
        class="bg-white border-2 rounded-lg drop-shadow-lg p-4 hover:shadow-lg transition-shadow duration-300"
      >
        <div class="flex justify-between space-x-4 w-42">
          <div
            class="flex items-center justify-center h-12 w-12 bg-primary-5/35 rounded-full"
          >
            <p class="object-cover text-xl font-bold text-primary-1">
              {{ number }}
            </p>
          </div>
          <div class="flex flex-col w-full justify-center">
            <h3 class="font-semibold text-lg items-start">{{ title }}</h3>
            <span v-if="isTextVisible" class="">
              <p class="font-inter text-lg mt-4">{{ textToAdd }}</p>
              <a :href="`/ran/komitmen/${number}`" class="">
                <button
                  class="bg-primary-1 hover:bg-primary-2 text-white font-semibold py-2 px-6 rounded-full shadow-sm transition duration-300 shadow-primary-1 group mt-4 cursor-pointer relative"
                >
                  Selengkapnya
                  <i
                    data-feather="arrow-right"
                    class="bg-primary-1 text-white inline transition-all group-hover:bg-primary-2 group-hover:translate-x-1"
                  ></i>
                </button>
              </a>
            </span>
          </div>
          <img
            src="../../assets/x.svg"
            alt=""
            class="h-6 w-6 transform transition-transform rotate-45 mt-2"
            :class="{ 'rotate-90': isTextVisible }"
          />
        </div>
      </div>
    </button>
  </div>
</template>
  
  <script>
export default {
  name: "KomitmenList",
  props: {
    number: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    textToAdd: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isTextVisible: false,
    };
  },
  methods: {
    toggle() {
      this.isTextVisible = !this.isTextVisible;
    },
  },
};
</script>
  
  <style scoped>
.rotate-90 {
  transform: rotate(90deg);
}
.w-full {
  width: 100%;
}
.max-w-md {
  max-width: 30rem;
}
</style>
  
