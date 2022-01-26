// Consegna: Dati tre array contenenti: 
// - una lista ordinata di 5 immagini, 
// - una lista ordinata dei relativi 5 luoghi e 
// - una lista di 5 news, 
// creare un carosello come nella foto allegata. 
// MILESTONE 1 
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
// MILESTONE 2 
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript. 
// MILESTONE 3 
// Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi: 
// - titolo e 
// - testo. 
// Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.
// BONUS: 
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso l’alto, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso il basso. 

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let slidesSX = '';
let slidesDX = '';

for (let i = 0; i < items.length; i++){
    slidesSX += `<div class="item-img">
                    <img src="${items[i]}">
                </div>`;

    slidesDX += `<div class="img-destra">
                    <img src="${items[i]}">
                </div>
                
                <div class="prev">
                    <i class="fas fa-arrow-circle-up arrow-up"></i>
                </div>
                <div class="next">
                    <i class="fas fa-arrow-circle-down arror-bot"></i>
                </div> 
                `;
}

// creo le slide
let imgSinistra = document.querySelector('.container-img-sx')
imgSinistra.innerHTML = slidesSX;

let imgDestra = document.querySelector('.container-img-dx')
imgDestra.innerHTML = slidesDX;

// freccie UP / BOT



// inizializziamo una variabile che mi tenga traccia della slide attiva
let slideCorrente = 0;

let immages = document.getElementsByClassName('item-img');
immages[slideCorrente].classList.add('active');