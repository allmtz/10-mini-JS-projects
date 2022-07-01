


const p = document.getElementById('text-box')

const string = 'Your mission, should you choose to accept it...';
const str_arr = string.split('');
let i = 0

function display_text (){

    if(i > str_arr.length - 1 ){
        i = 0
        p.textContent = ''
    }

    else p.textContent += str_arr[i], i++ 

}

setInterval(display_text,100)








