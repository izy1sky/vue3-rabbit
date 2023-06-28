import {
  reqAddCart,
  reqDeleteCart,
  reqGetCart,
  reqMergeCart,
  reqUpdateCart
} from '@/api/modules/cart'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'

const useCartStore = defineStore(
  'cart',
  () => {
    // states
    const cartList: Ref<Array<any>> = ref([])

    // actions
    const addCart = async (data: { skuId: string; count: number }) => {
      // 增加商品到购物车
      const response = await reqAddCart(data)
      if (response.code === '1') {
        await getCart()
        return Promise.resolve(response.result)
      }
    }
    const setSelected = (ids: string[]) => {
      cartList.value.forEach((item) => {
        if (ids.indexOf(item.skuId) >= 0) {
          item.selected = true
        } else {
          item.selected = false
        }
      })
    }

    const mergeCart = async (data: { skuId: string; selected: string; count: number }[]) => {
      const response = await reqMergeCart(data)
      if (response.code === '1') {
        return Promise.resolve('ok')
      }
    }

    const deleteCart = async (ids: string[]) => {
      const response = await reqDeleteCart(ids)
      if (response.code === '1') {
        getCart()
        return Promise.resolve('ok')
      }
    }
    const getCart = async () => {
      const response = await reqGetCart()
      if (response.code === '1') {
        cartList.value = response.result
      }
    }
    const updateCart = async (skuId: string, selected: boolean, count: number) => {
      const response = await reqUpdateCart(skuId, selected, count)
      if (response.code === '1') {
        getCart()
        return Promise.resolve('ok')
      }
    }
    // return
    return {
      cartList,
      addCart,
      setSelected,
      mergeCart,
      deleteCart,
      getCart,
      updateCart
    }
  },
  {
    persist: true
  }
)

export default useCartStore
