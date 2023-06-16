<template>
  <tm-app>
    <tm-sheet>
      <tm-tabs
        @change="tabschange"
        :showTabsLineAni="true"
        :item-width="140"
        :width="636"
        :height="500"
        :swiper="true"
        default-name="2">
        <tm-tabs-pane
          :dot="item === 3"
          :count="item == 4 ? 33 : 0"
          v-for="(item, index) in 15"
          :key="index"
          :name="item"
          :title="item % 2 ? '标题开滑动' : '标题'">
          <tm-sheet :margin="[0, 0]">
            <tm-text
              :font-size="30"
              _class="font-weight-b"
              color="red"
              :label="
                item +
                ';本组件可以开启swiper属性，你现在可以尝试左右滑动。开启左右滑动，页面最好禁用滚动，以防与页面事件冲突。(当然是兼容了WEB pc端)'
              "></tm-text>
            <tm-text
              :font-size="30"
              _class="font-weight-b"
              :label="'开启左右滑动后，本组件已优化性能，只会渲染本身，以及前后的页面内容，也就是三个页面的内容，其它页面隐藏不显示。'"></tm-text>
            <tm-divider></tm-divider>
          </tm-sheet>
        </tm-tabs-pane>
      </tm-tabs>
    </tm-sheet>

    <tm-sheet>
      <tm-divider></tm-divider>
      <tm-tabs
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
import { ref, getCurrentInstance } from 'vue'
import { onShow, onLoad } from '@dcloudio/uni-app'
const tabsTitle = ref([
  { key: '1', title: '选项一一', icon: 'tmicon-ios-leaf' },
  { key: '2', title: '选项二二', icon: 'tmicon-ios-umbrella' },
  { key: '3', title: '选项三三', dot: true, dotColor: 'yellow', icon: 'tmicon-ios-rocket' },
  { key: '4', title: '选项4', dot: false, count: '3', icon: 'tmicon-ios-partly-sunny' },
])
function tabschange(key: string | number) {
  console.log(key)
}
</script>

<style lang="scss" scoped></style>
