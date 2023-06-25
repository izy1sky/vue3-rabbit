import { defineStore } from 'pinia'
import { reqGetCategory } from '@/api/modules/category'
import { reqGetBanner } from '@/api/modules/layout'
const useCategoryStore = defineStore('category', () => {
  // states

  // actions
  const getCategory = async (id: string) => {
    const response = await reqGetCategory(id)
    return Promise.resolve(response.result)
  }
  const getBannerList = async (index: string = '2') => {
    const resp = await reqGetBanner(index)
    return Promise.resolve(resp.result)
  }
  return {
    getCategory,
    getBannerList
  }
})

export default useCategoryStore
