<template>
    <v-card variant="flat">
        <v-card-item>
            <v-breadcrumbs  divider=">" :items="breadCrumbItems" v-if="breadCrumbItems.length">
            </v-breadcrumbs>
        </v-card-item>
        <v-card-item>
            <v-tabs
                v-model="tabs"
                color="primary"
                dark
                slider-color="primary"
            >
                <v-tab value="publishTime">最新商品</v-tab>
                <v-tab value="orderNum">最高人气</v-tab>
                <v-tab value="evaluateNum">评论最多</v-tab>
            </v-tabs>
        </v-card-item>
        <v-card-item v-if="goods.length">
            <v-row justify="start" align="stretch">
                <template v-for="good,index in goods" :key="good.id">
                    <v-col cols="3">
                        <GoodsItemCard :picture="good.picture"
                        :name="good.name" :desc="good.desc" :price="good.price"
                        v-intersection="index != goods.length - 1 ? null : loadNewGoods"></GoodsItemCard>
                    </v-col>
                </template>
            </v-row>
        </v-card-item>
    </v-card>
</template>

<script setup lang='ts'>
import {ref} from 'vue'
import useCategoryStore from '@/stores/modules/category';
import { onMounted } from 'vue';
import type { Ref } from 'vue';
import { watchEffect } from 'vue';
import type {GetSecondCategoryGoodsRequestData, SecondCategoryGoodsData} from '@/api/types/category'
import { watch } from 'vue';
const categoryStore = useCategoryStore()
const props = defineProps({
    id: {
        type:String,
        required:true
    }
})

// 获取二级种类的面包屑数据
const breadCrumbItems = ref(['首页'])
onMounted(async () => {
    const resp = await categoryStore.getSecondCategoryNav(props.id)
    breadCrumbItems.value.push(resp.parentName)
    breadCrumbItems.value.push(resp.name)
})

// 顶部tabs切换的值
const tabs:Ref<string> = ref("publishTime")
// 获取二级分类下的商品的请求数据
const reqGoodsData:Ref<GetSecondCategoryGoodsRequestData> = ref({
    categoryId: props.id,
    page: 1,
    pageSize: 20,
    sortField: tabs.value
})
const goods:Ref<SecondCategoryGoodsData[]> = ref([])
watch(() => tabs.value, async () => {
    reqGoodsData.value.page = 1
    reqGoodsData.value.sortField = tabs.value
    const response = await categoryStore.getSecondCategoryGoods(reqGoodsData.value)
    goods.value = response.items
}, {
    immediate:true
})

// 无线滚动效果
const loadNewGoods = async () => {
    reqGoodsData.value.page += 1
    const response = await categoryStore.getSecondCategoryGoods(reqGoodsData.value)
    if (response.items.length !== 0) {
        goods.value = [...goods.value, ...response.items]
    }
}
</script>

<style scoped lang=''>
</style>