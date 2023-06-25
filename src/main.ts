import { createApp } from 'vue'
import App from './App.vue'
import usePlugins from '@/plugins/index'

const app = createApp(App)
usePlugins(app)
app.mount('#app')
