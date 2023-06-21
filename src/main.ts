import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import tmui from './tmui'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  // 状态管理
  app.use(Pinia.createPinia())
  // TMUI组件
  app.use(tmui, { shareDisable: false } as Tmui.tmuiConfig)
  return {
    app,
    Pinia,
  }
}
