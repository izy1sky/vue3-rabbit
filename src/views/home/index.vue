<template>
    <div style="position: relative;">
        <homeCategory class="home-category"></homeCategory>
        <homeBanners class="home-banners"></homeBanners>
    </div>

    <homeNew></homeNew>
    <homeHot></homeHot>
    <homeProduct></homeProduct>
</template>

<script setup lang='ts'>
import homeBanners from '@/views/home/components/homeBanners/index.vue'
import homeCategory from '@/views/home/components/homeCategory/index.vue'
import homeNew from '@/views/home/components/homeNew/index.vue'
import homeProduct from '@/views/home/components/homeProduct/index.vue'
import homeHot from '@/views/home/components/homeHot/index.vue'
</script>

<style scoped lang='scss'>
.home-category {
    position: relative;
    z-index: 2;
    width: 400px;
}
.home-banners {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 528px !important;
    z-index: 1;
}
</style>