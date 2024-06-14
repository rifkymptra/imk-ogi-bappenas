// src/main.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import feather from 'feather-icons';

import Home from './views/Home.vue';
import App from './App.vue';
import Pelajari from './views/Pelajari/Pelajari.vue';
import Karir from './views/Pelajari/Karir.vue';
import Publikasi from './views/Publikasi/Publikasi.vue';
import Perjalanan from './views/Pelajari/Perjalanan.vue';
import RAN from './views/RAN/RAN.vue';
import Komitmen from './views/RAN/Komitmen.vue';
import News from './views/Publikasi/News.vue';
import Komitmen2 from './views/RAN/Komitmen2.vue';
import Monitoring from './views/RAN/Monitoring.vue';
import Dokumen from './views/RAN/Dokumen.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/pelajari', component: Pelajari }, 
  { path: '/pelajari/karir', component: Karir },
  { path: '/publikasi', component: Publikasi},
  { path: '/pelajari/perjalanan', component: Perjalanan},
  { path: '/publikasi/ogi-news', component: News},
  { path: '/ran', component: RAN},
  { path: '/ran/komitmen', component: Komitmen},
  { path: '/ran/komitmen/2', component: Komitmen2},
  { path: '/ran/monitoring-dan-evaluasi', component: Monitoring},
  { path: '/ran/dokumen-dan-publikasi-data', component: Dokumen}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.config.globalProperties.$feather = feather;

app.use(router);

app.mount('#app');
feather.replace();
