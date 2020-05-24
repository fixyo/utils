function isPalindrom(str) {
  if(!str) return 

  let newStr = str.toString().split('').reverse().join('')
  return newStr = str 
}

function isPalindrom(num) {
  if (num < 0) return 
  var str = num + ''
  var reversedStr = ''
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]
  }
  return reversedStr === str 
}