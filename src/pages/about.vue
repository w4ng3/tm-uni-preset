<template>
  <tm-app>
    <tm-sheet>
      <tm-text
        :font-size="24"
        _class="font-weight-b"
        label="卡片可以完全通过插槽自定义"></tm-text>
    </tm-sheet>

    <tm-card
      :border="1"
      statusColor="red"
      status="2022-5-2"
      title="看到边线卡片标题了吗？"
      content="这是一个基础卡片示例，非常简单且实用。这是一个基础卡片示例，非常简单且实用。"></tm-card>

    <view
      v-for="(item, index) in arr"
      :key="index">
      <tm-card
        status="2022-5-2"
        :title="item.name"
        content="这是一个基础卡片示例，非常简单且实用。这是一个基础卡片示例，非常简单且实用。">
        <template v-slot:action>
          <view class="flex flex-row flex-row-center-end flex-1">
            <tm-button
              :round="24"
              color="red"
              :margin="[24, 0]"
              label="确认"
              :font-size="24"
              :width="120"
              :height="64"></tm-button>
            <tm-button
              :round="24"
              color="white"
              label="取消"
              :font-size="24"
              :width="120"
              :height="64"></tm-button>
          </view>
        </template>
      </tm-card>
    </view>
  </tm-app>
</template>

<script lang="ts">
import { ref } from 'vue'
import { onShow, onLoad } from '@dcloudio/uni-app'
</script>
<script lang="ts" setup>
const arr = ref([{ name: '王二' }, { name: '王三' }, { name: '王亖' }, { name: '王五' }])

onLoad(() => {
  // console.log('arr', arr.value)s
})
</script>

<style lang="scss" scoped></style>
