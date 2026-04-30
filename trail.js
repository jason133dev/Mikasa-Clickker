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