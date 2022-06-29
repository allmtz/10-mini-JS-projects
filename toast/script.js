

const btn = document.querySelector('button')
const container = document.getElementById('container')
        
btn.addEventListener('click',createNotificaiton)

 function createNotificaiton(){

     const div = document.createElement('div');
     div.classList.add('card');

     div.innerHTML= ('<h3>Surprise!</h3>');

     container.append(div);

     setTimeout( () => {div.remove();},3000);

 }




 