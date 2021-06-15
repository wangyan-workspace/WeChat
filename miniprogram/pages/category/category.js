// 1.引入用来发送请求的方法  一定要把路径补全
import { request } from "../../request/index.js";
// 使用es7的async语法
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的菜单数据
    leftMenuList: [],
    // 右侧的菜单数据
    rightMenuList: [],
    // 被点击的左侧菜单
    currentIndex: 0,
    // 右侧内容滚动条距离顶部的距离
    scrollTop: 0
  },
  // 接口的返回数据
  Cates: [],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
      0 web中的本地存储和 小程序中的本地存储的区别
      1 写代码的方式不一样了 
        web: localStorage.setItem("key","value") localStorage.getItem("key")
        小程序中: wx.setStorageSync("key", "value"); wx.getStorageSync("key");
      2:存的时候 有没有做类型转换
        web: 不管存入的是什么类型的数据，最终都会先调用以下 toString(),把数据变成了字符串 再存入进去
        小程序: 不存在 类型转换的这个操作 存什么类似的数据进去，获取的时候就是什么类型
      
      1.先判断一下本地存储中有没有旧的数据
      {time:Date.now(),data:[...]}
      2.没有旧的数据,直接发送新的请求
      3.有旧的数据,同时旧的数据没有过期就使用本地存储中的旧数据即可
    */
    // this.getCates();

    /* 本地缓存 */
    // 1.获取本地中的存储数据 (小程序中存在本地存储技术)
    const Cates = wx.getStorageSync('cates');
    // 判断
    if (!Cates) {
      // 不存在 发送请求获取数据
      this.getCates();
    } else {
      // 有旧的数据,定义过期时间 10s 之后改成5分钟
      if (Date.now() - Cates.time > 1000 * 10) {
        // 重新发送请求
        this.getCates();
      } else {
        // 可以使用旧的数据
        console.log('可以使用旧的数据');
        this.Cates = Cates.data;
        // 构造左侧的大菜单数据
        let leftMenuList = this.Cates.map(value => {
          // console.log(value);
          return value.cat_name;
        });
        // 构造右侧的商品数据
        let rightMenuList = this.Cates[0].children;
        console.log(rightMenuList);
        this.setData({
          leftMenuList,  //es6的简写形式
          rightMenuList
        })
      }
    }
  },
  // 获取分类的数据
  // 方式一
  /*
  getCates() {
    request({
      // url: "https://api-hmugo-web.itheima.net/api/public/v1/categories"
      url: "/categories"
    }).then(res => {
      // console.log(res);
      this.Cates = res.data.message;
      // console.log(this.Cates);

      // 把接口的数据存入到本地存储中
      wx.setStorageSync('cates', { time: Date.now(), data: this.Cates })

      // 构造左侧的大菜单数据
      let leftMenuList = this.Cates.map(value => {
        // console.log(value);
        return value.cat_name;
      });
      // 构造右侧的商品数据
      let rightMenuList = this.Cates[0].children;
      console.log(rightMenuList);
      this.setData({
        leftMenuList,  //es6的简写形式
        rightMenuList
      })
    })
  },
  */

  //  方式二 解决回调地狱 兼容会出现点问题
  async getCates() {
    // 1 使用es7的async await来发送请求
    const res = await request({ url: "/categories" });
    // this.Cates = res.data.message;
    this.Cates = res;
    // 把接口的数据存入到本地存储中
    wx.setStorageSync("cates", { time: Date.now(), data: this.Cates });
    // 构造左侧的大菜单数据
    let leftMenuList = this.Cates.map(v => v.cat_name);
    // 构造右侧的商品数据
    let rightContent = this.Cates[0].children;
    this.setData({
      leftMenuList,
      rightContent
    })
  },

  // 左侧菜单的点击事件
  handleItemTap(e) {
    console.log(e);
    /*
      1.获取被点击标题身上的索引
      2.给data中的currentIndex赋值就可以了
      3.根据不同的索引来渲染右侧的商品内容
    */
    //  解构赋值
    const { index } = e.currentTarget.dataset;
    let rightMenuList = this.Cates[index].children;
    // console.log(rightMenuList);
    this.setData({
      currentIndex: index,
      rightMenuList,
      // 重新设置,右侧内容的scroll-view标签的距离顶部的距离
      scrollTop: 0
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})