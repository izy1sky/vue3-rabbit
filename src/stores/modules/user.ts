import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

const useUserStore = defineStore('user', () => {
    // states
    const token:Ref<string> = ref("")
    // actions
    return {
        token
    }
})

export default useUserStore