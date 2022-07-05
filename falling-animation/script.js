

const container = document.body.querySelector('.container')

function create(){

    let div = document.createElement('div')
    div.classList.add('item')
    div.innerText = '💧'
    container.append(div)

    div.style.left = Math.floor(Math.random() * 100) + 'vw'
    
    div.style.animationDuration= `${Math.random() * 4 + 1}s`

    setTimeout(() => {
        div.remove()
    },5000)

}

setInterval(create,200)





