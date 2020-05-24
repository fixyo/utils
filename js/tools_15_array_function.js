// 1. 箭头函数没有this, 他会从自己的作用域链的上一层继承this（因此无法使用apply/call/bind）
// 2. 不绑定arguments，箭头函数中调用arguments同样会向作用域链中查询结果
// 3。不绑定super和new.target
// 4. 没有prototype属性，指向undefined
// 5. 无法使用new实例化对象，因为普通构造函数通过new实例化对象时this指向实例对象，而箭头函数没有this值，同时箭头函数也没有prototype

