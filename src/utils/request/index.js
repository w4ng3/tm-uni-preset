import { baseUrl } from '@/common/constants'

const errorMsg = (response) => {
  let error = {}
  if (response.statusCode) {
    error.code = response.statusCode
    switch (response.statusCode) {
      case 400:
        error.msg = '错误请求'
        break
      case 401:
        error.msg = '未授权，请重新登录'
        break
      case 403:
        error.msg = '拒绝访问'
        break
      case 404:
        error.msg = '请求错误,未找到该资源'
        break
      case 405:
        error.msg = '请求方法未允许'
        break
      case 408:
        error.msg = '请求超时'
        break
      case 500:
        error.msg = '服务器端出错'
        break
      case 501:
        error.msg = '网络未实现'
        break
      case 502:
        error.msg = '网络错误'
        break
      case 503:
        error.msg = '服务不可用'
        break
      case 504:
        error.msg = '网络超时'
        break
      case 505:
        error.msg = 'http版本不支持该请求'
        break
      default:
        error.msg = `连接错误${response.statusCode}`
    }
  } else {
    error.code = 10010
    error.msg = '连接到服务器失败'
  }
  return error
}

const request = function (path, method, data, setting) {
  const tokenInfo = uni.getStorageSync('tokenInfo')
  const host = setting ? setting.host || baseUrl : baseUrl
  const token = setting ? setting.token || tokenInfo.token : tokenInfo.token
  return new Promise((resolve, reject) => {
    uni.request({
      url: host + path,
      method: method,
      data: data,
      header: {
        Authorization: 'Bearer ' + token,
      },
      success: (res) => {
        // 状态码非200的处理
        if (res.statusCode >= 400) {
          const error = errorMsg(res)
          uni.showToast({
            title: error.msg,
            icon: 'none',
          })
          reject(errorMsg(res))
          // errorCallback(errorMsg(res))
        } else if (res.data.code) {
          uni.showToast({
            title: res.data.msg,
            icon: 'none',
          })
          // reject(errorMsg(res.data.msg))
          // errorCallback(res.data)
        } else {
          resolve(res.data)
          // successCallback(res.data)
        }
      },
    })
  })
}

export const axios = {
  get: (path, data, otherData) => {
    return request(path, 'get', data, otherData)
  },
  post: (path, data, otherData) => {
    return request(path, 'post', data, otherData)
  },
  request: request,
}
