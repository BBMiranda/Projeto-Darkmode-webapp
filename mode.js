
let btn = document.querySelector('#btn1')
btn.addEventListener('click', function(event){
event.preventDefault()
corSite = document.body.style.background = '#201e1e'
title = document.body.style.color = 'white'
})

let btn1 = document.querySelector('#btn2')
btn1.addEventListener('click', function(event){
event.preventDefault()
corSite = document.body.style.background = 'white'
title = document.body.style.color = '#201e1e'
})