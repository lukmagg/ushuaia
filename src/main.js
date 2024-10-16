import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const pinia = createPinia()

const MyApp = createApp(App)

MyApp.use(pinia)
MyApp.mount('#app')
