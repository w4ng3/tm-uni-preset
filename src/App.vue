<template></template>

<script lang="ts" setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import api from './utils/requset.js'
onLaunch(() => {
  // 从storage获取登录信息，没有则需要登录
  let tokenInfo = uni.getStorageSync('tokenInfo')
  let hasValidToken = false
  if (tokenInfo) {
    let time = new Date().valueOf()
    // 存储时间小于token失效时间，才是有效token, 否则重新授权
    hasValidToken = time - tokenInfo.timestamp < 3600 * 24 * 1000
  }
  if (!hasValidToken) {
    // 调用小程序登录api
    uni.login({
      provider: 'weixin',
      success: (wxInfo) => {
        console.log('wxInfo', wxInfo)
        // 获取到code后，提交给服务端
        api
          .post('/wxa/login', {
            code: wxInfo.code,
          })
          .then((res: any) => {
            // 存储获取到的token
            uni.setStorage({
              key: 'tokenInfo',
              data: {
                token: res.token,
                timestamp: new Date().valueOf(),
              },
            })
          })
      },
    })
  }
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style>
/* #ifdef APP-PLUS-NVUE */
@import './tmui/scss/nvue.css';
/* #endif */
/* #ifndef APP-PLUS-NVUE */
@import './tmui/scss/noNvue.css';
/* #endif */
</style>
