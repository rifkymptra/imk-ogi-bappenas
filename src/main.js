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
import News from './views/Publikasi/News.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/pelajari', component: Pelajari }, 
  { path: '/karir', component: Karir },
  { path: '/publikasi', component: Publikasi},
  { path: '/publikasi/ogi-news', component: News}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);

app.mount('#app');
feather.replace();
