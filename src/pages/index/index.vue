<template>
  <tm-app>
    <tm-sheet>
      <tm-text :font-size="24" _class="font-weight-b" label="..."></tm-text>
    </tm-sheet>
    <tm-carousel
      rangKey="test"
      autoplay
      :margin="[0, 16]"
      dotPosition="right"
      vertical
      model="rect"
      :round="3"
      :width="686"
      :height="300"
      :list="listvedio">
    </tm-carousel>

    <wd-tag label="自定义微信组件"></wd-tag>
    <news-card imageUrl="../../static/logo.png" title="睡前消息暑期版" date="2023-6-25" :tags="tagList" />

    <tm-sheet>
      <tm-divider></tm-divider>
      <tm-tabs
        @change="tabschange"
        align="center"
        :width="636"
        :height="300"
        default-name="1"
        itemModel="line"
        activeColor="primary"
        :swiper="true"
        activeFontColor="primary">
        <tm-tabs-pane v-for="(item, index) in tabsTitle" :key="index" :name="item.key" :title="item.title">
          <view>{{ item.key }} . {{ item.icon }}</view>
        </tm-tabs-pane>
      </tm-tabs>
    </tm-sheet>
  </tm-app>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
import { onShow, onLoad } from '@dcloudio/uni-app'

const listvedio: Ref<any[]> = ref([
  { test: 'https://picsum.photos/seed/650/600/300' },
  {
    test: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    img: 'https://picsum.photos/200/300?id=43335',
    type: 'video',
  },
  'https://picsum.photos/seed/666/600/300',
])

const tabsTitle = ref([
  { key: '1', title: '选项一一', icon: 'tmicon-ios-leaf' },
  { key: '2', title: '选项二二', icon: 'tmicon-ios-umbrella' },
  { key: '3', title: '选项三三', dot: true, dotColor: 'yellow', icon: 'tmicon-ios-rocket' },
  { key: '4', title: '选项4', dot: false, count: '3', icon: 'tmicon-ios-partly-sunny' },
])

function tabschange(key: string | number) {
  console.log(key)
}

const tagList = ['社会化抚养', '地方债']
</script>

<style lang="scss" scoped></style>
