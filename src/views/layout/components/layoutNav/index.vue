<template>
  <v-app-bar theme="dark">
    <v-container grid-list-xs class="d-flex justify-end align-center">
      <template v-if="token">
        <v-btn variant="text">周杰伦</v-btn>
        <span class="mx-2">|</span>
        <v-btn variant="text" @click="dialog=true">退出登录</v-btn>
        <span class="mx-2">|</span>
        <v-btn variant="text">我的订单</v-btn>
        <span class="mx-2">|</span>
        <v-btn variant="text">会员中心</v-btn>
      </template>
      <template v-else>
        <v-btn variant="text" :to="{ name: 'login' }">请先登录</v-btn>
        <span class="mx-2">|</span>
        <v-btn variant="text">帮助中心</v-btn>
        <span class="mx-2">|</span>
        <v-btn variant="text">关于我们</v-btn>
      </template>
    </v-container>
  </v-app-bar>
  <v-dialog
    v-model="dialog"
    :overlay="true"
    max-width="500px"
    transition="dialog-transition"
  >
    <v-card>
      <v-card-title class="text-h5 font-weight-bold mt-5 d-flex align-center">
        <v-icon icon="mdi-logout" class="me-5"></v-icon>
        确定退出吗
      </v-card-title>
      <v-card-actions class="justify-center">
        <v-btn variant="text" stacked @click.prevent="dialog=false">取消</v-btn>
        <v-btn color="primary" stacked @click.prevent="logoutHandler">确认</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import useUserStore from '@/stores/modules/user'
import { storeToRefs } from 'pinia'
import type { Ref } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const $router = useRouter()
const userStore = useUserStore()
const { token } = storeToRefs(userStore)
const dialog:Ref<boolean> = ref(false)
// 退出登录
const logoutHandler = () => {
  userStore.setToken('')
  $router.push({ name: 'login' })
}
</script>

<style scoped lang=""></style>
