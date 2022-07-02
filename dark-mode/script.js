

const btn = document.querySelector('.btn')
const body = document.querySelector('body')
const container = document.querySelector('.container')



function darkMode(){

    btn.classList.toggle('btn-active')
    body.classList.toggle('body-active')
    container.classList.toggle('container-active')
    
}

btn.addEventListener('click',darkMode)
