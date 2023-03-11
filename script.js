let hamBtn = document.querySelector('.hamburger')
let nav = document.querySelector('nav')


hamBtn.addEventListener('click',()=>{
   nav.classList.toggle('open-close')
})