var email = document.getElementById('email')

email.addEventListener('focus',()=>{
     email.style.borderColor = "#516770"
})

email.addEventListener('blur',()=>{
     email.style.borderColor = "#ccc"
})

var password = document.getElementById('password')

password.addEventListener('focus',()=>{
     password.style.borderColor = "#516770"
})        

password.addEventListener('blur',()=>{
     password.style.borderColor = "#ccc"
})


