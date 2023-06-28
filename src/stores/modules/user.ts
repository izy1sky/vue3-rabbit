import { reqLogin } from '@/api/modules/user'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

const useUserStore = defineStore('user', () => {
  // states
  const token: Ref<string> = ref('')
  
  const errorMessage:Ref<string> = ref('')
  
  // actions
  const userLogin = async(username:string, password:string) => {
    try {
      const response = await reqLogin(username, password)
      if (response.code === '1') {
        return Promise.resolve(response.result)
      } 
      else {
        return Promise.reject(response.msg)
      }
    } catch (e:any) {
      return Promise.reject(e)
    }
  }

  const setError = (error:string) => {
    errorMessage.value = error
  }

  return {
    token,
    errorMessage,
    userLogin,
    setError
  }
}, {
  persist:true
}
)

export default useUserStore
