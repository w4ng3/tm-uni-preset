import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', {
  state: () => {
    return {
      account: '测试',
    }
  },
  actions: {
    login(account: any) {
      console.log('a', account)
      this.account = account
    },
  },

  // unistorage: true // 开启后对 state 的数据读写都将持久化
})
