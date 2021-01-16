// miniprogram/pages/five/five.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: ""
    // imgUrl:"http://tmp/p0qbduowaCIo4880e7344096fcfc4db690feed7df5ab.jpg"
  },
  chooseImg(){
    // 从本地选取图片或视频上传
    wx.chooseImage({
      // 回调函数
      complete:(res)=>{
        console.log(res);
        this.setData({
          imgUrl: res.tempFilePaths[0]
        })
      }
    })
  },
  uploadImg(){
    // 生成随机数
    let randomStr = Math.random().toString(16).substr(2);
    // 图片的后缀名
    let fName = this.data.imgUrl.replace(/.+\./,'');
    // 将本地资源上传到服务器
    wx.cloud.uploadFile({
      filePath: this.data.imgUrl,
      cloudPath: 'fellow43/' + randomStr + '.' + fName
    }).then(res => console.log(res))
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