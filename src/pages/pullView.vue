<template>
  <div class="edit-info">
    <div class="flex-box center align-center p-3">
      <button class="avatar-wrapper" :plain="true" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
        <image class="avatar" :src="user.avatar"></image>
        <div class="font2">点击图片修改头像</div>
      </button>
    </div>
    <div class="other-form p-3">
      <div class="font1">基础信息</div>
      <!-- <input class="form-cell" title="昵称" :value="user.nickname" is-link url="/pages/my/edit-nickname" /> -->
      <button @click="go">nickname</button>
      <!-- <input name="nickname" type="nickname" placeholder="请输入昵称" :value="user.nickname" /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
// import { useUserStore } from '@/stores/user'
// import request from '@/common/request'
// import { uploadToQiniu } from '@/common/util'

// const user = useUserStore()
const user = reactive({ avatar: '', nickname: '' })
function onChooseAvatar(e: any) {
  // uni.showLoading({
  //   title: '上传中',
  // })
  // 获取到微信头像临时地址
  const { avatarUrl } = e.detail
  console.log('avatarUrl', avatarUrl)
  user.avatar = avatarUrl
  console.log('name', user.nickname)
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
</script>

<style scoped>
.edit-info {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
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
</style>
