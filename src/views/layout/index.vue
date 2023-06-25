<template>
  <v-app>
    <layoutNav></layoutNav>
    <v-main>
      <layoutHeader></layoutHeader>
      <v-container>
        <router-view></router-view>
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

<style scoped lang=""></style>
