Function.prototype.call1 = function(context) {
  var ctx = context || window

  ctx.fn = this 

  let args = [...arguments].slice(1)
  let result = ctx.fn(...args)

  delete ctx.fn

  return result 
}


Function.prototype.apply1 = function(context, arr) {
  var ctx = context || window 

  ctx.fn = this 
  
  // let args = [...arguments].slice(1)

  let result 

  if (!arr) {
    result = ctx.fn()
  } else {
    result = ctx.fn(...args)
  }

  delete ctx.fn 

  return result
}


/**
 * @param {*} context 
 * @description bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )
 */
Function.prototype.bind1 = function(context) {
  if (typeof this !== "function") {
    throw new Error("this is not callable");
  }

  var self = this; 
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound;
}

