<template>
  <h1>This is the app page!</h1>
  <v-btn color="primary">text</v-btn>
  <v-btn color="#27ba9b">text</v-btn>
</template>

<script setup lang="ts">
import useTestStore from '@/stores/modules/test'
import { reqTest } from '@/api/testApi'
const testStore = useTestStore()
console.log(testStore)
reqTest().then((res) => console.log(res))
</script>

<style scoped lang=""></style>
