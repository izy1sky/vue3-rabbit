<template>
  <v-card variant="flat">
    <v-card-item>
      <span class="text-h4 font-weight-bold">{{ title }}</span>
      <span class="ms-5 font-weight-light">{{ subtitle }}</span>
    </v-card-item>
    <v-card-item>
      <slot name="goods"></slot>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    required: true,
    type: String
  },
  subtitle: {
    required: true,
    type: String
  }
})
</script>

<style scoped lang=""></style>
