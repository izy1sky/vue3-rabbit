import request from '@/utils/request'
import type {
  GetCategoryResponseData,
  GetSecondCategoryResponseData,
  GetSecondCategoryGoodsRequestData,
  GetSecondCategoryGoodsResponseData,
  GetGoodInfoResponseData
} from '../types/category'

enum CATEGORY {
  GET_CATEGORY_API = '/category',
  GET_SECOND_CATEGORY_API = '/category/sub/filter',
  GET_SECOND_CATEGORY_GOODS_API = '/category/goods/temporary',
  GET_GOOD_INFO_API = '/goods'
}

export const reqGetCategory = (id: string) =>
  request.get<any, GetCategoryResponseData>(CATEGORY.GET_CATEGORY_API, {
    params: {
      id: id
    }
  })

// 获取二级category的面包屑导航数据
export const reqGetSecondCategory = (id: string) =>
  request.get<any, GetSecondCategoryResponseData>(CATEGORY.GET_SECOND_CATEGORY_API, {
    params: {
      id: id
    }
  })

// 获取二级分类下的物品数据的方法
export const reqGetSecondCategoryGoods = (data: GetSecondCategoryGoodsRequestData) =>
  request.post<any, GetSecondCategoryGoodsResponseData>(
    CATEGORY.GET_SECOND_CATEGORY_GOODS_API,
    data
  )
// 获得物品详细信息
export const reqGetGoodInfo = (id: string) =>
  request.get<any, GetGoodInfoResponseData>(CATEGORY.GET_GOOD_INFO_API, {
    params: {
      id: id
    }
  })
