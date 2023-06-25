// component/news_card/news_card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageUrl: {
      type: String,
      value: "",
    },
    title: String,
    tags: {
      type: Array,
      value: [],
    },
    date: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    defaultCover: "/assets/images/default-3.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
