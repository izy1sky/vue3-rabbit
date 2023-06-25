import request from '@/utils/request'
import type { GetCategoryResponseData } from '../types/category'
enum CATEGORY {
  GET_CATEGORY_API = '/category'
}

export const reqGetCategory = (id: string) =>
  request.get<any, GetCategoryResponseData>(CATEGORY.GET_CATEGORY_API, {
    params: {
      id: id
    }
  })
