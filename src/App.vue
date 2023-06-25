<template>
  <h1>This is the app page!</h1>
  <v-btn color="primary" icon="mdi-home"></v-btn>
</template>

<script setup lang="ts">
import useTestStore from '@/stores/modules/test'
const testStore = useTestStore()
console.log(testStore)
</script>

<style scoped lang=""></style>
