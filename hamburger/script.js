

const btn = document.getElementsByClassName('btn');
const nav = document.getElementById('nav_id');



btn[0].addEventListener('click',function(){

        nav.classList.toggle('nav_active')
        btn[0].classList.toggle('btn_active')
        
        
    
})

