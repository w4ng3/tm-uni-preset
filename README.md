# uniapp-TMUI my custom CLI

使用 tmUI 的 cli 搭建的 uniapp 工程，主要用于微信开发小程序

- vue3 + ts
- [TMUI](https://tmui.design/start/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B.html)

## 启动

```bash
npm install

npm run dev:mp-weixin
```

运行后会在根目录生成`dist`文件夹，用微信开发者工具打开 `dist/dev/mp-weixin`

## 建议

- 使用 VSCode 开发时，安装 `uni-create-view`插件，方便创建页面
- 使用 prettier 格式化代码

## Tips

- 状态管理使用 [Pinia](Pinia 进阶：再谈 Pinia 函数式（composition API）用法) , 还使用了[pinia-plugin-unistorage](https://www.npmjs.com/package/pinia-plugin-unistorage) 插件可方便的将 Pinia 里的数据本地存储。
