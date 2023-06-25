import { defineStore } from 'pinia'
import { ref } from 'vue'
const useTestStore = defineStore('test', () => {
  // state
  const count = ref(0)

  // actions
  const addCount = () => {
    count.value += 1
  }

  // return
  return {
    count,
    addCount
  }
})

export default useTestStore
