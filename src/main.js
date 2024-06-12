// src/main.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import feather from 'feather-icons';

import Home from './views/Home.vue';
import App from './App.vue';
import Pelajari from './views/Pelajari.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/pelajari', component: Pelajari } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);

app.mount('#app');
feather.replace();
