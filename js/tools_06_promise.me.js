class EPromise {
  // 接受一个executor参数
  constructor(executor) {
    // 三种状态 pending fulfilled rejected 
    this.state = 'pending'
    // 成功的值
    this.value = undefined
    // 失败的原因
    this.reason = undefined

    this.fullFilledCbs = []
    this.rejectedCbs = []

    const resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value 
        this.fullFilledCbs.forEach(cb => cb(this.value))
      }
    }

    const reject = reason => {
      if (this.state === 'pending') {
        this.state = 'reject'
        this.reason = reason 
        this.rejectedCbs.forEach(cb => cb(this.reason))
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

    if (this.state === 'pending') {
      this.fullFilledCbs.push(value => {
        setTimeout(() => {
          onfulFilled(value)
        }, 0)
      })

      this.rejectedCbs.push(reason => {
        setTimeout(() => {
          onRejected(reason)
        }, 0)
      })
    }
  }

}

let p = new EPromise((resolve, reject) => {
  setTimeout(() => {

    resolve(1)
  }, 1000)
})
p.then(res => {
  console.log(res, 'res')
})
console.log('hahah')

