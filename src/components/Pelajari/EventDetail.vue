<template>
    <div class="event-detail p-4">
      <div class="event-info flex flex-row">
        <div class="info-left flex-1 pt-12">
          <div class="flex items-center cursor-pointer mb-4" @click="goBack">
            <router-link :to="link" class="font-bold flex items-center text-primary-1 hover:text-red-500 mb-1 group">
              <i data-feather="arrow-left" class="mr-1 transition-transform transform group-hover:-translate-x-1"></i>
              KEGIATAN
            </router-link>
          </div>
          <h1 class="font-bold font-jakarta" :style="{ fontSize : '35px'}">{{ event.title }}</h1>
          <div class="flex items-center mt-2">
            <p class="rounded-xl font-jakarta font-bold text-primary-1 bg-primary-5/35 px-4 py-1"> {{ event.category }}</p>
            <p class="font-jakarta font-bold text-neutral-2 ml-9" :style="{ fontSize : '14px'}"> {{ event.date }}</p>
          </div>
          <div class="mt-9" style="max-width: 560px;">
            <p class="font-inter text-neutral-2 font-medium" style="line-height: 2.5; font-size: 13px;">{{ event.description }}</p>
          </div>
        </div>
        <div class="info-right flex-1">
          <img :src="event.fotoDetail" :alt="event.title" class="w-[635px] h-[463px] rounded-3xl"/>
        </div>
      </div>
      <div class="h-[calc(12vh)]"></div>
      <div class="font-jakarta font-bold text-neutral-1" :style="{ fontSize : '30px'}">Kegiatan OGI Lainnya</div>
      <div class="related-events grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
            <div
            v-for="relatedEvent in relatedEvents"
            :key="relatedEvent.id"
            class="related-event-card flex flex-col md:flex-row border border-neutral-5 rounded-3xl shadow-md"
            >
            <router-link :to="'/pelajari/kegiatan/' + relatedEvent.id" class="flex flex-col md:flex-row w-full">
                <div class="related-event-image">
                <img 
                    :src="relatedEvent.image" 
                    :alt="relatedEvent.title" 
                    class=" w-[184px] h-[169px] object-cover rounded-l-3xl" />
                </div>
                <div class="related-event-content ml-4 flex flex-col">
                    <p class="font-inter font-semibold text-primary-1 mt-4 " :style="{ fontSize : '16px'}"> {{ relatedEvent.category }}</p>
                    <h2 class="font-semibold font-jakarta mt-4" :style="{ fontSize : '20px'}">{{ relatedEvent.title }}</h2>
                    <p class="font-jakarta font-medium text-neutral-2 pb-4" :style="{ fontSize: '14px', marginTop: 'auto'}"> {{ relatedEvent.date }}</p>
                </div>
            </router-link>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import events from '../../data/data.js';
  
  export default {
    data() {
      return {
        event: {},
        relatedEvents: [],
        link: '/pelajari/kegiatan'
      };
    },
    computed: {
      eventId() {
        return parseInt(this.$route.params.id);
      }
    },
    methods: {
      fetchEventData() {
        const eventId = this.eventId;
        this.event = events.find(event => event.id === eventId);
  
        const relatedEvents = [];
        if (eventId > 1) {
          relatedEvents.push(events.find(event => event.id === eventId - 1));
        }
        if (eventId < events.length) {
          relatedEvents.push(events.find(event => event.id === eventId + 1));
        }
  
        this.relatedEvents = relatedEvents;
      }
    },
    mounted() {
      this.fetchEventData();
    },
    watch: {
      '$route.params.id': 'fetchEventData'
    }
  };
  </script>
  
  <style scoped>
  /* Gaya tambahan jika diperlukan */
  </style>
  