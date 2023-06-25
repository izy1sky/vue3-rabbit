import { defineStore } from 'pinia'
import { reqGetCategory } from '@/api/modules/category'
const useCategoryStore = defineStore('category', () => {
  // states

  // actions
  const getCategory = async (id: string) => {
    const response = await reqGetCategory(id)
    return Promise.resolve(response.result)
  }
  return {
    getCategory
  }
})

export default useCategoryStore
