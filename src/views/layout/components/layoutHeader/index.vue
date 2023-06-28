<template>
  <v-card-item style="position: relative; z-index: 10;">
    <v-row justify="center" align="center">
      <v-col cols="2">
        <img src="/src/assets/images/logo.png" style="background: none" alt="" />
      </v-col>
      <v-col cols="7">
        <v-btn-toggle>
          <v-btn class="text-h6 ms-2" :to="{ name: 'home' }" active-class="none" :ripple="none">{{
            '首页'
          }}</v-btn>
          <v-btn
            class="text-h6 ms-2"
            v-for="category in category_list"
            :key="category.id"
            :to="{ name: 'category', params: { id: category.id } }"
            color="primary"
            >{{ category.name }}</v-btn
          >
        </v-btn-toggle>
      </v-col>
      <v-col cols="3" class="d-flex flex-row align-stretch justify-center">
        <v-text-field
          label="搜一搜"
          density="compact"
          hide-details
          bg-color="white"
          variant="outlined"
        ></v-text-field>
        <v-menu direction="bottom">
          <template #activator="{props}">
            <v-icon v-bind="props" icon="mdi-cart-outline" size="44" class="ms-5"></v-icon>
          </template>
          <v-card>
            <template v-for="good in cartList" :key="good.id">
              <v-card-item>
                <GoodsItemCardHorizontal :picture="good.picture"
                :name="good.name" :specs="good.attrValue" :price="good.price"
                :count="good.count" :skuId="good.skuId" @delete="deleteHandler"></GoodsItemCardHorizontal>
              </v-card-item> 
              <v-divider class="ma-2"></v-divider>
            </template>

            <v-card-item >
              <v-row class="px-5 py-3" justify="space-between" align="center" style="background-color: #F6F6F6;">
                <v-col cols="auto">
                  <div class="mb-2">{{  `共${totalCount}件商品` }}</div>
                  <div class="font-weight-bold text-red text-h6">{{ `￥${totalPrice.toFixed(2)}` }}</div>
                </v-col>
                <v-col cols="auto">
                  <v-btn color="success" :to="{name:'cartList'}">去购物车结算</v-btn>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
  </v-card-item>
</template>

<script setup lang="ts">
import useLayoutStore from '@/stores/modules/layout'
import useCartStore from '@/stores/modules/cart'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import {ref} from 'vue'
import type {Ref} from 'vue'
import { computed } from 'vue'
const layoutStore = useLayoutStore()
const cartStore = useCartStore()
// 获取所有的category list
const { category_list } = storeToRefs(layoutStore)
// 获取所有的购物车商品
const { cartList } = storeToRefs(cartStore)
// 获取总的商品数量和价格
const totalCount:Ref<number> = computed(() => {
  let result = 0
  cartList.value.forEach(good => {
    result += good.count
  })
  return result
})
const totalPrice:Ref<number> = computed(() => {
  let result = 0.0
  cartList.value.forEach(good => {
    result += good.count * +good.price
  })
  return result
})
console.log(cartList.value);
onMounted(async () => {
  await layoutStore.getCategoryList()
})
// 处理删除购物车相关商品的回调
const deleteHandler = (skuId:string) => {
  console.log(skuId);
  cartStore.deleteCart([skuId])
}
</script>

<style scoped lang="scss">
.headerCart {
  position: absolute;
  left: 0;
  top: 44px;
  z-index: 1000;
}</style>
