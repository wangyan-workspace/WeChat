// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const fellow43_DB = db.collection('fellow43');
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  // 方式一
  if(event.type === 'finish'){
    // 更新
    console.log(888)
    return await fellow43_DB.where({
      _id: _.in(event.idList)
    }).update({
      data:{
        isDone: true
      }
    }).then(res => console.log(res))
  }else {
    // 删除
    return await fellow43_DB.where({
      _id: _.in(event.idList)
    }).remove().then(res => console.log(res))
  }
  // 方式二
  // switch (event.type) {
  //   case 'finish':
  //     try {
  //       return await fellow43_DB.where({
  //         _id: _.in(event.idList)
  //       }).update({
  //         data:{
  //           isDone: true
  //         }
  //       })
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   case 'delete':
  //     try {
  //       return await fellow43_DB.where({
  //         _id: _.in(event.idList)
  //       }).remove()
  //     } catch (error) {
  //       console.log(error)
  //     }
  
  //   default:
  //     return '请检查参数是否合法'
  // }
}