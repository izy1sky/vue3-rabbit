<template>
  <v-card variant="flat">
    <v-row justify="center" align="center">
      <v-col cols="3">
        <v-img :src="picture" height="100" width="100"></v-img>
      </v-col>
      <v-col cols="6">
        <v-card-title class="font-weight-bold">
          {{ name }}
        </v-card-title>
        <v-card-title class="font-weight-light text-body-2">
          <span v-for="spec in specs" :key="spec.name">
            {{ `${spec.name}: ${spec.valueName}` }}
          </span>
        </v-card-title>
      </v-col>
      <v-col cols="2" class="d-flex flex-column align-center">
        <div class="text-red font-weight-bold">{{ `￥${price}` }}</div>
        <div class="font-weight-light">{{ `X${count}` }}</div>
      </v-col>
      <v-col cols="1">
        <v-btn variant="text" icon="mdi-close" @click.prevent="clickHandler"></v-btn>
      </v-col>
    </v-row>
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
  specs: {
    type: Array<any>,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  skuId: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['delete'])
// 点击关闭按钮的回调
const clickHandler = () => {
  emit('delete', props.skuId)
}
</script>

<style scoped lang="scss"></style>
