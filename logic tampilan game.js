let panah = document.querySelector(`.panah`);
let btn1 = document.querySelector(`#btn-mode1`);
let btn2 = document.querySelector(`#btn-mode2`);
let hamburger = document.querySelector(`.hamburger`);
let text = document.querySelector(`.text`);
let selesai = document.querySelector(`.selesai`);
let game = document.querySelector(`.game`);
let portal = document.querySelector(`.portal`);
let windahAnimasi = document.querySelector(`.windah-animasi`);
let windah = document.querySelector(`.windah`);
let body = document.querySelector(`body`);

// animasi masuk
let UI = [panah, btn1, btn2, hamburger, text, selesai, game];
UI.forEach(el => el.style.pointerEvents = `none`);

windah.style.pointerEvents = `none`;

setTimeout(() => {
    portal.classList.remove('hilang');
}, 1000);

setTimeout(() => {
   UI.forEach(el => el.classList.remove('hilang'));
   body.style.backgroundColor = `rgb(122, 191, 205)`;
}, 4500);

setTimeout(() => {
   UI.forEach(el => el.classList.remove('smooth'));
   UI.forEach(el => el.style.pointerEvents = `all`);
   windahAnimasi.classList.add(`hilang`);
   windah.style.pointerEvents = `all`;
}, 5000);

setTimeout(() => {
    portal.classList.add(`hilang`);
    windahAnimasi.style.pointerEvents = `none`;
}, 5100);

// animasi panah
btn1.addEventListener(`mouseover`, () => {
    panah.style.display = `flex`;
})

btn1.addEventListener(`mouseout`, () => {
    panah.style.display = `none`;
})