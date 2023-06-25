<template>
  <v-carousel 
  v-if="banner_list.length" 
  cycle 
  hide-delimiter-background 
  show-arrows="hover">
    <template v-for="banner in banner_list" :key="banner.id">
      <v-carousel-item :src="banner.imgUrl" cover></v-carousel-item>
    </template>
  </v-carousel>
</template>

<script setup lang="ts">
import useLayoutStore from '@/stores/modules/layout'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
const layoutStore = useLayoutStore()
const { banner_list } = storeToRefs(layoutStore)
onMounted(async () => {
  await layoutStore.getBannerList()
})
</script>

<style scoped lang=""></style>
