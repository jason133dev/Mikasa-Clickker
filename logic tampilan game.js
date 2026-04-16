let panah = document.querySelector(`.panah`);
let btn = document.querySelector(`.btn-mode`);
let hamburger = document.querySelector(`.hamburger`);
let text = document.querySelector(`.text`);
let selesai = document.querySelector(`.selesai`);
let game = document.querySelector(`.game`);
let portal = document.querySelector(`.portal`);
let windahAnimasi = document.querySelector(`.windah-animasi`);
let windah = document.querySelector(`.windah`);

// animasi masuk
let UI = [panah, btn, hamburger, text, selesai, game];
UI.forEach(el => el.style.pointerEvents = `none`);

windah.style.pointerEvents = `none`;

setTimeout(() => {
    portal.classList.remove('hilang');
}, 1000);

setTimeout(() => {
   UI.forEach(el => el.classList.remove('hilang'));
}, 4500);

setTimeout(() => {
   UI.forEach(el => el.classList.remove('smooth'));
   UI.forEach(el => el.style.pointerEvents = `all`);
   windah.style.pointerEvents = `all`;
}, 5000);

setTimeout(() => {
    windahAnimasi.classList.add(`hilang`);
    portal.classList.add(`hilang`);    
}, 5100);

// animasi panah
btn.addEventListener(`mouseover`, () => {
    panah.style.display = `flex`;
})

btn.addEventListener(`mouseout`, () => {
    panah.style.display = `none`;
})