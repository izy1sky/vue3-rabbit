<template>
    <v-card variant="flat" v-if="specs">
        <template v-for="spec in specs" :key="spec.id">
            <v-card-item class="d-flex flex-row align-center justify-start flex-nowrap">
                <span>{{ spec.name }}</span>
                <v-btn-toggle v-model="specsValue[spec.name]" class="ms-5">
                    <template v-for="value in spec.values" :key="value.name">
                        <v-btn height="64" class="v-btn" :value="value.name" @click.stop="clickHandler">
                            <div  v-if="value.picture">
                                <v-img height="64" :src="value.picture"></v-img>
                            </div>
                            
                            <span v-else>{{ value.name }}</span>
                        </v-btn>
                        <!-- <v-btn :value="value.name">{{ value.name }}</v-btn> -->
                    </template>
                </v-btn-toggle>
            </v-card-item>
        </template>
    </v-card>
</template>

<script setup lang='ts'>
import { watchEffect } from 'vue';
import { computed } from 'vue';
import { watch } from 'vue';
import {ref} from 'vue'
const props = defineProps(['specs', 'skus'])
const emit = defineEmits(['change'])
// 选择的spec的属性
const specsValue:any = ref({})
const spec = computed(() => {
    return props.skus.find((sku) => {
        const property = sku.specs.reduce((acc, item) => {
            acc[item.name] = item.valueName;
            return acc;
        }, {})
        return JSON.stringify(property) === JSON.stringify(specsValue.value)
    })
})
const clickHandler = () => {
    if (spec.value) {
        emit('change', spec.value)
    }
}
</script>

<style scoped lang='scss'>
</style>