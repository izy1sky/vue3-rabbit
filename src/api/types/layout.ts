interface ResponseData {
  code: string
  msg: string
}

interface GoodData {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount: null | string
  orderNum: null | string
}

export interface CategoryData {
  id: string
  name: string
  picture: string
  children: CategoryData[]
  goods: GoodData[]
}

export interface GetCategoryListResponseData extends ResponseData {
  result: CategoryData[]
}

export interface BannerData {
  id: string
  imgUrl: string
  hrefUrl: string
  type: string
}

export interface GetBannerResponseData extends ResponseData {
  result: BannerData[]
}
