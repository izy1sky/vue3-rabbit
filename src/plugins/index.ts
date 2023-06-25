import type { App } from 'vue'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createPinia } from 'pinia'
import router from '@/routers'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})
const pinia = createPinia()

export const registerPlugins = (app: App) => {
  app.use(router).use(pinia).use(vuetify)
}
