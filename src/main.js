import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)

app.mount('#app')

const url = {'localhost': 'http://127.0.0.1:8000/',     //Local host
             'localtunnel': 'https://anidex.loca.lt/',  //Localtunnel redirection
             'deta': 'https://anidex.deta.dev/'}         //Data deployment

app.config.globalProperties.backendUrl = url['localhost']
