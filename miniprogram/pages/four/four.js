// miniprogram/pages/four/four.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IptVal: ""
  },
  getIptVal(e){
    // console.log(e.detail.value)
    this.setData({
      IptVal: e.detail.value
    })
  },
  callCloudFn(){
    wx.cloud.callFunction({
      // name:指明调用哪一个云函数
      name: 'fellow43',
      data:{
        action: 'call'
      }
    }).then(res => console.log(res))  //res: 云函数的 return 的内容
  },
  // 云函数获取数据
  getCloudFn(){
    wx.cloud.callFunction({
      name: 'fellow43',
      data:{
        action: 'get'
      }
    }).then(res => console.log(res))
  },
  // 云函数更新数据
  updateCloudFn(){
    wx.cloud.callFunction({
      name: 'fellow43',
      data:{
        action: 'update'
      }
    }).then(res => console.log(res))
    .catch(err => console.log(err))
  },
  // 云函数添加数据
  addCloudFn(){
    wx.cloud.callFunction({
      name: 'fellow43',
      data:{
        action: 'add',
        msg: this.data.IptVal,
        _openid: "oosOM5VyMX1qZb80-EqH5TGIWuQI"
      }
    }).then(res => console.log(res))
    .catch(err => console.log(err))
  },
  // 云函数删除数据
  deleteCloudFn(){
    wx.cloud.callFunction({
      name: 'fellow43',
      data:{
        action: 'delete'
      }
    }).then(res => console.log(res))
    .catch(err => console.log(err))
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