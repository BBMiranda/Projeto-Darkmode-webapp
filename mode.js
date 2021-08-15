// Peguei o botão */
let btn = document.querySelector("#btn1");
/* Adicionei uma função ao botão */
btn.addEventListener('click', (event) => {
/* Prevent Default comportamento padrão do botão */
event.preventDefault()
corSite = document.body.style.background = '#201e1e'
title = document.body.style.color = 'white'
})

// Peguei o botão */
let btn1 = document.querySelector("#btn2");
/* Adicionei uma função ao botão */
btn1.addEventListener('click',( event) => {
/* Prevent Default comportamento padrão do botão */
event.preventDefault()
corSite = document.body.style.background = 'white'
title = document.body.style.color = '#201e1e'
})
