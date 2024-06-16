import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import feather from 'feather-icons';

import Home from './views/Home.vue';
import App from './App.vue';
import Pelajari from './views/Pelajari/Pelajari.vue';
import Karir from './views/Pelajari/Karir.vue';
import Perjalanan from './views/Pelajari/Perjalanan.vue';
import RAN from './views/RAN/RAN.vue';
import Komitmen from './views/RAN/Komitmen.vue';
import Komitmen2 from './views/RAN/Komitmen2.vue';
import Monitoring from './views/RAN/Monitoring.vue';
import Dokumen from './views/RAN/Dokumen.vue';
import Sekretariat from './views/Pelajari/Sekretariat.vue';
import Komitmen1 from './views/RAN/Komitmen/Komitmen1.vue';
import Kegiatan from './views/Pelajari/Kegiatan.vue';
// Publikasi
import News from './views/Publikasi/News.vue';
import Publikasi from './views/Publikasi/Publikasi.vue';
import Laporan from './views/Publikasi/Laporan.vue';
import IRM from './views/Publikasi/IRM.vue';
import Infografis from './views/Publikasi/Infografis.vue';

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
  { path: '/ran/dokumen-dan-publikasi-data', component: Dokumen},
  { path: '/pelajari/sekretariat', component: Sekretariat},
  { path: '/ran/komitmen/1', component: Komitmen1},
  { path: '/pelajari/kegiatan', component: Kegiatan},
  { path: '/publikasi/laporan-dan-kajian', component: Laporan},
  { path: '/publikasi/irm', component: IRM},
  { path: '/publikasi/infografis', component: Infografis},
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
