// components/wc/wc.js
Component({
  // 组建的生命周期
  lifetimes: {
    attached: function() {
      console.log('活着呢...')
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      console.log('死掉了...')
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 用于接收父组件向子组件传递的参数
    // str: String,
    str:{
      // 参数类型
      type: String,
      // 默认值，当父组件没有给子组件传值时，会显示value定义的内容
      value: '你没给我传值呀，😕'
    }
  },
  // styleIsolation 选项从基础库版本 2.6.5 开始支持。它支持以下取值：
  // isolated 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（一般情况下的默认值）；
  // apply-shared 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
  // shared 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 apply-shared 或 shared 的自定义组件。（这个选项在插件中不可用。）
  options: {
    styleIsolation: 'isolated',
    // 在组件的 wxml 中可以包含 slot 节点，用于承载组件使用者提供的 wxml 结构。
    // 默认情况下，一个组件的 wxml 中只能有一个 slot 。需要使用多 slot 时，可以在组件 js 中声明启用。
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的初始数据
   */
  data: {
    num: 0,
    obj:{
      age: 10
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    send(){
      // 通过this.triggerEvent('',{})的方法，可以使子组件调用父组件的方法
      // 第一个参数：父组件的自定义事件
      // 第二个参数：子组件向父组件传递的信息
      this.triggerEvent('myEvent',{
        msg: "\(^o^)/~好好学习，加油⛽️"
      })
    },
    add(){
      this.setData({
        num: this.data.num+1,
        'obj.age': this.data.obj.age + 10
      })
    },
  },
  // 数据监听器
  observers:{
    num(newValue){
      console.log(newValue)
    },
    // 监听对象中的一个属性
    'obj.age':function(newValue){
      console.log(newValue)
    }
  }
})
