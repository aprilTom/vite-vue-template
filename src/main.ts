import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router/index'
import 'vant/es/notify/style';
import './style.css'

const app = createApp(App)
const pinia = createPinia()

app
  .use(pinia)
  .use(router)
  .mount('#app')
