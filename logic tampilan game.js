let panah = document.querySelector(`.panah`);
let btn = document.querySelector(`.btn-mode`);
let hamburger = document.querySelector(`.hamburger`);
let text = document.querySelector(`.text`);
let selesai = document.querySelector(`.selesai`);
let game = document.querySelector(`.game`);
let portal = document.querySelector(`.portal`);
let windahAnimasi = document.querySelector(`.windah-animasi`);

// animasi masuk
let UI = [panah, btn, hamburger, text, selesai, game];

setTimeout(() => {
   UI.forEach(el => el.classList.remove('hilang'));
}, 3000);

setTimeout(() => {
   UI.forEach(el => el.classList.remove('smooth'));
}, 4000);

setTimeout(() => {
    portal.classList.add(`hilang`);
    windahAnimasi.classList.add(`hilang`);
}, 5000);

// animasi panah
btn.addEventListener(`mouseover`, () => {
    panah.style.display = `flex`;
})

btn.addEventListener(`mouseout`, () => {
    panah.style.display = `none`;
})