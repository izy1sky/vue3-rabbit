<template>
  <v-card variant="flat">
    <v-card-item>
      <v-breadcrumbs divider=">" :items="breadCrumbsItems" v-if="breadCrumbsItems.length">
      </v-breadcrumbs>
    </v-card-item>
  </v-card>

  <v-card v-if="goodInfo" class="pa-5">
    <v-row justify="center" align="stretch">
      <v-col cols="6">
        <v-row justify="center" align="stretch">
          <v-col cols="10">
            <div class="father-box" style="position: relative">
              <v-img
                class="big-image"
                :src="imgUrl"
                cover
                @mousemove.stop="mousemoveHandler"
                @mouseleave.stop="mouseleaveHandler"
              ></v-img>
              <div class="transparent-box" v-show="isShow"></div>
              <div class="magnify-box" v-show="isShow"></div>
            </div>
          </v-col>
          <v-col cols="2" class="d-flex flex-column justify-space-around align-center">
            <template v-for="picture in goodInfo.mainPictures" :key="picture">
              <div class="img-box pa-2" @mouseenter.stop="mouseoverHandler">
                <v-img :src="picture"></v-img>
              </div>
            </template>
          </v-col>
        </v-row>
        <v-row justify="center" align="stretch">
          <v-col cols="3">
            <v-card variant="flat">
              <v-card-item class="text-center font-weight-light">销售人气</v-card-item>
              <v-card-item class="text-center text-red text-h6 font-weight-bold">{{
                goodInfo.salesCount + '+'
              }}</v-card-item>
              <v-card-actions class="justify-center">
                <v-btn variant="text" prepend-icon="mdi-flag">销售人气</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-divider vertical inset></v-divider>
          <v-col cols="3">
            <v-card variant="flat">
              <v-card-item class="text-center font-weight-light">商品评价</v-card-item>
              <v-card-item class="text-center text-red text-h6 font-weight-bold">{{
                goodInfo.commentCount + '+'
              }}</v-card-item>
              <v-card-actions class="justify-center">
                <v-btn variant="text" prepend-icon="mdi-chat">查看评价</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-divider vertical inset></v-divider>
          <v-col cols="3">
            <v-card variant="flat">
              <v-card-item class="text-center font-weight-light">收藏人气</v-card-item>
              <v-card-item class="text-center text-red text-h6 font-weight-bold">{{
                goodInfo.collectCount + '+'
              }}</v-card-item>
              <v-card-actions class="justify-center">
                <v-btn variant="text" prepend-icon="mdi-star">收藏商品</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-divider vertical inset></v-divider>
          <v-col cols="3">
            <v-card variant="flat">
              <v-card-item class="text-center font-weight-light">品牌信息</v-card-item>
              <v-card-item class="text-center text-red text-h6 font-weight-bold">{{
                goodInfo.brand.name
              }}</v-card-item>
              <v-card-actions class="justify-center">
                <v-btn variant="text" prepend-icon="mdi-home">品牌主页</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" class="d-flex flex-column align-start justify-start text-body-1">
        <v-card variant="flat" width="100%">
          <v-card-item
            ><div class="font-weight-bold">{{ goodInfo.name }}</div></v-card-item
          >
          <v-card-item
            ><div class="font-weight-light">{{ goodInfo.desc }}</div></v-card-item
          >
          <v-card-item>
            <div>
              <span class="font-weight-bold text-red text-body-6">{{ `￥${goodInfo.price}` }}</span>
              <span class="ms-2 text-caption text-decoration-line-through">{{
                `￥${goodInfo.oldPrice}`
              }}</span>
            </div>
          </v-card-item>
        </v-card>
        <v-card variant="tonal" width="100%">
          <v-card-item>
            <span class="text-caption">促销</span>
            <span class="ms-2">12月好物放送，App内购买直降120元</span>
          </v-card-item>
          <v-card-item class="align-center">
            <span class="text-caption">服务</span>
            <span class="ms-2">·无忧退货&nbsp;&nbsp;·快速退款&nbsp;&nbsp;·免费包邮</span
            ><span class="ms-5 text-blue">了解详情</span>
          </v-card-item>
        </v-card>
        <SpecCard
          class="mt-5"
          :specs="goodInfo.specs"
          :skus="goodInfo.skus"
          @change="changeSpecsHandler"
        ></SpecCard>
      </v-col>
    </v-row>
  </v-card>

  <v-row justify="center" align="start" class="mt-5" v-if="goodInfo">
    <v-col cols="10" class="pa-2">
      <v-card class="pa-5" v-if="goodInfo">
        <v-card-item class="font-weight-bold text-h4">商品详情</v-card-item>
        <v-card-item class="mt-10">
          <v-row align="stretch" justify="start">
            <v-col v-for="property in goodInfo.details.properties" :key="property.name" cols="6">
              <span class="text-body-2">{{ property.name }}</span>
              <span class="ms-10">{{ property.value }}</span>
            </v-col>
          </v-row>
        </v-card-item>
        <v-card-item>
          <v-img cover v-for="image in goodInfo.details.pictures" :key="image" :src="image"></v-img>
        </v-card-item>
      </v-card>
    </v-col>

    <v-col cols="2" class="pa-2">
      <v-card>
        <v-card-item class="bg-red" justify="center" align="center">
          <div class="my-5 font-weight-bold text-h5">24小时热榜</div>
        </v-card-item>
        <GoodsItemCard
          class="my-5"
          v-for="good in goodInfo.hotByDay"
          :key="good.id"
          :picture="good.picture"
          :name="good.name"
          :desc="good.desc"
          :price="good.price"
        ></GoodsItemCard>
      </v-card>

      <v-card class="mt-10">
        <v-card-item class="bg-red" justify="center" align="center">
          <div class="my-5 font-weight-bold text-h5">每周热榜</div>
        </v-card-item>
        <GoodsItemCard
          class="my-5"
          v-for="good in goodInfo.similarProducts"
          :key="good.id"
          :picture="good.picture"
          :name="good.name"
          :desc="good.desc"
          :price="good.price"
        ></GoodsItemCard>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import useCategoryStore from '@/stores/modules/category'
