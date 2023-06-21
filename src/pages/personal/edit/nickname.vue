<template>
  <form @submit="handleEditNickname">
    <div class="form-item">
      <input name="nickname" type="nickname" placeholder="请输入昵称" :value="user.nickname" />
    </div>
    <button class="submit-btn mt-2" form-type="submit">保存</button>
  </form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
// import { useUserStore } from '@/stores/user'
// const user = useUserStore()

const user = reactive({ nickname: '' })

function handleEditNickname(e: any) {
  // 获取到用户昵称，存储到store中
  // user.setUserInfo('nickname', e.detail.value.nickname)
  // uni.navigateBack()

  const { nickname } = e.detail.value
  console.log('nickname', nickname)
}
</script>
