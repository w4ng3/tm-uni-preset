import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import tmui from './tmui'
import App from './App.vue'
import { createUnistorage } from 'pinia-plugin-unistorage'
export function createApp() {
  const app = createSSRApp(App)
  // 状态管理
  const store = Pinia.createPinia()
  // 持久化
  store.use(createUnistorage())
  app.use(store)
  // TMUI组件
  app.use(tmui, { shareDisable: false } as Tmui.tmuiConfig)
  return {
    app,
    Pinia,
  }
}
