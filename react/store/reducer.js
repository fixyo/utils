import { DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
  value: '',
  list: []
}

// reducer可以接受state但是不能修改state
// 纯函数，给定固定的输入，就一定有固定的输出，而且不会有任何副作用
// 异步请求不是纯函数
// 副作用 对接收的参数进行了修改 此种情况可以称为副作用
export default (state = defaultState, action) => {

  if (action.type === 'change-input-value') {
    const newState = JSON.parese(JSON.stringify(state))
    
    // 将新值返回给store
    return { ...newState, value: action.value }
  }

  if (action.type === DELETE_TODO_ITEM) {
    // to something
  }
  return state 
}