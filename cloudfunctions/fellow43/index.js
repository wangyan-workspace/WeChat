// 云函数入口文件
const cloud = require('wx-server-sdk')//包，使得当前的云函数支持小程序的语法

cloud.init()//初始化云函数

const db = cloud.database('fellow43');//初始化数据库
const fellow43_DB = db.collection('fellow43');//获取要操作的集合
// 云函数入口函数
exports.main = async (event, context) => {

  // return {
  //   name: '我的云函数'
  // }
  // 通过event可以获得调用云函数的不同参数
  // console.log(event);
  // 异步操作 await
  // return await fellow43_DB.get();
  switch (event.action) {
    case 'call':{ 
      try {
        return '调用云函数成功了'
      } catch (error) {
        console.log
      }
    }
    case 'get':{ 
      try {
        return await fellow43_DB.get()
      } catch (error) {
        console.log
      }
    }
    case 'update':{
      try {
        return await fellow43_DB.where({
          data:{
            isShow: true
          }
        }).update({
          data:{
            isShow: false
          }
        })
      } catch (error) {
        console.log
      }
    }
    case 'add':{
      try {
        return await fellow43_DB.add({
          data:{
            msg: event.msg,
            _openid: event._openid
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
    case 'delete': {
      try {
        return await fellow43_DB.doc('023ce955600155a3048b3f82068fb789').remove()
      } catch (error) {
        console.log(error)
      }
    }
    default:
      return '请检查参数是否合法'
  }
}