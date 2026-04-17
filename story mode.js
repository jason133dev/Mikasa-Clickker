let windah = document.querySelector(`.windah`);
let hitung = document.querySelector(`#hitung`);
let game = document.querySelector(`.game`);
let logo = document.querySelector(`.logo`);
let text = document.querySelector(`.text`);
let panah = document.querySelector(`.panah`);
let btn1 = document.querySelector(`#btn-mode1`);
let btn2 = document.querySelector(`#btn-mode2`);
let hamburger = document.querySelector(`.hamburger`);
let selesai = document.querySelector(`.selesai`);
let portal = document.querySelector(`.portal`);
let windahAnimasi = document.querySelector(`.windah-animasi`);
let body = document.querySelector(`body`);

function pindah() {
    let lebarLayar = game.clientWidth;
    let tinggiLayar = game.clientHeight;

    let lebarBox = windah.offsetWidth;
    let tinggiBox = windah.offsetHeight;

    let xMax = (lebarLayar - lebarBox) / 2;
    let yMax = (tinggiLayar - tinggiBox) / 2;

    let x = Math.floor(Math.random() * (xMax * 2)) - xMax;
    let y = Math.floor(Math.random() * (yMax * 2)) - yMax;
    windah.style.translate = `${x}px ${y}px`;

    let UI = [panah, btn1, btn2, hamburger, text, selesai];
    UI.forEach(el => el.classList.add(`hilang`));
    text.style.animation = `none`;
    logo.style.display = `none`;
    game.style.height = `89vh`;
}

windah.addEventListener(`click`, pindah);