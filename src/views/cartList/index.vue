<template>
    <v-card color="grey-lighten-3">
        <v-card-item style="background-color: white;" class="mt-5">
            <v-data-table
                :headers="headers"
                :items="cartList"
                show-select
                hide-actions
                :select-all="true"
                :item-value="item => item.skuId"
                class="elevation-1"
                v-model="ids"
            >
                <template #item.info="{item}">
                    <div class="d-flex justify-center align-center">
                        <img :src="item.selectable.picture" class="cartPicture" />
                        <span>{{ item.selectable.name }}</span>
                    </div>
                </template>
                <template #item.price="{item}">
                    {{ `￥${item.columns.price}` }}
                </template>
                <template #item.count="{item}">
                        <v-btn variant="text" icon="mdi-minus" :disabled="item.columns.count==1" @click.prevent="minusHandler(item.selectable.skuId, item.columns.count)"></v-btn>
                        <v-btn variant="text" :ripple="false" >{{ item.columns.count }}</v-btn>
                        <v-btn variant="text" icon="mdi-plus" @click.prevent="plusHandler(item.selectable.skuId, item.columns.count)"></v-btn>
                </template>
                <template #item.allPrice="{item}">
                    <span class="text-red font-weight-bold">
                        {{ `￥${(+item.selectable.price * item.selectable.count).toFixed(2)}` }}
                    </span>
                </template>
                <template #item.operator="{item}">
                    <v-btn color="green" variant="text" @click.prevent="deleteHandler(item.selectable.skuId)">删除</v-btn>
                </template>
            </v-data-table>
        </v-card-item>
        <v-card-item style="background-color: white;" class="mt-5">
            <div class="d-flex align-center justify-space-between ma-5">
                <span>
                    <span class="my-3">{{ `共 ${totalCount} 件商品，已选择 ${selectedCount} 件，商品合计：` }}</span>
                    <span class="text-red font-weight-bold">{{ `￥${totalPrice}` }}</span>
                </span>
                <v-btn color="primary" :to="{name:'checkout'}">下单结算</v-btn>
            </div>
            
        </v-card-item>
    </v-card>
</template>

<script setup lang='ts'>
import {ref} from 'vue'
import useCartStore from '@/stores/modules/cart';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import type {Ref} from 'vue'
import { watchEffect } from 'vue';
const cartStore = useCartStore()
const {cartList} = storeToRefs(cartStore)
// 选择的所有的cart
const ids:Ref<string[]> = ref([])
ids.value = cartList.value.filter(item => item.selected).map(item => item.skuId)
watchEffect(() => {})
const totalCount = computed(() => {
    let result = 0
    cartList.value.forEach(item => {
        result += item.count
    })
    return result
})
const selectedCount = computed(() => {
    let result = 0
    cartList.value.forEach((item) => {
        result += item.selected ? item.count : 0
    })
    return result
})
const totalPrice = computed(() => {
    let result = 0
    cartList.value.forEach((item) => {
        result += item.selected ? item.count * +item.price : 0
    })
    return result
})
const headers = ref([
    {
        title: '商品信息',
        key: 'info',
        align:'center',
        sortable:false
    },
    {
        title: '单价',
        key: 'price',
        align:'center',
        sortable:false
    },
    {
        title: '数量',
        key: 'count',
        align:'center',
        sortable:false
    },
    {
        title: '小计',
        key: 'allPrice',
        align:'center',
        sortable:false
    },
    {
        title: '操作',
        key: 'operator',
        align:'center',
        sortable:false
    },
])

const minusHandler = async (skuId:string, count:number) => {
    await cartStore.updateCart(skuId, true, --count)
}

const plusHandler = async (skuId:string, count:number) => {
    await cartStore.updateCart(skuId, true, ++count)
}

const deleteHandler = async(id:string) => {
    await cartStore.deleteCart([id])
}
</script>

<style scoped lang='scss'>
.cartPicture {
    width: 100px;
    height: 100px;
    background: none !important;
}
</style>