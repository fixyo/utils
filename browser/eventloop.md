## 从Event Loop谈JS的运行机制
https://juejin.im/post/5e22b391f265da3e204d8c14
- js引擎线程
- 事件触发线程
- 定时器触发线程

- js分为同步任务和异步任务
- 同步任务都在主线程上执行，形成一个执行栈
- 主线程之外，事件触发线程管理一个事件队列（task queue），只要异步任务有了运行结果，便把他们的回调操作添加到事件队列中。
- 一旦执行栈中所有同步任务执行完毕（此时js引擎空闲）系统会读取任务队列，将可以执行的回调添加到可执行行栈中，开始执行
- setTimeout推入的事件不能准时执行，因为在它推到事件列表时，主线程还不是空闲状态。
- 主线程执行时会产生执行栈，栈中的代码调用某些api时，会在事件队列中添加各种事件
- 栈中的代码执行完毕，读取事件队列中的事件，执行回调
- call stack中的代码执行完毕后才会读取事件队列中事件
- 上述事件循环机制的核心是：js引擎线程和事件触发线程

setTimeout后是如何等待特定事件后才添加到事件队列中的？

它是由定时器线程控制（js引擎无暇顾及）
js引擎是单线程，如果处于阻塞状态就会影响计算的准确性，有必要单独开一个线程来计时
当使用setTimeout或setInterval时，需要计时器线程计时，计时完成就会将特定的事件推入事件队列中

```js
setTimeout(function() {
    console.log('hello')
}, 1000)
```
定时器计时1000毫秒后，将回调函数推入事件队列中，等待主线程执行

## 事件循环进阶：macrotask与microtask

```js
console.log('script start')

setTimeout(function() {
    console.log('setTimeout')
}, 0)

Promise.resolve().then(function() {
    console.log('promise1')
}).then(function() {
    console.log('promise2')
})
console.log('script end')

// 执行顺序
script start -> script end -> promise1 -> promsie2 -> setTimeout

```
JS分为两种任务类型：macrotask和microtask，microtask称为jbos，macrotask称为task

- macrotask,可以理解每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放入执行栈中）
   - 每个task会从头到尾将这个任务执行完毕，不会执行其他
   - 浏览器为了能够使得JS内部task与DOM任务能够有序执行，会在一个task执行结束后，下一个task执行开始前，对页面进行重新渲染（task-》render -》 task）
- microtask，当前task执行结束后立即执行的任务
    - 在当前task任务后，下一个task之前，在渲染之前
    - 他的响应速度相比setTimeout更快，因为无需等待
    - 在某个macrotask执行完毕后，就会将在他执行期间产生的所有microtask都执行完毕（在渲染前）

macroTask与microTask

- macrotask：主代码块，setTimout， setInterval（事件队列中的每个事件都是一个macrotask）
- microtask： promise， process.nextTick
- node环境下process.nextTick优先级高于promise，宏任务结束后会先执行微任务队列中的nextTickQueue部分，然后才是promise
- macrotask的事件都是放在一个事件队列中的，而这个队列是由事件触发线程维护的
- microtask中所有的微任务都是添加到微任务队列JOBqueue中，等待macrotask执行完毕后执行，这个队列由js引擎线程维护。
- 

- 执行一个宏任务（栈中没有就从事件队列中获取）
- 执行过程中如果遇到微任务，就添加到为微任务队列中
- 宏任务执行完毕后，立即执行当前微热任务队列中的所有微任务（依次执行）
- 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
- 渲染完毕后JS线程继续接管，开始下一个宏任务（从事件队列中获取）
