let btn1 = document.querySelector(`#btn-mode1`);
let btn2 = document.querySelector(`#btn-mode2`);
let hamburger = document.querySelector(`.hamburger`);
let text = document.querySelector(`.text`);
let game = document.querySelector(`.game`);
let portal = document.querySelector(`.portal`);
let windahAnimasi = document.querySelector(`.windah-animasi`);
let windah = document.querySelector(`.windah`);
let body = document.querySelector(`body`);
let trailWindah = document.querySelectorAll(`.trail-windah`);

// animasi masuk
let UI = [btn1, btn2, hamburger, text, game];
UI.forEach((e) => { e.style.pointerEvents = `none` });
trailWindah.forEach((e) => { e.style.pointerEvents = `none` });

windah.style.pointerEvents = `none`;

setTimeout(() => {
    portal.classList.remove('hilang');
}, 1000);

setTimeout(() => {
    UI.forEach((e) => { e.classList.remove('hilang') });
    body.style.backgroundColor = `rgb(122, 191, 205)`;
}, 4500);

setTimeout(() => {
    UI.forEach((e) => { e.classList.remove('smooth') });
    UI.forEach((e) => { e.style.pointerEvents = `all` });
    windahAnimasi.classList.add(`hilang`);
    windah.style.pointerEvents = `all`;
}, 5000);

setTimeout(() => {
    portal.classList.add(`hilang`);
    windahAnimasi.style.pointerEvents = `none`;
}, 5100);

setTimeout(() => {
    portal.style.display = `none`;
}, 5700);

// mode
let mode;

btn1.addEventListener(`click`, async () => {
    body.style.backgroundColor = `rgb(122, 191, 205)`;
    btn1.classList.add(`aktif`);
    btn1.classList.remove(`pasif`);
    btn2.classList.add(`pasif`);
    btn2.classList.remove(`aktif`);

    // script
    if (mode && typeof mode.stop === `function`) {
        mode.stop();
    }

    mode = await import(`./story mode.js`);
    mode.start();
});

btn2.addEventListener(`click`, async () => {
    body.style.backgroundColor = `rgb(205, 122, 122)`;
    btn2.classList.add(`aktif`);
    btn2.classList.remove(`pasif`);
    btn1.classList.add(`pasif`);
    btn1.classList.remove(`aktif`);

    // script
    if (mode && typeof mode.stop === `function`) {
        mode.stop();
    }

    mode = await import(`./timer mode.js`);
    mode.start();
});