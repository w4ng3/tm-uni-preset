import { fileHost, AccessKeyID, AccessKeySecret } from '@/common/constants'

export let config = {
  //aliyun OSS config
  uploadImageUrl: `${fileHost}`, //默认存在根目录，可根据需求改
  AccessKeySecret: AccessKeySecret,
  OSSAccessKeyId: AccessKeyID,
  timeout: 1, //这个是上传文件时Policy的失效时间
}
