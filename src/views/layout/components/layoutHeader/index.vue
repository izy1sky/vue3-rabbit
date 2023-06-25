<template>
  <v-card-item>
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
      <v-col cols="3">
        <v-text-field
          label="搜一搜"
          density="compact"
          hide-details
          bg-color="white"
          variant="outlined"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card-item>
</template>

<script setup lang="ts">
import useLayoutStore from '@/stores/modules/layout'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
const layoutStore = useLayoutStore()
// 获取所有的category list
const { category_list } = storeToRefs(layoutStore)
onMounted(async () => {
  await layoutStore.getCategoryList()
})
</script>

<style scoped lang=""></style>
