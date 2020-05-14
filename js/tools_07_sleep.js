function sleep (time) {
  let now = new Date().getTime() 
  while(new Date().getTime() - now < time) {
    continue
  }
}

sleep(3000)
console.log(1)