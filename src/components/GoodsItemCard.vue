<template>
  <v-card variant="flat" height="100%">
    <v-img cover :src="picture"></v-img>
    <v-card-item class="d-flex flex-column align-center justify-center">
      <div class="text-h6 text-center text-no-wrap text-truncate font-weight-bold">{{ name }}</div>
      <div class="text-center text-no-wrap text-truncate my-3">{{ desc }}</div>
      <div class="text-center font-weight-bold text-red text-h5">{{ `￥${price}` }}</div>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  picture: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang=""></style>
