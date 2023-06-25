interface ResponseData {
  code: string
  msg: string
}

export interface GetCategoryResponseData extends ResponseData {
  result: {
    id: string
    name: string
    picture: null
    children: any[]
  }
}
