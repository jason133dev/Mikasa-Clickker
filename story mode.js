let windah = document.querySelector(`.windah`);
let hitung = document.querySelector(`#hitung`);
let game = document.querySelector(`.game`);
let logo = document.querySelector(`.logo`);
let text = document.querySelector(`.text`);
let panah = document.querySelector(`.panah`);
let btn1 = document.querySelector(`#btn-mode1`);
let btn2 = document.querySelector(`#btn-mode2`);
let hamburger = document.querySelector(`.hamburger`);
let portal = document.querySelector(`.portal`);
let windahAnimasi = document.querySelector(`.windah-animasi`);
let body = document.querySelector(`body`);
let leaderboard = document.querySelector(`.leaderboard`);
let bar = document.querySelector(`.bar`);
let barInner = document.querySelector(`.bar-inner`);
let barStatus = document.querySelector(`.bar-status`);
let barShadow = document.querySelector(`.bar-shadow`);

let klik = 0;
let persen = 0;

// trail
let coords = { x: 0, y: 0 };
let trail = document.querySelectorAll(`.trail`);
trail.forEach((t) => {
    t.x = 0;
    t.y = 0;
});

window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX
    coords.y = e.clientY

    trail.forEach((t) => {
        t.classList.remove(`hilang`);
    })
});

function trailAnimation() {
    let x = coords.x;
    let y = coords.y;

    trail.forEach((t, index) => {
        t.style.translate = `${x - 12}px ${y - 12}px`;
        t.style.scale = (trail.length - index) / trail.length;

        t.x = x;
        t.y = y;

        let nextTrail = trail[index + 1] || trail[0];
        x += (nextTrail.x - x) * 0.3;
        y += (nextTrail.y - y) * 0.3;
    });

    requestAnimationFrame(trailAnimation);
}

trailAnimation();

function pindah() {
    // logic pindah
    let lebarLayar = game.clientWidth;
    let tinggiLayar = game.clientHeight;

    let lebarBox = windah.offsetWidth;
    let tinggiBox = windah.offsetHeight;

    let xMax = (lebarLayar - lebarBox) / 2;
    let yMax = (tinggiLayar - tinggiBox) / 2;

    let xwindah = Math.floor(Math.random() * (xMax * 2)) - xMax;
    let ywindah = Math.floor(Math.random() * (yMax * 2)) - yMax;
    windah.style.translate = `${xwindah}px ${ywindah}px`;

    // trail windah
    let coords2 = { x: 0, y: 0 };
    let trailWindah = document.querySelectorAll(`.trail-windah`);

    coords2.x = xwindah;
    coords2.y = ywindah;

    let x = coords2.x;
    let y = coords2.y;

    trailWindah.forEach((t, index) => {
        setTimeout(() => {
            t.style.translate = `${xwindah}px ${ywindah}px`;

            let scaleValue = (trailWindah.length - index) / trailWindah.length;
            t.style.scale = scaleValue;
        }, (index + 1) * 20);
    });

    // logic persen
    klik++;
    let rumus = Math.sqrt(klik);
    persen = Math.min(rumus, 100);

    barStatus.innerHTML = persen.toFixed(1) + `%`;

    let posisiBarInner = persen - 100;
    barInner.style.translate = `${posisiBarInner}% -2px`;

    // logic tampilan
    let UI = [panah, btn1, btn2, hamburger, text, leaderboard];
    UI.forEach(el => el.classList.add(`hilang`));
    trailWindah.forEach((e) => {e.classList.remove(`hilang`)});
    game.style.height = `89vh`;

    setTimeout(() => {
        bar.classList.remove(`hilang`);
        barInner.classList.remove(`hilang`);
        barShadow.classList.remove(`hilang`);
        UI.forEach(el => el.style.display = `none`);
        portal.style.display = `none`;
    }, 800);

    bar.style.animation = `getar-tipis .5s ease`;
    setTimeout(() => {
        bar.style.animation = `none`;
    }, 500);

    barShadow.style.boxShadow = `0px 0px 41px 0px rgba(255, 217, 0, 0.83)`;
    setTimeout(() => {
        barShadow.style.boxShadow = `none`;
    }, 400);
}

windah.addEventListener(`click`, pindah);