import { createApp } from 'vue'
import './style.css'
import './assets/icomoon/style.css'
import App from './App.vue'
import Vue3Autocounter from 'vue3-autocounter'
import router from './router'
import VueApexCharts from "vue3-apexcharts";
import VclickOutside from './components/directives/VclickOutside.js'

const app = createApp(App)

app.directive('click-outside', VclickOutside);
app.component('vue3-autocounter', Vue3Autocounter)
app.use(VueApexCharts);
app.use(router);
app.mount('#app')



