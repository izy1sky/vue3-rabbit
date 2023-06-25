<template>
  <div v-if="products.length">
    <template v-for="product in products" :key="product.id">
      <v-card variant="flat" class="mt-5">
        <v-card-title>
          <span class="text-h4 font-weight-bold">{{ product.name }}</span>
        </v-card-title>
        <v-card-item>
          <v-row align="stretch" justify="center">
            <v-col cols="2">
              <v-img :src="product.picture" cover style="height: 100%">
                <div class="d-flex align-center justify-start fill-height">
                  <span class="text-white px-2 py-5" style="background-color: rgba(0, 0, 0, 0.7)">{{
                    product.name + '馆'
                  }}</span>
                  <span class="text-white px-2 py-5" style="background-color: rgba(0, 0, 0, 0.4)">{{
                    product.saleInfo
                  }}</span>
                </div>
              </v-img>
            </v-col>
            <v-col cols="10">
              <v-row align="stretch" justify="center">
                <template v-for="good in product.goods" :key="good.id">
                  <v-col cols="3">
                    <GoodsItemCard
                      :picture="good.picture"
                      :name="good.name"
                      :desc="good.desc"
                      :price="good.price"
                    ></GoodsItemCard>
                    <!-- <v-card variant="flat">
                                            <v-img cover :src="good.picture"></v-img>
                                            <v-card-item class="d-flex flex-column justify-center align-center">
                                                <div class="font-weight-bold text-no-wrap text-truncate text-center">{{ good.name }}</div>
                                                <div class="font-weight-light text-no-wrap text-truncate text-center my-3">{{ good.desc }}</div>
                                                <div class="text-h5 font-weight-bold text-red text-center">{{ `￥${good.price}` }}</div>
                                            </v-card-item>
                                        </v-card> -->
                  </v-col>
                </template>
              </v-row>
            </v-col>
          </v-row>
        </v-card-item>
      </v-card>
    </template>
  </div>
</template>

<script setup lang="ts">
import useLayoutStore from '@/stores/modules/layout'
import { onMounted } from 'vue'
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { HomeGoodData } from '@/api/types/layout'
import GoodsItemCard from '@/components/GoodsItemCard.vue'
const layoutStore = useLayoutStore()
const products: Ref<HomeGoodData[]> = ref([])
onMounted(async () => {
  products.value = await layoutStore.getHomeGoods()
})
</script>

<style scoped lang=""></style>
