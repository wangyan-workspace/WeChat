// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '今天是个好日子',
    arr:['a','b','c','d','e'],
    num:0,
    objArr:[
      {name: "zhangsan",age: 12},
      {name: "lisi",age: 34},
      {name: "wangwu",age: 56},
      {name: "zhaoliu",age: 78},
      {name: "xiaoming",age: 90}
    ]
  },
  goOne(){
    wx.navigateTo({
      url: '../one/one?id=111'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log('用户下拉了，需要刷新数据');
    setTimeout(() => {
      // 结束下拉刷新动作
      wx.stopPullDownRefresh();
    },100)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('到底了，要加载新数据了');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})