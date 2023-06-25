// components/wd-tag/wd-tag.js
// 定义几种渐变色
const gradients = [
  "linear-gradient(134deg, #9CB8FF 0%, #6B95FF 100%)",
  "linear-gradient(134deg, #FFC98A 0%, #FFAE6A 100%)",
  "linear-gradient(126deg, #FF8787 0%, #FF6464 100%)",
  "linear-gradient(126deg, #FFCBA3 0%, #FEAC6D 100%)",
  "linear-gradient(131deg, #DCA8FF 0%, #CD84FF 100%)",
  "linear-gradient(131deg, #AB9DFF 0%, #926CFF 100%)",
];

// 获取随机的一个渐变色
function getRandomGradient() {
  const index = Math.floor(Math.random() * gradients.length);
  return gradients[index];
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    label: {
      type: String,
      value: "",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    gradient: "",
    show: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    isEmptyString(str) {
      return str.trim().length === 0;
    }
  },
  /**
   * 组件的生命周期函数
   */
  lifetimes: {
    attached() {
      const gradient = getRandomGradient();
      if (this.isEmptyString(this.data.label)) {
        this.setData({ gradient,show:false });
      } else {
        this.setData({ gradient });
      }
      
    },
  },
});
