class EPromise {
  // 接受一个executor参数
  constructor(executor) {
    // 三种状态 pending fulfilled rejected 
    this.state = 'pending'
    // 成功的值
    this.value = undefined
    // 失败的原因
    this.reason = undefined

    const resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value 
      }
    }

    const reject = reason => {
      if (this.state === 'pending') {
        this.state = 'reject'
        this.reason = reason 
      }
    }

    try {
      executor(resolve, reject)
    } catch(err) {
      reject(err)
    }
  }

  then(onfulFilled, onRejected) {
    if (this.state === 'fulfilled') {
      setTimeout(() => {
        onfulFilled(this.value)
      }, 0)
    }

    if (this.reason === 'rejected') {
      setTimeout(() => {
        onRejected(this.reason)
      }, 0)
    }
  }

}

let p = new EPromise((resolve, reject) => {
  resolve(1)
})
p.then(res => {
  console.log(res, 'res')
})
console.log('sss')
// console.log(p)
