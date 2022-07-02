


const btn = document.querySelector('#btn-main')
const popup = document.querySelector('.popup-container');
const body = document.querySelector('body')
const closeBtn = document.querySelector('.close-btn')

function open(){

    popup.classList.toggle('popup-active');
    btn.classList.toggle('btn-active');
    body.classList.toggle('body-active');
   
}

function close(){
    popup.classList.toggle('popup-active');
    btn.classList.toggle('btn-active');
    body.classList.toggle('body-active');
   
}

btn.addEventListener('click', open);
closeBtn.addEventListener('click',close);
