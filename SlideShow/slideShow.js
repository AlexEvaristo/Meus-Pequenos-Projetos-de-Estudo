'use strict';
//Array das imagens
const images = [
    {  'id' : '1' ,  'url' : './img/chrono.jpg'  } ,
    {  'id' : '2' ,  'url' : './img/inuyasha.jpg'  } ,
    {  'id' : '3' ,  'url' : './img/tenchi.jpg'  } ,
    {  'id' : '4' ,  'url' : './img/tenjhotenge.jpg'  } ,
    {  'id' : '5' ,  'url' : './img/yuyuhakusho.jpg'  } ,
    {  'id' : '6' ,  'url' : './img/ippo.png'  } ,
]

//CONTAINER 
const containerItems = document.querySelector('#container-items')

//FUNÇÃO PARA RECEBER AS IMAGENS
const loadImages = ( images, containerItems ) => {
    images.forEach (Image => {
        containerItems.innerHTML += `
        <div class = 'item'>
            <img src= '${Image.url}'
        </div>
        `
    } )}


loadImages( images, containerItems );

let items = document.querySelectorAll( '.item' );

//FUNÇÃO ANTERIOR (PREVIOUS)
const previous = () => {
    containerItems.appendChild(items[0]);
    items  = document.querySelectorAll( '.item' );
}

//FUNÇÃO PRÓXIMO (NEXT)
const next = () => {
    
    const lastitem = items[items.length - 1];
    
    containerItems.insertBefore( lastitem, items[0] );
    //ler a lista de itens
    items = document.querySelectorAll( '.item' );
}
document.querySelector( '#previous' ).addEventListener('click', previous);
document.querySelector( '#next' ).addEventListener('click', next);