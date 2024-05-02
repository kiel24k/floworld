import { createApp } from 'vue'

import { createPinia } from 'pinia'
import router from './router'
import './axios'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')
