export interface ResponseData {
    code: string,
    msg: string,
}

export interface MergeCartResponseData extends ResponseData {
    result: null
}

export interface CartType {
    /**
     * 商品属性
     */
    attrsText?: string;
    /**
     * 商品数量
     */
    count?: number;
    /**
     * 商品折扣
     */
    discount?: null;
    /**
     * 商品id
     */
    id?: string;
    /**
     * 商品是否收藏，登录才有值
     */
    isCollect?: boolean;
    /**
     * 商品是否有效
     */
    isEffective?: boolean;
    /**
     * 商品名字
     */
    name?: string;
    /**
     * 商品现原价格
     */
    nowOriginalPrice?: string;
    /**
     * 商品现价格，可能订单里修改了价格
     */
    nowPrice?: string;
    /**
     * 商品图片
     */
    picture?: string;
    /**
     * 商品邮费
     */
    postFee?: number;
    /**
     * 商品价格
     */
    price?: string;
    /**
     * 商品选中状态
     */
    selected?: boolean;
    /**
     * 商品sku的id
     */
    skuId?: string;
    /**
     * 商品规格列表
     */
    specs?: string[];
    /**
     * 商品库存
     */
    stock?: number;
}

export interface GetCartResponseData extends ResponseData {
    result: CartType[]
}

export interface AddCartResponseData extends ResponseData {
    result: CartType
}

export interface DeleteCartResponseData extends ResponseData {
    result: boolean
}