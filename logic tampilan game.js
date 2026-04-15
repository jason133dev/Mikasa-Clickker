let panah = document.querySelector(`.panah`);
let btn = document.querySelector(`.btn-mode`);

// animasi panah
btn.addEventListener(`mouseover`, () => {
    panah.style.display = `flex`;
})

btn.addEventListener(`mouseout`, () => {
    panah.style.display = `none`;
})