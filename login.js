let btn = document.querySelector('#btn1')
btn.addEventListener('click', function(event){
event.preventDefault()
let login = document.querySelector('#login')
let senha = document.querySelector('#senha')
if(login.value && senha.value == 'admin'){
  window.location.href='dashboard.html'
}else{
  window.location.href='404.html'
}
})