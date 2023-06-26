interface ResponseData {
  code: string
  msg: string
}

export interface CategoryChildGoodData {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount: string
  orderNum: string
}

export interface CategoryChildrenData {
  id: string
  name: string
  picture: string
  parentId: null
  parentName: null
  goods: CategoryChildGoodData[]
  categories: null
  brands: null
  saleProperties: null
}

export interface GetCategoryResponseData extends ResponseData {
  result: {
    id: string
    name: string
    picture: null
    children: CategoryChildrenData[]
  }
}

export interface SecondCategoryGoodsData {
  id: string
  name: string
  picture: string
  price: string
  desc: string
  orderNum: number
}

export interface SecondCategoryCategoriesDate {
  id: string
  name: string
  layer: number
  parent: null
}

export interface GetSecondCategoryResponseData extends ResponseData {
  result: {
    id: string
    name: string
    picture: null
    parentId: string
    parentName: string
    goods: SecondCategoryGoodsData[]
    categories: SecondCategoryCategoriesDate[]
  }
}

export interface GetSecondCategoryGoodsRequestData {
  categoryId: string
  page: number
  pageSize: number
  sortField: string
}

export interface GetSecondCategoryGoodsResponseData extends ResponseData {
  result: {
    counts: number
    pageSize: number
    pages: number
    page: number
    items: SecondCategoryGoodsData[]
  }
}