import type { Ref } from 'vue'
import { onMounted } from 'vue'
import type { GoodInfoData } from '@/api/types/category'
import { ref } from 'vue'
import directives from '@/plugins/directives'
import { nextTick } from 'vue'
const categoryStore = useCategoryStore()
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
// 获得面包屑信息
const breadCrumbsItems: Ref<string[]> = ref(['首页'])
// 主题大图的url
const imgUrl: Ref<string> = ref('')
// 获得物品的详细信息
const goodInfo: Ref<GoodInfoData | undefined> = ref()
onMounted(async () => {
  goodInfo.value = await categoryStore.getGoodInfo(props.id)
  breadCrumbsItems.value.push(goodInfo.value.categories[0].name)
  breadCrumbsItems.value.push(goodInfo.value.categories[1].name)
  breadCrumbsItems.value.push(goodInfo.value.name)
  imgUrl.value = goodInfo.value.mainPictures[0]
  nextTick(() => {
    const box = document.querySelector('.img-box')
    console.log(box)
    box?.classList.toggle('selected-box')
  })
})

// 处理图片被选中的情况
const mouseoverHandler = ($event: Event) => {
  imgUrl.value = ($event.target as HTMLElement).querySelector('img')?.src as string
  document
    .querySelectorAll('div.selected-box')
    .forEach((el) => el.classList.toggle('selected-box'))($event.target as HTMLElement)
    .classList.add('selected-box')
}

// 处理在图片中移动的事件
const isShow = ref(false)
const mousemoveHandler = (event: MouseEvent) => {
  isShow.value = true
  let mouseX = event.clientX
  let mouseY = event.clientY

  // 元素的位置
  const element = event.target as HTMLElement
  let rect = element.getBoundingClientRect()
  let elementX = rect.left
  let elementY = rect.top

  // 鼠标在元素内的相对位置
  let relativeX = mouseX - elementX
  let relativeY = mouseY - elementY

  // 计算transparent-box的长宽
  const transparentBox: HTMLElement = document.querySelector('div.transparent-box') as HTMLElement
  let transparentBoxWidth = transparentBox.getBoundingClientRect().width
  let transparentBoxHeight = transparentBox.getBoundingClientRect().height
  // 当偏移量处于合理范围内时，赋值
  const width = Math.min(
    Math.max(relativeX - 0.5 * +transparentBoxWidth, 0),
    rect.width - transparentBoxWidth
  )
  const height = Math.min(
    Math.max(relativeY - 0.5 * +transparentBoxHeight, 0),
    rect.height - transparentBoxHeight
  )
  transparentBox.style.left = width + 'px'
  transparentBox.style.top = height + 'px'
}
// 当鼠标离开大图区域时
const mouseleaveHandler = () => {
  isShow.value = false
}

const changeSpecsHandler = (specsValue: any) => console.log(specsValue)
</script>

<style scoped lang="scss">
.selected-box {
  border: 5px solid green;
}

.transparent-box {
  width: 200px;
  height: 200px;
  position: absolute;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 999;
  top: 0;
  left: 0;
  pointer-events: none;
}

.magnify-box {
  position: absolute;
  background-color: white;
}
</style>
