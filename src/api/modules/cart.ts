import request from "@/utils/request";
import type {AddCartResponseData, DeleteCartResponseData, GetCartResponseData, MergeCartResponseData} from '@/api/types/cart'
enum CART_API {
    MERGE = '/member/cart/merge',
    DELETE_ADD_GET = '/member/cart',
    UPDATE = '/member/cart'
}

export const reqMergeCart = (data:{
    skuId: string,
    selected: string,
    count: number
}[]) => request.post<any,MergeCartResponseData>(CART_API.MERGE)

export const reqGetCart = () => request.get<any, GetCartResponseData>(CART_API.DELETE_ADD_GET)

export const reqDeleteCart = (ids:string[]) => request.delete<any, DeleteCartResponseData>(CART_API.DELETE_ADD_GET, {
    data: {
        ids
    }
})

export const reqAddCart = (data:{skuId:string, count:number}) => request.post<any, AddCartResponseData>(CART_API.DELETE_ADD_GET, data)

export const reqUpdateCart = (skuId:string, selected:boolean, count:number) => request.put<any, AddCartResponseData>(CART_API.UPDATE + `/${skuId}`, {
    selected,
    count
})