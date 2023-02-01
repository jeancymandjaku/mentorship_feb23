//-----------------------------------------
//------------NOTRE MENU HAMBURGER 
var menu = document.getElementById('btn-hamburger') //on prend l'id btn-hamburger qui se situe sur notre boutton hamburger
var nav = document.getElementById('nav-list-mobile') //on prend l'id nav-list-mobile qui se situe sur notre liste de navigation UL
var exit= document.getElementById('btn-close-mobile') //on prend l'id btn-close-mobile qui se situe sur notre premier li du menu de navigation

menu.addEventListener('click', function(e){
    nav.classList.toggle('nav-list-desktop') //On prend la class de notre Ul qui est la liste de notre menu de navigation
    e.preventDefault();
});

exit.addEventListener('click', function(e){
    nav.classList.add('nav-list-desktop') 
    e.preventDefault();
});
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// GENERATEUR DE NOS DIFFERNTS PROBLEMES
const armedConfutive = document.querySelector('#generateur1');
const naturalDesaters = document.querySelector('#generateur2');
const epidemie = document.querySelector('#generateur3');
const terrorisme = document.querySelector('#generateur4');
const malnutrition = document.querySelector('#generateur5');
// const generateur1 = document.querySelector('#generateur4');
// const generateur1 = document.querySelector('#generateur5');
// const generateur1 = document.querySelector('#generateur6');
// const generateur1 = document.querySelector('#generateur7');

const  btn1 = document.querySelector('#btn-1');
const  btn2 = document.querySelector('#btn-2');
const  btn3 = document.querySelector('#btn-3');
const  btn4 = document.querySelector('#btn-4');
const  btn5 = document.querySelector('#btn-5');
const  btn6 = document.querySelector('#btn-6');
const  btn7 = document.querySelector('#btn-7');
const  btn8 = document.querySelector('#btn-8');
const  btn9 = document.querySelector('#btn-9');
const  btn10 = document.querySelector('#btn-10');
const  btn11 = document.querySelector('#btn-11');
const  btn12 = document.querySelector('#btn-12');
const  btn13 = document.querySelector('#btn-13');
const  btn14 = document.querySelector('#btn-14');


btn1.addEventListener('click', () =>{
    armedConfutive.style.display ='inherit';
    armedConfutive.style.background ='rgba(230, 227, 227, 0.25)';
});
btn2.addEventListener('click', () =>{
    armedConfutive.classList.remove(armedConfutive.style.display ='none');
});


btn3.addEventListener('click', () =>{
    naturalDesaters.style.display ='inherit';
    naturalDesaters.style.background ='rgba(230, 227, 227, 0.25)';
});
btn4.addEventListener('click', () =>{
    naturalDesaters.classList.remove(naturalDesaters.style.display ='none');
});


btn5.addEventListener('click', () =>{
    epidemie.style.display ='inherit';
    epidemie.style.background ='rgba(230, 227, 227, 0.25)';
});
btn6.addEventListener('click', () =>{
    epidemie.classList.remove(epidemie.style.display ='none');
});


btn7.addEventListener('click', () =>{
    terrorisme.style.display ='inherit';
    terrorisme.style.background ='rgba(230, 227, 227, 0.25)';
});
btn8.addEventListener('click', () =>{
    terrorisme.classList.remove(terrorisme.style.display ='none');
});


btn9.addEventListener('click', () =>{
    malnutrition.style.display ='inherit';
    malnutrition.style.background ='rgba(230, 227, 227, 0.25)';
});
btn10.addEventListener('click', () =>{
    malnutrition.classList.remove(malnutrition.style.display ='none');
});


btn11.addEventListener('click', () =>{
    generateur.style.display ='inherit';
    generateur.style.background ='rgba(230, 227, 227, 0.25)';
});
btn12.addEventListener('click', () =>{
    generateur.classList.remove(generateur.style.display ='none');
});


btn13.addEventListener('click', () =>{
    generateur.style.display ='inherit';
    generateur.style.background ='rgba(230, 227, 227, 0.25)';
});
btn14.addEventListener('click', () =>{
    generateur.classList.remove(generateur.style.display ='none');
});












