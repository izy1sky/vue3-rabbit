<template>
  <v-card variant="flat">
    <v-card-item>
      <v-breadcrumbs divider=">" v-if="breadCrumbsItems.length" :items="breadCrumbsItems">
      </v-breadcrumbs>
    </v-card-item>
    <v-card-item>
      <cateGoryBanner></cateGoryBanner>
    </v-card-item>

    <v-card-item>
      <v-card-item class="text-h4 font-weight-bold text-center">{{ '全部分类' }}</v-card-item>
      <v-card-item>
        <v-row justify="center" align="stretch">
          <template v-for="children in childrenItems" :key="children.id">
            <v-col>
              <v-card
                height="100%"
                variant="flat"
                :to="{ name: 'secondCategory', params: { id: children.id } }"
              >
                <v-img cover :src="children.picture"></v-img>
                <v-card-item>
                  <div class="text-center">{{ children.name }}</div>
                </v-card-item>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-card-item>
    </v-card-item>

    <v-card-item v-if="childrenItems.length">
      <template v-for="children in childrenItems" :key="children.id">
        <v-card variant="flat" class="mt-5">
          <v-card-item class="text-h4 font-weight-bold text-center">{{
            children.name
          }}</v-card-item>
          <v-card-item>
            <v-row justify="center" align="stretch">
              <template v-for="good in children.goods" :key="good.id">
                <v-col cols="2" class="ma-2">
                  <GoodsItemCard
                    :id="good.id"
                    :picture="good.picture"
                    :name="good.name"
                    :desc="good.desc"
                    :price="good.price"
                  ></GoodsItemCard>
                </v-col>
              </template>
            </v-row>
          </v-card-item>
        </v-card>
      </template>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
import type { CategoryChildrenData } from '@/api/types/category'
import cateGoryBanner from '@/views/category/categoryBanner/index.vue'
import useCategoryStore from '@/stores/modules/category'
const categoryStore = useCategoryStore()
const props = defineProps(['id'])
const breadCrumbsItems: Ref<string[]> = ref([])
const childrenItems: Ref<CategoryChildrenData[]> = ref([])
onMounted(async () => {
  breadCrumbsItems.value.push('首页')
  const resp = await categoryStore.getCategory(props.id)
  breadCrumbsItems.value.push(resp.name)
  childrenItems.value = resp.children
})
</script>

<style scoped lang=""></style>
