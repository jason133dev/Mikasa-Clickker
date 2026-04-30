let windah = document.querySelector(`.windah`);
let hitung = document.querySelector(`#hitung`);
let game = document.querySelector(`.game`);
let logo = document.querySelector(`.logo`);
let text = document.querySelector(`.text`);
let btn1 = document.querySelector(`#btn-mode1`);
let btn2 = document.querySelector(`#btn-mode2`);
let hamburger = document.querySelector(`.hamburger`);
let portal = document.querySelector(`.portal`);
let windahAnimasi = document.querySelector(`.windah-animasi`);
let body = document.querySelector(`body`);
let leaderboard = document.querySelector(`.leaderboard`);

// bar normal
let bar = document.querySelector(`.bar`);
let barInner = document.querySelector(`.bar-inner`);
let barStatus = document.querySelector(`.bar-status`);
let barShadow = document.querySelector(`.bar-shadow`);

// bar kecil
let barKecil = document.querySelector(`.bar-kecil`);
let barInnerKecil = document.querySelector(`.bar-inner-kecil`);
let barStatusKecil = document.querySelector(`.bar-status-kecil`);
let barShadowKecil = document.querySelector(`.bar-shadow-kecil`);

// pause
let pause = document.querySelector(`.pause`);
let pauseMenu = document.querySelector(`.pause-menu`);
let pauseHome = document.querySelector(`.home`);
let pausePlay = document.querySelector(`.play`);
let pauseRetry = document.querySelector(`.retry`);
let pauseWall = document.querySelector(`.pause-wall`);

// lagu dan timer
let ara = new Audio(`ara-ara-windah-basudara.mp3`);
let lagu = new Audio(`low-cortisol-song.mp3`);
let timerText = document.querySelector(`#timer`);

let z = 0;
let time = 60;
let guard = false;
let timer;

function pengurang() {
    time--;
    let menit = String(Math.floor(time / 60)).padStart(2, `0`);
    let detik = String(time % 60).padStart(2, `0`);

    timerText.innerHTML = `Time: <br>${menit}:${detik}`;

    if (time < 10) {
        timerText.style.animation = `bling 0.2s ease-in-out infinite alternate`;
    }

    if (time == 0) {
        clearInterval(timer);
    }
}

function mulaiTimer() {
    if (guard) { return; }

    guard = true;
    timer = setInterval(pengurang, 1000);
}

function backsound() {
    lagu.currentTime = 0;
    lagu.play();
    lagu.volume = 0.2;
}

function pindah() {
    lagu.play();
    lagu.volume = 0.2;
    timerText.style.display = `block`;
    mulaiTimer();

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

    ara.currentTime = 0;
    ara.play();
    ara.volume = 1;

    z++

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

    // logic tampilan
    let UI = [btn1, btn2, hamburger, text, leaderboard];
    UI.forEach(el => el.classList.add(`hilang`));
    trailWindah.forEach((e) => { e.classList.remove(`hilang`) });
    game.style.height = `89vh`;

    setTimeout(() => {
        bar.classList.remove(`hilang`);
        barInner.classList.remove(`hilang`);
        barShadow.classList.remove(`hilang`);

        barKecil.classList.remove(`hilang`);
        barInnerKecil.classList.remove(`hilang`);
        barShadowKecil.classList.remove(`hilang`);
        UI.forEach(el => el.style.display = `none`);
        portal.style.display = `none`;
        pause.classList.remove(`hilang`);
    }, 800);

    bar.style.animation = `getar-tipis .5s ease`;
    setTimeout(() => {
        bar.style.animation = `none`;
    }, 500);

    barShadow.style.boxShadow = `0px 0px 41px 0px rgba(255, 217, 0, 0.83)`;
    setTimeout(() => {
        barShadow.style.boxShadow = `none`;
    }, 400);

    barKecil.style.animation = `getar-tipis .5s ease`;
    setTimeout(() => {
        barKecil.style.animation = `none`;
    }, 500);

    barShadowKecil.style.boxShadow = `0px 0px 41px 0px rgba(255, 217, 0, 0.83)`;
    setTimeout(() => {
        barShadowKecil.style.boxShadow = `none`;
    }, 400);
}

// export
export function start() {
    windah.addEventListener(`click`, pindah);
    lagu.addEventListener(`ended`, backsound);
}

export function stop() {
    clearInterval(timer);
    windah.removeEventListener(`click`, pindah);
}