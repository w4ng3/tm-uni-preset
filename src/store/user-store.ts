import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

// 使用composition API模式定义store
export const useUserStore = defineStore(
  'user',
  () => {
    // state
    const userinfo = reactive({
      nickname: '王东',
      avatar: 'https://riddler.oss-cn-shanghai.aliyuncs.com/TuWan/koubi.png',
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
