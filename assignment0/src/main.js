import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap";

// Import our custom CSS
import "./assets/scss/styles.scss";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
