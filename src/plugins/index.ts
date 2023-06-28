import type { App } from 'vue'
import { createVuetify } from 'vuetify'
import type { ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import pinia from '@/plugins/pinia'
import router from '@/routers'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import directives from './directives'
import GlobalComponents from './GlobalComponents'
const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#27ba9b',
    success: '#1dc779',
    warning: '#ffb302',
    error: '#cf4444'
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
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    }
  }
})

export const registerPlugins = (app: App) => {
  app.use(router).use(pinia).use(vuetify).use(directives).use(GlobalComponents)
}
