import { createApp } from 'vue'
import App from './App.vue'
import './style/nul.css'
import router from './router/router'

const app = createApp(App)

app.use(router).mount('#app')
