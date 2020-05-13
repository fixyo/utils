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
    onfulFilled = typeof onfulFilled === 'function' ? onfulFilled : value => value 
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }

    let promise2 = new Promise((resolve, reject) => {

      if (this.state === 'fulfilled') {
        setTimeout(() => {
          let x = onfulFilled(this.value)
          resolvePromise(promise2, x, resolve, reject)
  
        }, 0)
      }
  
      if (this.reason === 'rejected') {
        setTimeout(() => {
          let x = onRejected(this.reason)
          resolvePromise(promise2, x, resolve, reject)
        }, 0)
      }
  
      if (this.state === 'pending') {
        this.fullFilledCbs.push(value => {
          setTimeout(() => {
            let x = onfulFilled(value)
            resolvePromise(promise2, x, resolve, reject)
          }, 0)
        })
  
        this.rejectedCbs.push(reason => {
          setTimeout(() => {
            let x = onRejected(reason)
            resolvePromise(promise2, x, resolve, reject)
          }, 0)
        })
      }
    })

    return promise2
  }

}

function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new Error('xxx'))
  }

  let called 

  if (x !== null && (typeof x === 'function' || typeof x === 'object')) {

  } else {
    // x为普通值
    resolve(x)
  }
}

let p = new EPromise((resolve, reject) => {
  setTimeout(() => {

    resolve(1)
  }, 1000)
})
p.then(res => {
  console.log(res, 'res')
  return res
}).then(res => {
  console.log(res, 'res2')
})
console.log('hahah')

