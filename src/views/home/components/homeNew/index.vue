<template>
  <NewAndHotCard :title="'新鲜好物'" :subtitle="'新鲜出炉，品质靠谱'" v-if="newGoodList.length">
    <template #goods>
      <v-row justify="center" align="stretch" dense>
        <template v-for="(good, index) in newGoodList" :key="good.id">
          <v-col cols="3">
            <GoodsItemCard
              :picture="good.picture"
              :name="good.name"
              :desc="good.desc"
              :price="good.price"
              :id="good.id"
            ></GoodsItemCard>
            <!-- <v-card >
                            <v-img cover :src="good.picture"></v-img>
                            <v-card-item class="bg-success text-center new-good-card-button">
                                <div>
                                    {{ good.name }}
                                </div>
                                <div class="text-red">
                                    {{`￥${good.price}` }}
                                </div>
                            </v-card-item>
                        </v-card> -->
          </v-col>
        </template>
      </v-row>
    </template>
  </NewAndHotCard>
</template>

<script setup lang="ts">
import NewAndHotCard from '@/components/NewAndHotCard.vue'
import useLayoutStore from '@/stores/modules/layout'
import type { NewGoodData } from '@/api/types/layout'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
const layoutStore = useLayoutStore()
const newGoodList: Ref<NewGoodData[]> = ref([])
onMounted(async () => {
  newGoodList.value = await layoutStore.getNewGoodsList()
})
</script>

<style scoped lang="scss">
.new-good-card-button {
  min-height: 90px;
}
</style>
