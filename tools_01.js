/**
 * @name 防抖
 * @param {*} fn 
 * @param {*} delay 
 * @description 100ms内多次触发，只执行最后一次。执行的是return出来的函数
 */
export const debounce = function(fn, delay = 100) {
  let timerId = null 
  return function() {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }   
}

export const throttle = function() {

}


