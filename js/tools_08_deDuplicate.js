var objArr = [
  {id: 1,vale: 2},
  {id: 2,vale: 2},
  {id: 1,vale: 2},
  {id: 3,vale: 2},
  {id: 4,vale: 2},
  {id: 1,vale: 2},
  {id: 5,vale: 2}
]

function deDuplicate(objArr) {
  let obj = {}
  let arr = []

  objArr.forEach(item => {
    if (!obj[item.id]) {
      arr.push(item)
      obj[item.id] = 1
    }
  })

  return arr
}

// let unique = deDuplicate(objArr) 
// console.log(unique)

 let duplicate = [1, 11, 1, 3, 4, 3, 5, 6]
//  let unique = Array.from(new Set(duplicate))

function distinct(list) {
  let ret = []
  list.forEach(item => {
    if (ret.indexOf(item) < 0) {
      ret.push(item)
    }
  })

  return ret 
}
let unique = distinct(duplicate)
console.log(unique)

