let box = document.querySelector(`.box`);
let hitung = document.querySelector(`#hitung`);
let ara = new Audio(`ara-ara-windah-basudara.mp3`);
let lagu = new Audio(`low-cortisol-song.mp3`);
let game = document.querySelector(`.game`);
let logo = document.querySelector(`.logo`);
let text = document.querySelector(`.text`);
let timerText = document.querySelector(`#timer`);

let z = 0;
let time = 60;
let guard = false;
let timer;

function pengurang() {
    time = time - 1;
    let menit = String(Math.floor(time / 60)).padStart(2,`0`);
    let detik = String(time % 60).padStart(2,`0`);

    timerText.innerHTML = `Time: <br>${menit}:${detik}`;

    if (time < 10) {
        timerText.style.animation = `bling 0.2s ease-in-out infinite alternate`;
    }

    if (time == 0) {
        clearInterval(timer);
    }
}

function mulaiTimer() {
    if (guard) {return;}

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

    let lebarLayar = game.clientWidth;
    let tinggiLayar = game.clientHeight;

    let lebarBox = box.offsetWidth;
    let tinggiBox = box.offsetHeight;

    let xMax = (lebarLayar - lebarBox) / 2;
    let yMax = (tinggiLayar - tinggiBox) / 2;

    let x = Math.floor(Math.random() * (xMax * 2)) - xMax;
    let y = Math.floor(Math.random() * (yMax * 2)) - yMax;

    ara.currentTime = 0;
    ara.play();
    ara.volume = 1;

    box.style.translate = `${x}px ${y}px`;
    z++

    text.style.animation = `none`;
    logo.style.display = `none`;
    hitung.innerHTML = `
        Jumlah ditekan: ${z}
    `;
    game.style.height = `89vh`;
}

box.addEventListener(`click`, pindah);
lagu.addEventListener(`ended`, backsound);