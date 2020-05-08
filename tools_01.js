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


function debounce(fn, delay, immediate) {
  var timer 
  return function() {
    var context = this 
    var args = arguments

    if (timer) clearTimeout(timer)
    // clearTimeOut后timer是什么？
    
    if (immediate) {
      var flag = !timer 
      timer = setTimeout(function() {
        timer = null
      }, delay)

      if (flag) fn.apply(context, args)
      
    } else {

      timer = setTimeout(function() {
        // fn()
        fn.apply(context, args)
      }, delay)
    }
  }
}


/**
 * @name 节流
 * @param {*} fn 
 * @param {*} delay 
 * @description delay时间之内 多次触发 只执行第一次 
 */
export const throttle = function(fn, delay) {
  let flag = true 
  return function () {
    if (!flag) return 
    flag = false 
    setTimeout(() => { 
      fn.apply(this, arguments)
      flag = true
    }, delay)
  }
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arr1, arr2) => {
  let len = Math.min(arr1.length, arr2.length)
  let i = -1
  let res = []
  while(++i < len) {
    if (arr1.indexOf(arr2[i]) > -1) res.push(arr2[i])
  }
  return res 
}


/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @description 两个数组的并集
 */
export const getUnion = (arr1, arr2) => {
  // 数组去重
  // return Array.from(new Set(...arr1, arr2))
  ret = []
  let newArr = [...arr1, ...arr2]
  newArr.forEach(item => {
    if (ret.indexOf(item) === -1 ) ret.push(item)
    
  })
  return ret 
}

