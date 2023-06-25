import request from '@/utils/request'
import type { GetCategoryListResponseData, GetBannerResponseData } from '../types/layout'
enum LAYOUT {
  GET_CATEGORY_API = '/home/category/head',
  GET_BANNER_API = '/home/banner'
}

export const reqGetCategoryList = () =>
  request.get<any, GetCategoryListResponseData>(LAYOUT.GET_CATEGORY_API)
export const reqGetBanner = (index: string) =>
  request.get<any, GetBannerResponseData>(LAYOUT.GET_BANNER_API)
