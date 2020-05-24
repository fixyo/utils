// 1. Object.prototype.toString.call()
const arr = [ 1, 1]
arr.toString()  // '1,1'
Object.prototype.toString.call(an)  // 可以判断所有数据类型 包括 null和undefined


// 2. instanceof 判断对象的原型链中是否能找到类型的prototype
[1] instanceof Array // true 


// 3. Array.isArray()

