import { defineStore } from 'pinia'
import { reqGetCategory, reqGetSecondCategory, reqGetSecondCategoryGoods } from '@/api/modules/category'
import { reqGetBanner } from '@/api/modules/layout'
import type { GetSecondCategoryGoodsRequestData } from '@/api/types/category'
const useCategoryStore = defineStore('category', () => {
  // states

  // actions
  // 获取一级分类下的所有二级分类和对应的商品
  const getCategory = async (id: string) => {
    const response = await reqGetCategory(id)
    return Promise.resolve(response.result)
  }
  // 获取一级分类下的轮播图
  const getBannerList = async (index: string = '2') => {
    const resp = await reqGetBanner(index)
    return Promise.resolve(resp.result)
  }
  // 获取二级分类的面包屑
  const getSecondCategoryNav = async (id: string) => {
    const response = await reqGetSecondCategory(id)
    return Promise.resolve(response.result)
  }
  // 获取二级分类下的货物
  const getSecondCategoryGoods = async (data:GetSecondCategoryGoodsRequestData) => {
    const response = await reqGetSecondCategoryGoods(data)
    return response.result
  }
  return {
    getCategory,
    getBannerList,
    getSecondCategoryNav,
    getSecondCategoryGoods
  }
})

export default useCategoryStore
