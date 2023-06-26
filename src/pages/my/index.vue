<template>
  <tm-app color="grey-4">
    <tm-sheet :margin="[0, 0, 0, 0]" :height="400">
      <view class="fulled-height flex flex-col flex-center">
        <tm-avatar :img="userinfo.avatar" :size="200"></tm-avatar>
        <tm-text :label="userinfo.nickname" :font-size="40"></tm-text>
      </view>
    </tm-sheet>
    <view class="mb-32 mx-32 round-3 overflow mt-20">
      <tm-cell bottomBorder :margin="[0, 0]" :titleFontSize="30" title="基本信息" url="./edit/userinfo" />
      <tm-cell bottomBorder :margin="[0, 0]" :titleFontSize="30" title="版本更新" />
      <tm-cell bottomBorder :margin="[0, 0]" :titleFontSize="30" title="隐私政策" />
      <tm-cell bottomBorder :margin="[0, 0]" :titleFontSize="30" title="用户协议" />
      <tm-cell bottomBorder :margin="[0, 0]" :titleFontSize="30" title="关于我们" />
      <tm-cell :margin="[0, 0]" :titleFontSize="30" title="设置 Setting">
        <template v-slot:title>
          <view class="flex flex-center">
            <tm-icon name="tmicon-cog-fill"></tm-icon>
            <tm-text label="设置" class="pl-18" :font-size="30" />
          </view>
        </template>
      </tm-cell>
    </view>
  </tm-app>
</template>

<script lang="ts" setup>
const userStore = useUserStore()
const { userinfo } = storeToRefs(userStore)
</script>

<style lang="scss" scoped></style>
