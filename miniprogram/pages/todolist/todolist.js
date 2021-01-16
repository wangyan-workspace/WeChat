// 初始化数据库
const db = wx.cloud.database();
// 获取要操作的数据集合
const fellow43_DB = db.collection('fellow43');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iptVal: '',
    todoList: [],
    isDone: false,
    idList: []
  },
  // 获取输入框的值
  getValue(e){
    // console.log(e);
    // console.log(e.detail.value);
    this.setData({
      iptVal: e.detail.value 
    })
  },
  // 向数据库里添加数据
  add(){
    if(this.data.iptVal){
      fellow43_DB.add({
        data:{
          title: this.data.iptVal,
          isDone: false,
          isTodo: true
        }
      }).then(res => {
        // console.log(res);
        this.getTodolist();
        this.setData({
          iptVal: ''
        })
      })
  } else {
    // 显示消息提示框
    wx.showToast({
      title: '待办事项不能为空',
      icon: 'none',
      duration: 2000
    })
    
  }
  },
  // 获取指定数据列表
  getTodolist(){
    fellow43_DB.where({
      isDone: this.data.isDone,
      isTodo: true
    }).get().then(res => {
      // console.log(res);
      this.setData({
        todoList: res.data
      })
    })
  },
  // 修改更新数据
  finish(e){
    fellow43_DB.doc(e.target.dataset.id).update({
      data: {
        isDone: true
      }
    }).then(res => {
      // console.log(res);
      this.getTodolist();
    })
  },
  // 删除数据
  delete(e){
    fellow43_DB.doc(e.target.dataset.id).remove().then(res => {
      // console.log(res);
      this.getTodolist();
    })
  },
  // 开关切换状态
  isDonechange(e){
    this.setData({
      isDone: e.detail.value
    })
    this.getTodolist();
  },
  // 批量操作
  batchHandle(e){
    console.log(e.target.dataset.type);
    let type = e.target.dataset.type;
    wx.cloud.callFunction({
      name: 'fellow43_todoList',
      data:{
        type: type,
        idList: this.data.idList
      }
    }).then(res => {
      console.log(res);
      this.getTodolist();
    })
  },
  checkChange(e){
    // console.log(e.detail.value)
    this.setData({
      idList: e.detail.value
    })
    // console.log(this.data.idList)
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTodolist();
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