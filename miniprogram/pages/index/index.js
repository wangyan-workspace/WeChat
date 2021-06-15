// 1.引入用来发送请求的方法  一定要把路径补全
import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航数组
    cateList: [],
    // 楼层数据
    floorList: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 页面开始加载就会触发
  onLoad: function (options) {
    // 1发送异步请求获取轮播图数据  
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success:(result) => {
    //     console.log(result);
    //    this.setData({
    //      swiperList: result.data.message
    //    })
    //   }
    // })
    // 优化：通过es6的promise来解决回调地狱的问题
    // request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata" }).then(result => {
    //   this.setData({
    //     swiperList: result.data.message
    //   })
    // })
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },
  // 方式一
  /*
  // 获取轮播图数据
  getSwiperList() {
    request({ url: "/home/swiperdata" }).then(result => {
      this.setData({
        swiperList: result.data.message
      })
    })
  },
  // 获取分类导航数据
  getCateList() {
    request({ url: "/home/catitems" }).then(result => {
      this.setData({
        cateList: result.data.message
      })
    })
  },
  // 获取楼层数据
  getFloorList() {
    request({ url: "/home/floordata" }).then(result => {
      this.setData({
        floorList: result.data.message
      })
    })
  },
*/

  // 方式二
  // 获取轮播图数据
  getSwiperList() {
    request({ url: "/home/swiperdata" }).then(result => {
      this.setData({
        swiperList: result
      })
    })
  },
  // 获取分类导航数据
  getCateList() {
    request({ url: "/home/catitems" }).then(result => {
      this.setData({
        cateList: result
      })
    })
  },
  // 获取楼层数据
  getFloorList() {
    request({ url: "/home/floordata" }).then(result => {
      this.setData({
        floorList: result
      })
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