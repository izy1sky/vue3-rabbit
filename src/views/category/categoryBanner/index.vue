<template>
    <v-carousel v-if="banner_list.length"
    cycle 
    hide-delimiter-background 
    show-arrows="hover">
        <template v-for="banner in banner_list" :key="banner">
        <v-carousel-item :src="banner" cover></v-carousel-item>
        </template>
    </v-carousel>
</template>

<script setup lang='ts'>
import type {Ref} from 'vue'
import {ref} from 'vue'
import useCategoryStore from '@/stores/modules/category'
import { onMounted } from 'vue';
const categoryStore = useCategoryStore()
const banner_list:Ref<string[]> = ref([])
onMounted(async() => {
    const response = await categoryStore.getBannerList()
    banner_list.value = response.map((item) => item.imgUrl)
})
</script>

<style scoped lang=''>
</style>