import type { App } from 'vue'
import { createVuetify } from 'vuetify'
import type { ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createPinia } from 'pinia'
import router from '@/routers'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
const myCustomLightTheme:ThemeDefinition = {
    dark:false,
    colors:{
        primary:'#27ba9b',
        success:'#1dc779',
        warning:'#ffb302',
        error:'#cf4444',
    }
}
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme:{
    defaultTheme:'myCustomLightTheme',
    themes:{
        myCustomLightTheme
    }
  }
})
const pinia = createPinia()

export const registerPlugins = (app: App) => {
  app.use(router).use(pinia).use(vuetify)
}
