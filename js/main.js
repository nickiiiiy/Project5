// header-top-row--mobile
// nav-icon--active

const navBtn=document.querySelector('.nav-icon-btn');
const  navIcon=document.querySelector('.nav-icon');
const nav=document.querySelector('.header-top-row');

navBtn.onclick=function(){
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header-top-row--mobile');
    document.body.classList.toggle('no-scroll');
}

// phone mask
mask('[data-tel-input]');

// Удаление "+", если больше ничего не введено в инпут
const phoneInput=document.querySelectorAll('[data-tel-input]');
phoneInput.forEach((input)=>{
    input.addEventListener('input', ()=>{
        if (input.value =='+') input.value = '';

    })
    input.addEventListener('blur', ()=>{
        if (input.value =='+') input.value = '';

    })
});