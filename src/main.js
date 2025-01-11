import { createApp } from 'vue'
import './style.css'
import './assets/icomoon/style.css'
import App from './App.vue'
import Vue3Autocounter from 'vue3-autocounter'
import router from './router'

const app = createApp(App)
app.component('vue3-autocounter', Vue3Autocounter)
app.use(router)
app.mount('#app')



