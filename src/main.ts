import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/common.scss'
import { registerPlugins } from '@/plugins/index'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')
