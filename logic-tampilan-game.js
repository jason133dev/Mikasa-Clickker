let modeBtn = document.querySelector(`.mode`);
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
let leaderboard = document.querySelector(`.leaderboard`);

// pause
let pause = document.querySelector(`.pause`);
let pauseH1 = document.querySelector(`#pause-h1`);
let pauseMenu = document.querySelector(`.pause-menu`);
let pauseHome = document.querySelector(`.home`);
let pausePlay = document.querySelector(`.play`);
let pauseRetry = document.querySelector(`.retry`);
let pauseWall = document.querySelector(`.pause-wall`);

// animasi masuk
let UI = [modeBtn, hamburger, text, game];
UI.forEach((e) => { e.style.pointerEvents = `none` });
trailWindah.forEach((e) => { e.style.pointerEvents = `none` });

windah.style.pointerEvents = `none`;

setTimeout(() => {
    UI.forEach((e) => { e.classList.remove('hilang') });
    body.style.backgroundColor = `rgb(122, 191, 205)`;
    body.style.backgroundImage = `radial-gradient(rgba(255, 255, 255, 0.3) 2px, transparent 0)`;
}, 3600);

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
let mode = await import(`./story-mode.js`);
mode.start();

btn1.addEventListener(`click`, async () => {
    body.style.backgroundColor = `rgb(122, 191, 205)`;
    body.style.backgroundImage = `radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0)`;
    body.style.backgroundSize = `30px 30px`;
    body.style.backgroundPosition = `-5px -5px`;
    leaderboard.style.display = `none`;

    btn1.classList.add(`aktif1`);
    btn1.classList.remove(`pasif`);
    btn2.classList.add(`pasif`);
    btn2.classList.remove(`aktif1`);

    pauseMenu.style.backgroundColor = `rgba(104, 161, 173, 0.66)`;
    pauseH1.style.backgroundColor = `rgba(86, 135, 145, 0.644)`;

    // script
    if (mode && typeof mode.stop === `function`) {
        mode.stop();
    }

    mode = await import(`./story-mode.js`);
    mode.start();
});

btn2.addEventListener(`click`, async () => {
    body.style.backgroundColor = `rgb(205, 122, 122)`;
    body.style.backgroundImage = `linear-gradient(
      -90deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap)
    ),
    linear-gradient(
      0deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap)
    )`;
    body.style.backgroundSize = `var(--gap) var(--gap)`;
    leaderboard.style.display = `flex`;

    btn2.classList.add(`aktif2`);
    btn2.classList.remove(`pasif`);
    btn1.classList.add(`pasif`);
    btn1.classList.remove(`aktif2`);
    
    pauseMenu.style.backgroundColor = `rgba(177, 106, 106, 0.66)`;
    pauseH1.style.backgroundColor = `rgb(165, 98, 98, 0.644)`;

    // script
    if (mode && typeof mode.stop === `function`) {
        mode.stop();
    }

    mode = await import(`./timer-mode.js`);
    mode.start();
});