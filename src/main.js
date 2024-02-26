import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { mockServer } from './api-mock'
import router from './router'
import { createPinia } from 'pinia'

if (!import.meta.env.VITE_NOMOCK) {
  mockServer()
}

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
