let windah = document.querySelector(`.windah`);
let hitung = document.querySelector(`#hitung`);
let game = document.querySelector(`.game`);
let logo = document.querySelector(`.logo`);
let text = document.querySelector(`.text`);
let modeBtn = document.querySelector(`.mode`);
let btn1 = document.querySelector(`#btn-mode1`);
let btn2 = document.querySelector(`#btn-mode2`);
let hamburger = document.querySelector(`.hamburger`);
let portal = document.querySelector(`.portal`);
let windahAnimasi = document.querySelector(`.windah-animasi`);
let body = document.querySelector(`body`);
let leaderboard = document.querySelector(`.leaderboard`);
let live = document.querySelector(`.live`);
let liveDot = document.querySelector(`.live-dot`);
let liveText = document.querySelector(`#live-text`);
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

let klik = 0;
let persen = 0;

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
    console.log(rumus);
    persen = Math.min(rumus, 100);
    barStatus.innerHTML = persen.toFixed(1) + `%`;
    barStatusKecil.innerHTML = persen.toFixed(1) + `%`;

    let posisiBarInner = persen - 100;
    barInner.style.translate = `${posisiBarInner}%`;
    barInnerKecil.style.translate = `${posisiBarInner}%`;

    if (persen <= 20) {
        liveDot.style.backgroundColor = `rgb(39, 201, 77)`;
        liveDot.style.animation = `stable .5s ease-in-out infinite alternate`;
        liveText.innerHTML = `Dimension: Stable`;
    } else if (persen <= 40) {
        liveDot.style.backgroundColor = `rgb(201, 144, 39)`;
        liveDot.style.animation = `disturbed .5s ease-in-out infinite alternate`;
        liveText.innerHTML = `Dimension: Disturbed`;

        body.style.animation = `getar-tipis .5s ease`;
        setTimeout(() => {
            body.style.animation = `none`;
        }, 500);
    } else if (persen <= 60) {
        liveDot.style.backgroundColor = `rgb(201, 144, 39)`;
        liveDot.style.animation = `unstable .5s ease-in-out infinite alternate`;
        liveText.innerHTML = `Dimension: Unstable`;
    } else if (persen <= 80) {
        liveDot.style.backgroundColor = `rgb(201, 39, 39)`;
        liveDot.style.animation = `critical .5s ease-in-out infinite alternate`;
        liveText.innerHTML = `Dimension: Critical`;
    } else {
        liveDot.style.backgroundColor = `rgb(158, 39, 201)`;
        liveDot.style.animation = `collapsing .5s ease-in-out infinite alternate`;
        liveText.innerHTML = `Dimension: Collapsing`;
    }

    // logic tampilan
    let UI = [modeBtn, hamburger, text, leaderboard];
    UI.forEach(el => el.classList.add(`hilang`));
    trailWindah.forEach((e) => { e.classList.remove(`hilang`) });

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

        live.classList.remove(`hilang`)
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

// logic pause
function logicPause() {
    pauseMenu.classList.toggle(`hilang`);
    pauseWall.classList.toggle(`hilang`);
}

function logicPauseHome() {
    location.reload();
}

function logicPauseRetry() {
    klik = 0;
    persen = 0;

    barStatus.innerHTML = `0%`;
    barInner.style.translate = `-100%`;
    barStatusKecil.innerHTML = `0%`;
    barInnerKecil.style.translate = `-100%`;
    windah.style.translate = `0 0`;

    let trailWindah = document.querySelectorAll(`.trail-windah`);
    trailWindah.forEach((t) => {
        t.style.translate = `0px 0px`;
    });

    pauseMenu.classList.add(`hilang`);
    pauseWall.classList.add(`hilang`);
}

function logicPausePlay() {
    pauseMenu.classList.toggle(`hilang`);
    pauseWall.classList.toggle(`hilang`);
}

// export
export function start() {
    windah.addEventListener(`click`, pindah);

    // logic pause
    pause.addEventListener('click', logicPause);

    pauseHome.addEventListener(`click`, logicPauseHome);

    pauseRetry.addEventListener(`click`, logicPauseRetry);

    pausePlay.addEventListener(`click`, logicPausePlay);
}

export function stop() {
    windah.removeEventListener(`click`, pindah);

    // logic pause
    pause.removeEventListener('click', logicPause);

    pauseHome.removeEventListener(`click`, logicPauseHome);

    pauseRetry.removeEventListener(`click`, logicPauseRetry);

    pausePlay.removeEventListener(`click`, logicPausePlay);
}