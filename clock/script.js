let time = document.getElementById('divo')
setInterval(()=>{
let clock = new Date().toLocaleTimeString()
clock = clock.split('ص').join('').split('م').join('')
time.innerHTML = clock
},1000)
