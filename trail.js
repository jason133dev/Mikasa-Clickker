// trail
let coords = { x: 0, y: 0 };
let trail = document.querySelectorAll(`.trail`);
let playTrail;
trail.forEach((t) => {
    t.x = 0;
    t.y = 0;
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

    playTrail = requestAnimationFrame(trailAnimation);
}

// trakker mouse
function trakkerMouse(e) {
    coords.x = e.clientX
    coords.y = e.clientY

    trail.forEach((t) => {
        t.classList.remove(`hilang`);
    })
}

// export
export function start() {
    window.addEventListener('mousemove', trakkerMouse);

    cancelAnimationFrame(playTrail);

    trailAnimation();
}

export function stop() {
    window.removeEventListener('mousemove', trakkerMouse);

    cancelAnimationFrame(playTrail);

    trail.forEach((t) => {
        t.classList.add(`hilang`);
    })
}