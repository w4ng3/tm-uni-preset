<template></template>

<script lang="ts" setup>
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

        uni.getUserInfo({
          provider: 'weixin',
          success: function (infoRes) {
            console.log('infoRes', infoRes)

            let data = {
              code: wxInfo.code,
              encryptedData: infoRes.encryptedData,
              iv: infoRes.iv,
            }

            // 提交给服务端
            // $http.post('wxa/login', data).then((res: any) => {
            //   // 存储获取到的token
            //   uni.setStorageSync('tokenInfo', {
            //     token: res.token,
            //     timestamp: new Date().valueOf(),
            //   })

            //   // wx.hideLoading()
            //   // wx.setStorageSync('userId', res.data.userId)
            //   // if (res.data.phone == '') {
            //   //   wx.navigateTo({
            //   //     url: '/pages/user/bind/bind?userId=' + res.data.userId,
            //   //   })
            //   // } else {
            //   //   http.post('user/getUserInfo', {}, 'json').then((res1) => {
            //   //     if (res1.code == 0) {
            //   //       wx.setStorageSync('userInfo', res1.data)
            //   //       wx.switchTab({
            //   //         url: '/pages/index/index',
            //   //       })
            //   //     }
            //   //   })
            //   // }
            // })
          },
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
<style lang="scss">
/* #ifdef APP-PLUS-NVUE */
@import './tmui/scss/nvue.css';
/* #endif */
/* #ifndef APP-PLUS-NVUE */
@import './tmui/scss/noNvue.css';
/* #endif */

@import './uni.scss';
</style>
