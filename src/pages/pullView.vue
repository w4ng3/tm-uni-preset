<template>
  <div class="edit-info">
    <div class="flex-box center align-center p-3">
      <button class="avatar-wrapper" :plain="true" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
        <image class="avatar" :src="userinfo.avatar"></image>
        <div class="font2">点击图片修改头像</div>
      </button>
    </div>
    <div class="other-form p-3">
      <div class="font1">基础信息</div>
      <button @click="go">nickname</button>
    </div>

    <button @click="test">PINIA</button>

    <!-- <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button> -->
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAccountStore } from '../store/account'
import { useUserStore } from '@/store/user-store'
// import request from '@/common/request'
// import { uploadToQiniu } from '@/common/util'

const account = useAccountStore()
const userStore = useUserStore()
const { userinfo } = storeToRefs(userStore)
function onChooseAvatar(e: any) {
  // uni.showLoading({
  //   title: '上传中',
  // })
  // 获取到微信头像临时地址
  const { avatarUrl } = e.detail
  userStore.updateAvatar(avatarUrl)
  // 上传文件到服务器
  // request.get('/qiniu-token').then((tokenInfo:any) => {
  //   uploadToQiniu(tokenInfo, avatarUrl).then((uploadedAvatar) => {
  //     uni.hideLoading()
  //     // 将头像存储到store中
  //     user.setUserInfo('avatar', uploadedAvatar)
  //   })
  // })
}

const go = () => {
  uni.navigateTo({ url: './personal/edit/nickname' })
}

const getPhoneNumber = (e: any) => {
  console.log('--', e)
  //拿到参数后进一步去解密....
  // 授权通过后轮询等待获取sessionKey响应成功
  if (['getPhoneNumber:ok'].includes(e?.detail?.errMsg)) {
    handlePolling(e)
  }
}

const handlePolling = (e: any) => {
  console.log('e', e)
}
///

const test = () => {}
</script>

<style lang="scss" scoped>
.edit-info {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .avatar-wrapper {
    background-color: #fff;
    border: 0 none;
    line-height: 1.5;
  }
  .avatar {
    width: 180rpx;
    height: 180rpx;
    border-radius: 20rpx;
    background-color: #ddd;
  }
}
</style>
