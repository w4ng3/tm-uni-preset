<template>
  <form @submit="handleEditNickname">
    <div class="form-item">
      <input name="nickname" type="nickname" placeholder="请输入昵称" :value="userinfo.nickname" />
    </div>
    <button class="submit-btn mt-2" form-type="submit">保存</button>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useUserStore } from '@/store/user-store'
import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const { userinfo } = storeToRefs(userStore)

function handleEditNickname(e: any) {
  // 获取到用户昵称，存储到store中
  userStore.setUserInfo('nickname', e.detail.value.nickname)
  uni.navigateBack()
}
</script>
