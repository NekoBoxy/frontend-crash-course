import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap";

// import Swiper bundle with all modules installed
// eslint-disable-next-line no-unused-vars
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

// Import our custom CSS
import "./assets/scss/styles.scss";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
