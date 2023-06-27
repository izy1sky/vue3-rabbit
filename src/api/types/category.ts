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

export interface GoodEvaluationInfoData {
  id:string,
  orderInfo:null,
  member:null,
  score:number,
  tags:null,
  content:string,
  pictures:null,
  officialReply:null,
  praiseCount:number,
  createTime:string,
  praisePercent:number
}

export interface GoodInfoData {
  id:string,
  name:string,
  spuCode:string,
  desc:string,
  price:string,
  oldPrice:string,
  discount:number,
  inventory:number,
  brand:any,
  salesCount:number,
  commentCount:number,
  collectCount:number,
  mainVideos:number,
  mainPictures:any,
  specs:any,
  skus:any,
  categories:any,
  details:any,
  isPreSale:boolean,
  isCollect:null,
  recommends:null,
  userAddress:null,
  similarProducts:SecondCategoryGoodsData[],
  hotByDay:SecondCategoryGoodsData[],
  evaluationInfo:GoodEvaluationInfoData
}

export interface GetGoodInfoResponseData extends ResponseData {
  result:GoodInfoData
}
