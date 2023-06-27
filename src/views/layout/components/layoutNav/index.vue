<template>
  <v-app-bar theme="dark">
    <v-container grid-list-xs class="d-flex justify-end align-center">
      <template v-if="token">
        <v-btn variant="text">周杰伦</v-btn>
        <span class="mx-2">|</span>
        <v-btn variant="text" @click="logoutHandler">退出登录</v-btn>
        <span class="mx-2">|</span>
        <v-btn variant="text">我的订单</v-btn>
        <span class="mx-2">|</span>
        <v-btn variant="text">会员中心</v-btn>
      </template>
      <template v-else>
        <v-btn variant="text" :to="{name:'login'}">请先登录</v-btn>
        <span class="mx-2">|</span>
        <v-btn variant="text">帮助中心</v-btn>
        <span class="mx-2">|</span>
        <v-btn variant="text">关于我们</v-btn>
      </template>

    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import useUserStore from '@/stores/modules/user'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const $router = useRouter()
const userStore = useUserStore()
const {token} = storeToRefs(userStore)
// 退出登录
const logoutHandler = () => {
  token.value = ""
  $router.push({name: 'login'})
}
</script>

<style scoped lang=""></style>
