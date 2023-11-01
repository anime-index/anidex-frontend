import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)

app.mount('#app')

const url = {'localhost': 'http://127.0.0.1:8000/',                         //Local host
             'localtunnel': 'https://anidex-api.loca.lt/',                  //Localtunnel redirection
             'deta': 'https://anidex.deta.dev/',                            //Deta deployment (deleted)
             'heroku': 'https://anidex-api-664a9850d6d6.herokuapp.com/'}    //Heroku deployment

app.config.globalProperties.backendUrl = url['heroku']
