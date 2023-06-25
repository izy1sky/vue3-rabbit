import request from '@/utils/request'
import type { 
  GetCategoryListResponseData, 
  GetBannerResponseData,
  GetNewResponseData,
  GetHotResponseData, 
  GetHomeGoodsResponseData
} from '../types/layout'
enum LAYOUT {
  GET_CATEGORY_API = '/home/category/head',
  GET_BANNER_API = '/home/banner',
  GET_NEW_API = '/home/new',
  GET_HOT_API = '/home/hot',
  GET_GOODS_API = '/home/goods'
}

export const reqGetCategoryList = () =>
  request.get<any, GetCategoryListResponseData>(LAYOUT.GET_CATEGORY_API)
export const reqGetBanner = (index: string) =>
  request.get<any, GetBannerResponseData>(LAYOUT.GET_BANNER_API)
export const reqGetNew = () => request.get<any, GetNewResponseData>(LAYOUT.GET_NEW_API)
export const reqGetHot = () => request.get<any, GetHotResponseData>(LAYOUT.GET_HOT_API)
export const reqGetGoods = () => request.get<any, GetHomeGoodsResponseData>(LAYOUT.GET_GOODS_API)
