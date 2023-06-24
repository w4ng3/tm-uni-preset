<template>
  <div class="edit-info">
    <div class="flex-box center align-center p-3">
      <button class="avatar-wrapper" :plain="true" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
        <image class="avatar" :src="userinfo.avatar"></image>
        <div class="text-size-m">点击图片修改头像</div>
      </button>
    </div>
  </div>
  <form @submit="handleEditNickname">
    <tm-sheet :margin="[32, 40, 32, 32]" border="3">
      <input name="nickname" type="nickname" placeholder="请输入昵称" :value="userinfo.nickname" />
    </tm-sheet>

    <tm-sheet :margin="[32, 40, 32, 32]">
      <button class="submit-btn" form-type="submit">保存</button>
    </tm-sheet>
  </form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user-store'
// import request from '@/common/request'

// const account = useAccountStore()
const userStore = useUserStore()
const { userinfo } = storeToRefs(userStore)
function onChooseAvatar(e: any) {
  // uni.showLoading({
  //   title: '上传中',
  // })
  // 获取到微信头像临时地址
  const { avatarUrl } = e.detail
  userStore.setUserInfo('avatar', avatarUrl)
  // 上传文件到服务器
  // request.get('/qiniu-token').then((tokenInfo:any) => {
  //   uploadToQiniu(tokenInfo, avatarUrl).then((uploadedAvatar) => {
  //     uni.hideLoading()
  //     // 将头像存储到store中
  //     user.setUserInfo('avatar', uploadedAvatar)
  //   })
  // })
}

const handlePolling = (e: any) => {
  console.log('e', e)
}

function handleEditNickname(e: any) {
  // 获取到用户昵称，存储到store中
  userStore.setUserInfo('nickname', e.detail.value.nickname)
  uni.navigateBack()
}
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
