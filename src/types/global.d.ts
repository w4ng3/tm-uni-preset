// 拓展类型，全局的uni挂载的方法提示合并

declare global {
  interface Uni {
    $joker: string
  }
}
//记得加了导出
export {}
