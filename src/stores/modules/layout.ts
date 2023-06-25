import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import {
  reqGetCategoryList,
  reqGetBanner,
  reqGetNew,
  reqGetHot,
  reqGetGoods
} from '@/api/modules/layout'
import type { CategoryData, BannerData } from '@/api/types/layout'

const useLayoutStore = defineStore('layout', () => {
  // state
  const category_list: Ref<CategoryData[]> = ref([])

  const banner_list: Ref<BannerData[]> = ref([])

  // actions
  const getCategoryList = async () => {
    const resp = await reqGetCategoryList()
    category_list.value = resp.result
  }
  const getBannerList = async (index: string = '1') => {
    const resp = await reqGetBanner(index)
    banner_list.value = resp.result
  }
  const getNewGoodsList = async () => {
    const resp = await reqGetNew()
    return Promise.resolve(resp.result)
  }
  const getHotGoodsList = async () => {
    const resp = await reqGetHot()
    return Promise.resolve(resp.result)
  }
  const getHomeGoods = async () => {
    const resp = await reqGetGoods()
    return Promise.resolve(resp.result)
  }
  return {
    category_list,
    banner_list,
    getCategoryList,
    getBannerList,
    getNewGoodsList,
    getHotGoodsList,
    getHomeGoods
  }
})

export default useLayoutStore
