<template></template>

<script lang="ts" setup>
// @ts-nocheck
import { genTestUserSig, aegisID } from '@/TUIKit/debug/index.js'
import { TIM, TIMUploadPlugin, Aegis } from '@/TUIKit/debug/tim.js'
const aegis = new Aegis({
  id: aegisID, // 项目key
  reportApiSpeed: true, // 接口测速
})
uni.$aegis = aegis
const config = {
  userID: 'administrator', //User ID
  SDKAppID: 1400819619, // Your SDKAppID
  secretKey: 'c242a98bb1490728e46456e6b068c5bf7927f8c0e9ce3bac6e64e31d825de61c', // Your secretKey
}
const userSig = genTestUserSig(config).userSig
uni.$chat_SDKAppID = config.SDKAppID
uni.$chat_userID = config.userID
uni.$chat_userSig = userSig
// 创建 sdk 实例
uni.$TUIKit = TIM.create({
  SDKAppID: uni.$chat_SDKAppID,
})
uni.$TIM = TIM
// 注册文件上传插件
uni.$TUIKit.registerPlugin({
  'tim-upload-plugin': TIMUploadPlugin,
})

onLaunch(() => {
  // 从storage获取登录信息，没有则需要登录
  let tokenInfo = uni.getStorageSync('tokenInfo')
  let hasValidToken = false

  bindTIMEvent()
  login()

  // if (tokenInfo) {
  //   let time = new Date().valueOf()
  //   // 存储时间小于token失效时间，才是有效token, 否则重新授权
  //   hasValidToken = time - tokenInfo.timestamp < 3600 * 24 * 1000
  // }
  // if (!hasValidToken) {
  //   // 调用小程序登录api
  //   uni.login({
  //     provider: 'weixin',
  //     success: (wxInfo) => {
  //       console.log('wxInfo', wxInfo)

  //       uni.getUserInfo({
  //         provider: 'weixin',
  //         success: function (infoRes) {
  //           console.log('infoRes', infoRes)

  //           let data = {
  //             code: wxInfo.code,
  //             encryptedData: infoRes.encryptedData,
  //             iv: infoRes.iv,
  //           }

  //           // 提交给服务端
  //           // $http.post('wxa/login', data).then((res: any) => {
  //           //   // 存储获取到的token
  //           //   uni.setStorageSync('tokenInfo', {
  //           //     token: res.token,
  //           //     timestamp: new Date().valueOf(),
  //           //   })

  //           //   // wx.hideLoading()
  //           //   // wx.setStorageSync('userId', res.data.userId)
  //           //   // if (res.data.phone == '') {
  //           //   //   wx.navigateTo({
  //           //   //     url: '/pages/user/bind/bind?userId=' + res.data.userId,
  //           //   //   })
  //           //   // } else {
  //           //   //   http.post('user/getUserInfo', {}, 'json').then((res1) => {
  //           //   //     if (res1.code == 0) {
  //           //   //       wx.setStorageSync('userInfo', res1.data)
  //           //   //       wx.switchTab({
  //           //   //         url: '/pages/index/index',
  //           //   //       })
  //           //   //     }
  //           //   //   })
  //           //   // }
  //           // })
  //         },
  //       })
  //     },
  //   })
  // }
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
function login() {
  // login TUIKit
  uni.$TUIKit.login({ userID: config.userID, userSig }).then((res) => {
    // sdk 初始化，当 sdk 处于ready 状态，才可以使用API，文档
    uni.showLoading({
      title: '初始化...',
    })
  })
}
function bindTIMEvent() {
  uni.$TUIKit.on(uni.$TIM.EVENT.SDK_READY, handleSDKReady)
  uni.$TUIKit.on(uni.$TIM.EVENT.SDK_NOT_READY, handleSDKNotReady)
  uni.$TUIKit.on(uni.$TIM.EVENT.KICKED_OUT, handleKickedOut)
}
// sdk ready 以后可调用 API
function handleSDKReady(event) {
  uni.$chat_isSDKReady = true
  uni.hideLoading()
  // uni.switchTab({
  //   url: '/TUIKit/TUIPages/TUIConversation/index',
  // })
}
function handleSDKNotReady(event) {
  uni.showToast({
    title: 'SDK 未完成初始化',
  })
}

function handleKickedOut(event) {
  uni.clearStorageSync()
  uni.showToast({
    title: `${kickedOutReason(event.data.type)}被踢出。`,
    icon: 'none',
  })
}
function kickedOutReason(type) {
  switch (type) {
    case uni.$TIM.TYPES.KICKED_OUT_MULT_ACCOUNT:
      return '多实例登录'
    case uni.$TIM.TYPES.KICKED_OUT_MULT_DEVICE:
      return '多设备登录'
    case uni.$TIM.TYPES.KICKED_OUT_USERSIG_EXPIRED:
      return 'userSig 过期'
    case uni.$TIM.TIM.TYPES.KICKED_OUT_REST_API:
      return 'REST API kick 接口踢出'
    default:
      return ''
  }
}
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
