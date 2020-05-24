// redux, vuex 状态管理 共享状态 
// 隔离变化 不要去影响其他代码 
// 组件之间需要共享的状态抽取出来,遵循特定的约定,统一管理,让状态的变化可以侦测 


var store = {
  state: {
    message: 'Hello'
  }
}
setMessageAction(newVal) {
  // 发生改变记录点日志啥的 
  this.state.message = newVal 
}
clearMessageAction() {
  this.state.message = ''
}

// store中一堆action, 通过action来控制state的改变 \
// 不直接对state做改变, 通过走action,我没就可以知道mutation是如何触发的 


// 组件不能直接修改属于store实例的state,组件必须通过action来改变state
// 组件里面应该执行action来分发(dispatch)事件通知store去改变
// 约定的好处是能够记录store中state发生的改变 

