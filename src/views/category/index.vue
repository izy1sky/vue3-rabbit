<template>
  <v-card variant="flat">
    <v-breadcrumbs divider=">" v-if="breadCrumbsItems.length"> </v-breadcrumbs>
  </v-card>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
import useCategoryStore from '@/stores/modules/category'
const categoryStore = useCategoryStore()
const props = defineProps(['id'])
const breadCrumbsItems: Ref<string[]> = ref([])
onMounted(async () => {
  breadCrumbsItems.value.push('首页')
  const resp = await categoryStore.getCategory(props.id)
  breadCrumbsItems.value.push(resp.name)
})
</script>

<style scoped lang=""></style>
