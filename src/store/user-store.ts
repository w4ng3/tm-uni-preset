import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

// 使用composition API模式定义store
export const useUserStore = defineStore('counterForSetup', () => {
  // state
  // const count = ref<number>(1)
  const userinfo = reactive({
    nickname: '',
    avatar:
      'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9238d007378e43c0a50392f350e57e17~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?',
  })
  // getter
  // const doubleCount = computed(() => count.value * 2)
  //action
  function updateAvatar(url: string) {
    userinfo.avatar = url
  }

  function setUserInfo(key: string, val: string) {
    if (key == 'nickname') {
      userinfo.nickname = val
    }
  }

  return { userinfo, updateAvatar, setUserInfo }
})
