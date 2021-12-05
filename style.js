const $=document.querySelector.bind(document)
var barmobie=$('.bar-mob');
var menu=$('.menu-bottom');
var blackbg=$('.black-bg');
var close=$('.close');
var body=$('body')

barmobie.onclick=() =>{
    menu.classList.add('active')
    blackbg.classList.add('active')
    close.classList.add('active')
    body.classList.add('no-scroll')
}
blackbg.onclick=() =>{
    menu.classList.remove('active')
    blackbg.classList.remove('active')
    close.classList.remove('active')
    body.classList.remove('no-scroll')
}
close.onclick=() =>{
    menu.classList.remove('active')
    blackbg.classList.remove('active')
    close.classList.remove('active')
    body.classList.remove('no-scroll')
}
window.onscroll=() =>{
    if(window.pageYOffset>40){
        menu.classList.add('hide')
    }
    else{
        menu.classList.remove('hide')
    }
}