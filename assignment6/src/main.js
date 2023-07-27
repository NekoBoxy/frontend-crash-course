// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';
// 載入自定義的 css
import './assets/all.css';

import { createApp } from 'vue';
// import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// app.use(createPinia());
app.use(router);


app.mount('#app');