<template>
    <NewAndHotCard :title="'人气推荐'" :subtitle="'人气推荐，不容错过'" v-if="hotGoodList.length">
        <template #goods>
            <v-row justify="center" align="center">
                <template v-for="good,index in hotGoodList" :key="good.id">
                    <v-col cols="3">
                        <v-card>
                            <img v-lazy="good.picture" />
                            <v-card-item class="bg-success text-center new-good-card-button">
                                <div>
                                    {{ good.title }}
                                </div>
                                <div>
                                    {{ good.alt }}
                                </div>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </template>
            </v-row>
        </template>
    </NewAndHotCard>
</template>

<script setup lang="ts">
import NewAndHotCard from '@/components/NewAndHotCard.vue';
import useLayoutStore from '@/stores/modules/layout';
import type { HotGoodData } from '@/api/types/layout';
import type { Ref } from 'vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
const layoutStore = useLayoutStore()
const hotGoodList:Ref<HotGoodData[]> = ref([])
onMounted(async () => {
    hotGoodList.value = await layoutStore.getHotGoodsList()
})
</script>

<style scoped lang=""></style>
