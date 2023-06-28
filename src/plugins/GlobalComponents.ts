import NewAndHotCardVue from '@/components/NewAndHotCard.vue'
import GoodsItemCard from '@/components/GoodsItemCard.vue'
import SpecCard from '@/components/SpecCard.vue'
import GoodsItemCardHorizontal from '@/components/GoodsItemCardHorizontal.vue'
import type { App, Component } from 'vue'
const global_components: {
  [name: string]: Component
} = {
  NewAndHotCardVue,
  GoodsItemCard,
  SpecCard,
  GoodsItemCardHorizontal
}
export default {
  install(app: App) {
    Object.keys(global_components).forEach((key) => {
      app.component(key, global_components[key])
    })
  }
}
