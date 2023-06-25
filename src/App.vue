<template>
  <h1>This is the app page!</h1>
</template>

<script setup lang="ts">
import useTestStore from '@/stores/modules/test'
const testStore = useTestStore()
console.log(testStore)
</script>

<style scoped lang=""></style>
