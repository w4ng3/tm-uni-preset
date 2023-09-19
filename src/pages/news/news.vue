<template>
  <tm-app>
    <tm-sheet>
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        label="卡片可通过插槽自定义" />
    </tm-sheet>
    <tm-card
      :border="1"
      statusColor="red"
      status="2022-5-2"
      title="看到边线卡片标题了吗？"
      content="这是一个基础列表示例，下拉刷新，上拉加载。">
    </tm-card>

    <block
      v-for="(item, index) in listRef"
      :key="index">
      <tm-card
        status="2022-5-2"
        :title="item.name"
        :content="item.id + '这是一个基础卡片示例，非常简单且实用。'">
        <template v-slot:action>
          <view class="flex flex-row flex-row-center-end flex-1">
            <tm-button
              :round="24"
              color="red"
              :margin="[24, 0]"
              label="确认"
              :font-size="24"
              :width="120"
              :height="64">
            </tm-button>
            <tm-button
              :round="24"
              color="white"
              label="取消"
              :font-size="24"
              :width="120"
              :height="64">
            </tm-button>
          </view>
        </template>
      </tm-card>
    </block>
  </tm-app>
</template>

<script lang="ts" setup>
const userStore = useUserStore()
const { userinfo } = storeToRefs(userStore)
const listRef = ref<Userinfo[]>([])
const { onLoadList, onPullDownRefresh, onReachBottom } = usePull2Refresh(
  listRef,
  'http://127.0.0.1:4523/mock/946406/api/todayOnhistory?date=4/11',
)
onLoad(() => {
  onLoadList()
})

onShow(() => {
  console.log('Q', userinfo.value.avatar)
})
</script>

<style lang="scss" scoped></style>
