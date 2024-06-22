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
import Komitmen1 from './views/RAN/Komitmen/Komitmen1.vue';
import Komitmen2 from './views/RAN/Komitmen/Komitmen2.vue';
import Komitmen3 from './views/RAN/Komitmen/Komitmen3.vue';
import Komitmen4 from './views/RAN/Komitmen/Komitmen4.vue';
import Komitmen5 from './views/RAN/Komitmen/Komitmen5.vue';
import Komitmen6 from './views/RAN/Komitmen/Komitmen6.vue';
import Komitmen7 from './views/RAN/Komitmen/Komitmen7.vue';
import Komitmen8 from './views/RAN/Komitmen/Komitmen8.vue';
import Komitmen9 from './views/RAN/Komitmen/Komitmen9.vue';
import Komitmen10 from './views/RAN/Komitmen/Komitmen10.vue';
import Komitmen11 from './views/RAN/Komitmen/Komitmen11.vue';
import Komitmen12 from './views/RAN/Komitmen/Komitmen12.vue';
import Komitmen13 from './views/RAN/Komitmen/Komitmen13.vue';
import Komitmen14 from './views/RAN/Komitmen/Komitmen14.vue';
import Komitmen15 from './views/RAN/Komitmen/Komitmen15.vue';
import Monitoring from './views/RAN/Monitoring.vue';
import Dokumen from './views/RAN/Dokumen.vue';
import Sekretariat from './views/Pelajari/Sekretariat.vue';
import Kegiatan from './views/Pelajari/Kegiatan.vue';
import EventDetail from './views/Pelajari/Kegiatan2.vue';
import News from './views/Publikasi/News.vue';
import Publikasi from './views/Publikasi/Publikasi.vue';
import Laporan from './views/Publikasi/Laporan.vue';
import IRM from './views/Publikasi/IRM.vue';
import Infografis from './views/Publikasi/Infografis.vue';
import OMS from './views/RAN/OMS.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/pelajari', component: Pelajari }, 
  { path: '/pelajari/karir', component: Karir },
  { path: '/pelajari/sekretariat', component: Sekretariat},
  { path: '/pelajari/kegiatan', component: Kegiatan},
  { path: '/pelajari/perjalanan', component: Perjalanan},
  { path: '/ran', component: RAN},
  { path: '/ran/komitmen', component: Komitmen},
  { path: '/ran/komitmen/1', component: Komitmen1},
  { path: '/ran/komitmen/2', component: Komitmen2},
  { path: '/ran/komitmen/3', component: Komitmen3},
  { path: '/ran/komitmen/4', component: Komitmen4},
  { path: '/ran/komitmen/5', component: Komitmen5},
  { path: '/ran/komitmen/6', component: Komitmen6},
  { path: '/ran/komitmen/7', component: Komitmen7},
  { path: '/ran/komitmen/8', component: Komitmen8},
  { path: '/ran/komitmen/9', component: Komitmen9},
  { path: '/ran/komitmen/10', component: Komitmen10},
  { path: '/ran/komitmen/11', component: Komitmen11},
  { path: '/ran/komitmen/12', component: Komitmen12},
  { path: '/ran/komitmen/13', component: Komitmen13},
  { path: '/ran/komitmen/14', component: Komitmen14},
  { path: '/ran/komitmen/15', component: Komitmen15},
  { path: '/ran/monitoring-dan-evaluasi', component: Monitoring},
  { path: '/ran/dokumen-dan-publikasi-data', component: Dokumen},
  { path: '/ran/monitoring-dan-evaluasi/oms', component: OMS},
  { path: '/publikasi', component: Publikasi},
  { path: '/publikasi/ogi-news', component: News},
  { path: '/publikasi/laporan-dan-kajian', component: Laporan},
  { path: '/publikasi/irm', component: IRM},
  { path: '/publikasi/infografis', component: Infografis},
  { path: '/pelajari/kegiatan/:id', component: EventDetail },
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
