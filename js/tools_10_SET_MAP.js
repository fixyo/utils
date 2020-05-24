/**
 * SET主要用来数组去重
 * 向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值,但是NaN等于NaN
 * 
 */
let arr = [1, 1, 2, 3, 5, 5, 8, 9, 8]
let unique = [...new Set(arr)]
console.log(unique, 'uinque')

let s = new Set()
let a = NaN
let b = NaN 
s.add(a)
s.add(b)
console.log([...s])  // NaN 

s.size // 1
s.add(1)
s.delete(1)
s.has(1)
clear() // 清空

Array.from(s) //  将set变成数组

s.keys()  //集合中所有key的迭代器
s.values() // 集合中所有值的迭代器
s.entries() // 集合中所有元素键值对迭代器

// set实现intersect，union，difference
let set1 = new Set([1, 2, 3, 4])
let set2 = new Set([2, 3, 4, 6, 9])
let intersect = new Set([...set1].filter(value => set2.has(value)))
let union = new Set([...set1, ...set2])
let difference = new Set([...set1].filter(value => !set2.has(value)))


/**
 * 字典(Map)
 * 集合和字典可以存储不重复的值
 * 集合是以[value, value]的形式存储元素，字典是以[key,value]的形式存储
 * 
 */
const m = new Map()
const o = { p: 'hh'}
m.set(o, 'content')

