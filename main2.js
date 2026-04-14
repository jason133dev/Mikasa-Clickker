let hamburger = document.querySelector(`.hamburger`);
let dropdown = document.querySelector(`.dropdown`);

function toogle() {
    dropdown.classList.toggle(`aktif`);
}

hamburger.addEventListener(`click`,toogle);