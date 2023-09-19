<!--
 *@FileDescription: 定位打卡
 *@author: 王東
 *@date: 2023-09-19
* @LastEditors: unknow
* @LastEditTime: 2023-09-19
 -->
<template>
  <tm-app>
    <tm-cell
      bottomBorder
      :margin="[10, 8]"
      :titleFontSize="30"
      title="考勤范围"
      url="./location" />
  </tm-app>
</template>

<script lang="ts" setup>
import { aMapWx } from '@/static/js/amap-wx.130.js'
let amapPlugin

onLoad(() => {
  getAddress()
})

function getAddress() {
  amapPlugin = new aMapWx({ key: '304ce531f40b59fa390e9eb518e03355' })
  uni.showLoading({ title: '获取信息中' })
  amapPlugin.getRegeo({
    success: (data) => {
      console.log('当前定位', data)
      // data包含定位地址与经纬度等信息,请根据自己项目需求写对应逻辑
      uni.hideLoading()

      // 计算距离
      let s = getDistance(data[0].latitude, data[0].longitude, 32.077999, 118.90566)
      console.log('s :>> ', Math.floor(s))
    },
    // 获取位置失败
    fail: (err: any) => {
      console.log(err)
      uni.showToast({
        title: '获取位置失败，请重启小程序',
        icon: 'error',
      })
    },
  })
}

/**计算两个经纬度距离
 * @param lat1 第一个纬度
 * @param log1 第一个经度
 * @param lat2 第二个维度
 * @param log2 第二个经度
 * @return 两点距离(单位: m)
 */
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  var radLat1 = (lat1 * Math.PI) / 180 //将角度换算为弧度
  var radLat2 = (lat2 * Math.PI) / 180 //将角度换算为弧度
  var a = radLat1 - radLat2
  var b = (lon1 * Math.PI) / 180 - (lon2 * Math.PI) / 180
  var s =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2),
      ),
    )
  s = s * 6378137.0 // 取WGS84标准参考椭球中的地球长半径(单位:m)
  // s = Math.round(s * 10000) / 10000; //两点之间距离(保留四位)
  return s //(单位:m)
}
</script>
<style lang="scss" scoped></style>
