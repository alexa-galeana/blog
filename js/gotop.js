document.querySelector('.button-up')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById("button-up").addEventListener("click", scrollup);

function scrollup(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollup);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 100){
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 100){
        buttonUp.style.transform = "scale(0)"
    }

}


