// 1.
const bar = new Bar()  // it works
function Bar() {
  this.bar = 42 
}

// class声明会提升，但不会初始化赋值，Foo进入暂时性死区
const foo = new Foo()  // ReferenceError: Foo is not defined 
class Foo {
  constructor() {
    this.foo = 42 
  }
}


// 2. class声明内部会启用严格模式
function Bar() {
  baz = 42  // 未声明变量 ok
}

class Foo {
  constructor() {
    fol = 42  // ReferenceError: fol is not defined 
  }
}


// 3. class的所有方法（静态和实例）都是不可枚举的 
class Foo {
  constructor() {
    this.foo = 34
  }

  static answer() {
    return 45
  }

  print() {
    console.log(this.foo)
  }
}

Object.keys(Foo) // []


// 4. class 内部无法重写类名
class Foo {
  constructor() {
    this.foo = 42
    Foo = 'Fol' // TypeError: Assignment to constant variable
  }
}
