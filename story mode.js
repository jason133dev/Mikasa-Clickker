let windah = document.querySelector(`.windah`);
let hitung = document.querySelector(`#hitung`);
let game = document.querySelector(`.game`);
let logo = document.querySelector(`.logo`);
let text = document.querySelector(`.text`);

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
    z++

    text.style.animation = `none`;
    logo.style.display = `none`;
    game.style.height = `89vh`;
}

windah.addEventListener(`click`, pindah);