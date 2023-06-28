import axios from 'axios'
import useUserStore from '@/stores/modules/user'
import pinia from '@/plugins/pinia.ts'
import router from '@/routers'
import { storeToRefs } from 'pinia'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.request.use((config) => {
  // axios请求拦截
  const userStore = useUserStore(pinia)
  const token = userStore.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
request.interceptors.response.use(
  // axios响应拦截 成功的回调
  (res) => res.data,
  // axios相应拦截，失败的回调
  (e) => {
    const userStore = useUserStore(pinia)
    const status = e.response.status
    if (status === 401) {
      router.push({ name: 'login' })
    }
    userStore.setError(e.response.data.message)
    return e
  }
)
export default request
