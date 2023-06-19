import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import { Ref, ref } from 'vue'
/**
 * 下拉刷新，上拉加载 hook
 * @list 响应列表
 * @url 请求url
 * @data 额外body传参
 * @startPage 起始页
 * @pageSize 每页数量，默认10
 */
export default (list: Ref<any[]>, url: string, data?: any, startPage: number = 1, pageSize: number = 10) => {
  const pageNum = ref(startPage) // 起始页

  const initData = [
    { id: 1, name: '王二' },
    { id: 2, name: '王三' },
    { id: 3, name: '王亖' },
    { id: 4, name: '王五' },
  ]

  const onLoadList = (pageNum: number = startPage) => {
    uni.showLoading({ title: '加载中...', mask: true })
    // uni.$tm.fetch.get(url, { pageNum, pageSize, ...data }).then((res:any) => {
    //   console.log('res', res)
    //   if(res.code==0){
    //     list.value = pageNum === startPage ? res.data : list.value.concat(res.data)
    //     uni.hideLoading()
    //   } else {
    //     uni.showToast({ title: "加载失败", icon: "error" });
    //   }
    //   uni.stopPullDownRefresh()
    // })
    setTimeout(() => {
      list.value = pageNum === startPage ? initData : list.value.concat([{ id: 8, name: '李靖' }])
      uni.hideLoading()
      uni.stopPullDownRefresh()
    }, 2000)
  }

  onPullDownRefresh(() => {
    // console.log('usepull2refresh-- 监听用户下拉动作')
    pageNum.value = startPage
    onLoadList()
  })

  onReachBottom(() => {
    // console.log('usepull2refresh-- 页面滚动到底部')
    onLoadList(++pageNum.value)
  })

  return { onLoadList, onPullDownRefresh, onReachBottom }
}
