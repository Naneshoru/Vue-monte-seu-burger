import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// pode importar css file aqui // import './assets/new.css'

createApp(App)
  .use(router)
  .mount('#app')
