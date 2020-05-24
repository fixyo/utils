// 模块化主要用来抽离公共代码，隔离作用域，避免变量冲突
// 模块特性：1.为创建一个内部作用域而调用一个包装函数  .
//          2. 包装函数的返回值至少包含一个对内部函数的引用，这样才会创建涵盖整个包装函数内部作用域的闭包

// CommonJS 
// require、module.exports、exports 
// 同步加载模块，它对模块的依赖发生在代码运行阶段，不适合在浏览器端做异步加载
// exports实际上是一个对module.exports的引用
exports.add = function add() {}

module.exports.add = function add() {}

// 不能给exports赋值，否则会断开与module.exports的连接


// ES6 Module 
// 特点：import、export ES6模块化不是对象
// import会在JavaScript引擎静态分析，在编译时就引入模块代码 而不是在代码运行时加载 更适合异步
//  <script type="module" src="./module.js"></script> HTML中引入模块 

// Advantages:
// 使用静态分析工具检测出哪些模块没有被调用过 比如 引入工具类库时，工程中可能只用到其中一部分组件或接口，
// 但是可能会将其代码完整的加载进来。未被调用的模块代码永远不会被执行。通过静态分析可以在打包时去掉这些未曾使用
// 的代码，减少资源体积

// 模块变量类型检测。ES6 Module的静态模块结构有助于确保模块之间传递的值或接口类型是正确的 

// 编译器优化。在CommonJS等动态模块系统中，无论采用哪种方式，本质上导入的都是一个对象，而ES6 Module支持
// 直接导入变量，减少引用层级，程序效率高

// CommonJS模块引用后是一个值的拷贝，而ESModule引用最后一个值的动态映射，并且这个映射是只读的
// commonjs模块输出的是值的拷贝，一旦输出，无论模块内部怎么变化，都无法影响之前的引用
// ESModule是引擎会遇到import后生成一个引用链接，在脚本执行阶段才会根据这个引用链接去模块里面取值，
// 模块内部的原始值变了 import加载的模块也会变 

// CommonJS运行时加载，ESModule编译阶段引用




