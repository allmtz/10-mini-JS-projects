

const body = document.querySelector('body')
const btn = document.querySelector('button')

function randy(){
    let value = Math.floor(Math.random() * 255) 
    return value
}

function rgb(){
    let r = randy()
    let g = randy()
    let b = randy()

    const newColor = `rgb(${r},${g},${b})`
    body.style.setProperty('--color', newColor)

}

btn.addEventListener('click', rgb)




