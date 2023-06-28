<template>
  <v-snackbar
    v-model="snackbar"
    multi-line
    timeout="3000"
    class="text-center text-red"
  >
    {{ text }}
    <template #actions>
      <v-btn class="text-none" color="blue" variant="text" @click="snackbar=false" icon="mdi-close"></v-btn>
    </template>
  </v-snackbar>
  <router-view></router-view>
</template>

<script setup lang="ts">
import useUserStore from '@/stores/modules/user'
import { storeToRefs } from 'pinia';
import { watch,ref } from 'vue';
import type {Ref} from 'vue'
const userStore = useUserStore()
const {errorMessage} = storeToRefs(userStore)
const snackbar:Ref<boolean> = ref(false)
const text:Ref<string> = ref("")
watch(() => errorMessage.value, (newValue)=> {
  if (newValue) {
    snackbar.value = true
    text.value = newValue
    userStore.setError('')
  }
})
</script>

<style scoped lang="scss"></style>
