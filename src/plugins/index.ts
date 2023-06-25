import type { App } from 'vue'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'
import router from '@/routers'
export default (app: App) => {
  const vuetify = createVuetify()
  const pinia = createPinia()
  app.use(vuetify).use(pinia).use(router)
}
