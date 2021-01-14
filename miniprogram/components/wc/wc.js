// components/wc/wc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
