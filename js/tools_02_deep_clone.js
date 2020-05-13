function typeOf(obj) {
  let toString = Object.prototype.toString

  let map = {
    '[object Object]': 'object',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object RegExp]': 'regexp',
    '[object Date]': 'date',
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Boolean]': 'boolean',
    '[object Null]': 'null',
    '[object Undefined]': 'undefined'
  }

  return map[toString.call(obj)]
    
}

function deepCopy(obj) {
  let type = typeOf(obj)
  let ret 

  if (type === 'object') {
    ret = {}
  } else if (type === 'array') {
    ret = []
  } else {
    return obj 
  }

  if (type === 'object') {
    for (let k in obj) {
      ret[k] = deepCopy(obj[k])
    }
  } else if (type === 'array') {
    for (let i = 0; i < obj.length; i++) {
      ret[i] = deepCopy(obj[i])
    }
  }
  
  return ret 
}

let origin = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
}

let copy = deepCopy(origin)


