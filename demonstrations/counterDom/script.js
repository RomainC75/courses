
let counter = 0
const h1 = document.querySelector('h1')
h1.textContent=counter


const buttonMinus = document.querySelector('.buttons > button:nth-child(1)')
const buttonPlus = document.querySelector('.buttons > button:nth-child(2)')

buttonMinus.addEventListener('click',()=>{
    if(h1.textContent>parseInt(0)){
        h1.textContent = parseInt(h1.textContent)-1
    }
})

buttonPlus.addEventListener('click',()=>{
    h1.textContent = parseInt(h1.textContent)+1
})