<template>
  <v-app>
    <layoutNav></layoutNav>
    <v-main>
      <v-container class="container">
        <layoutHeader style="z-index: 10;"></layoutHeader>
        <router-view :key="($route.params.id as string)" style="position: relative; z-index: 1;"></router-view>
      </v-container>
    </v-main>
    <layoutFooter></layoutFooter>
  </v-app>
</template>

<script setup lang="ts">
import layoutNav from './components/layoutNav/index.vue'
import layoutFooter from './components/layoutFooter/index.vue'
import layoutHeader from './components/layoutHeader/index.vue'
</script>

<style scoped lang="scss">
.container {
  max-width: 1800px;
}
</style>
