<!--
 *@FileDescription: 查看地图定位，考勤范围
 *@author: 王東
 *@date: 2023-09-19
* @LastEditors: unknow
* @LastEditTime: 2023-09-19
 -->
<template>
  <view class="map_container">
    <map
      class="map"
      id="map"
      :longitude="longitude"
      :latitude="latitude"
      scale="16"
      :markers="markers"></map>
  </view>
</template>
<script lang="ts" setup>
const markers = ref<any[]>([])
const latitude = ref<number>()
const longitude = ref<number>()

interface Marker {
  id: number
  latitude: number
  longitude: number
  iconPath: string
  width?: number
  height?: number
}

onLoad(() => {
  uni.getLocation({
    type: 'gcj02',
    success: (data: any) => {
      console.log('当前定位', data)
      markers.value = [
        {
          id: 1,
          latitude: data.latitude,
          longitude: data.longitude,
        },
      ]
      latitude.value = data.latitude
      longitude.value = data.longitude
    },
    // 获取位置失败
    fail: (err: any) => {
      console.log(err)
      uni.showToast({ title: '获取位置失败', icon: 'error' })
    },
  })
})
</script>
<style lang="scss" scoped>
.map_container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.map {
  width: 100%;
  height: 100%;
}
.map_text {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  height: 80px;
  background: #fff;
  padding: 0 15px;
}
text {
  margin: 5px 0;
  display: block;
  font-size: 12px;
}
.h1 {
  margin: 15px 0;
  font-size: 15px;
}
</style>
