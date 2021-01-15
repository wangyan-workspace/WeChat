// 初始化数据库
const db = wx.cloud.database();
// 获取要操作的数据集合
const fellow43_DB = db.collection('fellow43');
// 获取查询指令
const _ = db.command;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iptVal: ""
  },
  getIptVal(e){
    // console.log(e)
    // 通过e.detail.value获取input输入框里的内容
    // console.log(e.detail.value)
    this.setData({
      iptVal: e.detail.value
    })
  },
  // 添加数据
  addHandle(){
    fellow43_DB.add({
      data: {
        msg: this.data.iptVal,
        isShow: true
      }
    }).then(res => {
      console.log(res);
    })
  },
  // 获取数据
  getHandle(){
    // 获取一个集合中的全部数据
    // fellow43_DB.get().then(res => {
    //   console.log(res);
    // })

    // 获取一个集合中的部分数据
    // fellow43_DB.where({
    //   isShow: true
    // }).get().then(res => console.log(res))

    // 获取一个集合中的部分属性(hello && world)
    // fellow43_DB.where({
    //   //in: 字段值在给定数组中
    //   msg: _.in(['hello','world'])
    // }).get().then(res => console.log(res))

    // 获取集合中具体的某一条记录
    fellow43_DB.doc('b45a21d560012fea04e38a61138ee6fe').get().then(res => console.log(res))
  },
  // 更新数据
  updateHandle(){
    // console.log(666);
    fellow43_DB.where('023ce95560012d6c04866b3b295f2e04').update({
      data:{
        isShow: false
      }
    }).then(res => console.log(res))
  },
  // 删除数据
  deleteHandle(){
    fellow43_DB.doc('b45a21d560012fea04e38a61138ee6fe').remove().then(res => console.log(res))
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