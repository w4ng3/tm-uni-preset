<template>
  <tm-app>
    <tm-sheet>
      <tm-divider></tm-divider>
      <view class="flex flex-col flex-col-top-center">
        <tm-virtual-list :load="getdata" :width="626" :height="1000" :data="imglist" :itemHeight="160">
          <template v-slot:default="{ data }">
            <tm-sheet
              :border="1"
              borderDirection="bottom"
              :height="160"
              :width="626"
              _class="flex flex-row flex-row-center-start"
              :padding="[0, 0]"
              :margin="[0, 0]"
              v-for="(item, index) in data"
              :key="index">
              <view class="flex flex-row flex-row-center-between flex-1">
                <tm-image :width="200" :height="100" :src="item.src"></tm-image>
                <tm-text :label="'image-Row-' + item.index"></tm-text>
              </view>
            </tm-sheet>
          </template>
        </tm-virtual-list>
      </view>
    </tm-sheet>
  </tm-app>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { onShow, onLoad, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
const imglist = ref<any>([])
const getdata = (e: string) => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      if (e == 'top') {
        console.log('top---->下拉加载')
        imglist.value = []
        for (let i = 0; i < 10; i++) {
          imglist.value.push({
            src: 'https://i0.pickpik.com/photos/298/434/513/beach-dawn-dusk-ocean-thumb.jpg',
            index: i,
          })
        }
      } else if (e == 'bottom') {
        console.log('bottom---->触底加载')
        let len = imglist.value.length
        for (let i = len; i < 10 + len; i++) {
          imglist.value.push({
            src: 'https://i0.pickpik.com/photos/298/434/513/beach-dawn-dusk-ocean-thumb.jpg',
            index: i,
          })
        }
      }
      res(true)
    }, 2500)
  })
}

onPullDownRefresh(() => {
  console.log('监听用户下拉动作')
  // uni.stopPullDownRefresh() //刷新数据之后停止刷新效果
})
onReachBottom(() => {
  console.log('页面滚动到底部')
})
</script>

<style lang="scss" scoped></style>
