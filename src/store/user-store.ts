import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

// 使用composition API模式定义store
export const useUserStore = defineStore(
  'user',
  () => {
    // state
    const userinfo = reactive({
      nickname: '',
      avatar:
        'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9238d007378e43c0a50392f350e57e17~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?',
      age: 0,
    })
    // getter
    const nominalAge = computed(() => userinfo.age + 1)
    //action
    function setUserInfo(key: string, val: string) {
      if (key == 'nickname') {
        userinfo.nickname = val
      } else if (key == 'avatar') {
        userinfo.avatar = val
      }
    }

    return { userinfo, nominalAge, setUserInfo }
  },
  {
    unistorage: true, // 开启后对 state 的数据读写都将持久化
  },
)
