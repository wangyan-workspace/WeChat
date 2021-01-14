// miniprogram/pages/one/one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0
  },
  add1(){
    console.log(this.data.num);
    // 整个小程序框架系统分为两部分：逻辑层（App Service）和 视图层（View），是分开的，通过this.setData({})处理data的数据
    // this.data.num += 1;
    this.setData({
      num: this.data.num+1
    })
  },
  add2(e){
    // console.log(e);
    console.log(e.target.dataset.step);  //5
    let step = e.target.dataset.step;
    this.setData({
      // *1 => 转换数据类型,防止进行字符串的拼接
      // num: this.data.num + step*1,
      num: this.data.num + step,
    })
  },
  click1(){
    console.log('box1');
  },
  click2(){
    console.log('box2');
  },
  click3(e){
    // 小程序当中没有原生的这个方法
    // e.stopPropagation();
    console.log('box3');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 通过options来获取页面的参数
    console.log(options);
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