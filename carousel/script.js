

    const imgs = document.querySelectorAll('img');
    const imgContainer = document.querySelector('.img-container');
    let i = 0;
    
    
    function moveImg(){
    
        i++;
    
        let value = -i * 100;    
        imgContainer.style.transform = `translateX(${value}%)`
    
        if( i > imgs.length - 1){
        imgContainer.style.transform = 'translateX(0)'
        i = 0
    
        }
    
    }
    
    setInterval(moveImg,3000)
    