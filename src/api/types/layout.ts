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

export interface NewGoodData {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount: string
  orderNum: number
}

export interface GetNewResponseData extends ResponseData {
  result: NewGoodData[]
}

export interface HotGoodData {
  id: string
  picture: string
  title: string
  alt: string
}

export interface GetHotResponseData extends ResponseData {
  result: HotGoodData[]
}

export interface HomeGoodChildrenData {
  id: string
  name: string
  layer: number
  parent: null
}

export interface HomeGoodData {
  children: HomeGoodChildrenData[]
  goods: any[]
  id: string
  name: string
  picture: string
  saleInfo: string
}

export interface GetHomeGoodsResponseData extends ResponseData {
  result: HomeGoodData[]
}