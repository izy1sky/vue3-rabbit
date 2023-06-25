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
