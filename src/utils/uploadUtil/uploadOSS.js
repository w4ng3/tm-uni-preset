import { config } from './config.js'
import { Base64 } from './Base64.js'
import { Crypto } from './crypto.js'
import randomWord from './randomWord.js'
import './hmac.js'
import './sha1.js'

const uploadFile = function (params) {
  // console.log('params:', params)
  if (!params.filePath || params.filePath.length < 9) {
    uni.showModal({
      title: '图片错误',
      content: '请重试',
      showCancel: false,
    })
    return
  }

  var name =
    new Date().getTime() +
    randomWord(false, 16) +
    '.' +
    params.filePath.substring(params.filePath.lastIndexOf('.') + 1)
  const aliyunFileKey = params.dir + name

  const aliyunServerURL = config.uploadImageUrl
  const accessid = config.OSSAccessKeyId
  const policyBase64 = getPolicyBase64()
  const signature = getSignature(policyBase64)
  // console.log('******************')
  // console.log('aliyunFileKey:', aliyunFileKey)
  // console.log('policyBase64:', policyBase64)
  // console.log('accessid:', accessid)
  // console.log('signature:', signature)
  // console.log('******************')
  uni.uploadFile({
    url: aliyunServerURL,
    filePath: params.filePath,
    name: 'file',
    formData: {
      key: aliyunFileKey,
      policy: policyBase64,
      OSSAccessKeyId: accessid,
      signature: signature,
      success_action_status: '200',
    },
    success: function (res) {
      // console.log(res)
      if (res.statusCode != 200) {
        if (params.fail) {
          params.fail(res)
        }
        return
      }
      if (params.success) {
        params.success(aliyunServerURL + '/' + aliyunFileKey)
      }
    },
    fail: function (err) {
      err.wxaddinfo = aliyunServerURL
      if (params.fail) {
        params.fail(err)
      }
    },
  })
}

const getPolicyBase64 = function () {
  let date = new Date()
  date.setHours(date.getHours() + config.timeout)
  console.log(date.setHours(date.getHours() + config.timeout))
  let srcT = date.toISOString()
  console.log('Policy的失效时间', srcT)
  const policyText = {
    expiration: srcT, //设置该Policy的失效时间
    conditions: [
      ['content-length-range', 0, 100 * 1024 * 1024], // 设置上传文件的大小限制,10mb
    ],
  }
  const policyBase64 = Base64.encode(JSON.stringify(policyText))
  return policyBase64
}
const getSignature = function (policyBase64) {
  const accesskey = config.AccessKeySecret
  const bytes = Crypto.HMAC(Crypto.SHA1, policyBase64, accesskey, {
    asBytes: true,
  })
  const signature = Crypto.util.bytesToBase64(bytes)
  return signature
}
export const ossUpload = uploadFile
