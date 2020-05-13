// react轻量级视图层框架
// redux数据层框架
// 数据存放到store

// redux = reducer + flux

// redux flow
// component  获取数据 
// action creator  通过action告知store
// store  store去查阅reducer  store必须唯一
// reducer 

// 安装redux

import store from './store' 

this.state = store.getState()
// 监听store中的数据变化
store.subscribe(this.handleStoreChange)
handleStoreChange() {
  this.setState(store.getState())
}

handleInputChange(e) {
  const action = {
    type: 'change-input-value',
    value: e.target.value 
  }

  // dispatch
  store.dispatch(action)

  // store自动将action转发给reducer
}