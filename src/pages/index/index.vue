<template>
  <tm-app>
    <tm-cell
      bottomBorder
      :margin="[10, 5]"
      :titleFontSize="30"
      title="考勤打卡"
      url="./amap/amap" />

    <tm-carousel
      rangKey="url"
      autoplay
      :interval="10000"
      :margin="[0, 16]"
      dotPosition="right"
      vertical
      model="rect"
      :round="3"
      :width="686"
      :height="300"
      :list="list">
    </tm-carousel>

    <wd-tag label="使用微信原生组件"></wd-tag>
    <van-notice-bar
      left-icon="volume-o"
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />

    <news-card
      imageUrl="../../static/logo.png"
      title="睡前消息暑期版"
      date="2023-6-25"
      :tags="tagList" />

    <tm-sheet>
      <tm-divider></tm-divider>

      <tm-tabs
        @change="tabsChange"
        align="center"
        :width="636"
        :height="300"
        default-name="1"
        itemModel="line"
        activeColor="primary"
        :swiper="true"
        activeFontColor="primary">
        <tm-tabs-pane
          v-for="(item, index) in tabsTitle"
          :key="index"
          :name="item.key"
          :title="item.title">
          <view>{{ item.key }} . {{ item.icon }}</view>
        </tm-tabs-pane>
      </tm-tabs>
    </tm-sheet>
  </tm-app>
</template>

<script lang="ts" setup>
const list: Ref<any[]> = ref([
  { url: 'https://riddler.oss-cn-shanghai.aliyuncs.com/GoTham/GoTham2.png' },
  'https://riddler.oss-cn-shanghai.aliyuncs.com/GoTham/GoTham1.png',
  // {
  //   url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  //   img: 'https://picsum.photos/200/300?id=43335',
  //   type: 'video',
  // },
])

const tabsTitle = ref([
  { key: '1', title: '选项一一', icon: 'tmicon-ios-leaf' },
  { key: '2', title: '选项二二', icon: 'tmicon-ios-umbrella' },
  { key: '3', title: '选项三三', dot: true, dotColor: 'yellow', icon: 'tmicon-ios-rocket' },
  { key: '4', title: '选项4', dot: false, count: '3', icon: 'tmicon-ios-partly-sunny' },
])

function tabsChange(key: string | number) {
  console.log(key)
}

const tagList = ['社会化抚养', '地方债']
</script>
<style lang="scss" scoped></style>
