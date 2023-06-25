<template>
  <div>
    <v-list class="categoryList" theme="dark" lines="two">
      <template v-for="(category, index) in category_list" :key="category.id">
        <v-list-item
          color="success"
          class="text-center"
          :value="category.id"
          @mouseover.stop="mouseoverHandler(index)"
          @mouseout.stop="mouseoutHandler(index)"
        >
          <template #title>
            <span class="text-h6">{{ category.name }}</span>
            <span class="mx-2">{{ category.children[0].name }}</span>
            <span>{{ category.children[1].name }}</span>
          </template>
        </v-list-item>
      </template>
    </v-list>
    <v-card class="childrenCard" elevation="10" v-show="isShow">
      <v-card-item class="mt-5 ms-5">
        <span class="text-h5">分类推荐</span>
        <span class="ms-2">根据您的购买或浏览记录推荐</span>
      </v-card-item>
      <v-card-item v-if="detailCategory">
        <v-card>
          <v-row justify="start" align="center">
            <template v-for="item in detailCategory['goods']" :key="item.id">
              <v-col cols="4" class="pa-3">
                <v-card class="goodsCard">
                  <v-row justify="center" align="center">
                    <v-col cols="4">
                      <v-img :src="item.picture" cover></v-img>
                    </v-col>
                    <v-col cols="8">
                      <div class="font-weight-bold">{{ item.name }}</div>
                      <div class="">{{ item.desc }}</div>
                      <div class="text-red text-h6">{{ `￥${item.price}` }}</div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </template>
          </v-row>
        </v-card>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import useLayoutStore from '@/stores/modules/layout'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { watchEffect } from 'vue'
const layoutStore = useLayoutStore()
const { category_list } = storeToRefs(layoutStore)
const detailCategory = ref()
const isShow = ref(false)
const mouseoverHandler = (index: number) => {
  detailCategory.value = category_list.value[index]
  isShow.value = true
}

const mouseoutHandler = (index: number) => {
  isShow.value = false
}
watchEffect(() => {
  console.log(category_list.value)
})
</script>

<style scoped lang="scss">
.categoryList {
  background-color: rgba($color: #000000, $alpha: 0.7);
}
.childrenCard {
  position: absolute;
  left: 400px;
  top: 0px;
  width: 1000px;
  height: 100%;
}

.goodsCard {
  height: 130px;
}
</style>
