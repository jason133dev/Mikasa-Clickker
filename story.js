let story = [
    // 0 scene awal
    {
        teks: 'Suatu hari, Windah Basudara memutuskan untuk cosplay sebagai Mikasa Ackerman.',
        cara: 'system'
    },

    // 1 windah
    {
        teks: 'Hari yang cerah untuk cosplay Mikasa lagi (katanya sambil berdandan).',
        cara: 'windah'
    },

    // 2 windah
    {
        teks: 'God dayum..., kurang perfect apa lagi coba Mikasaku yang cool ini!',
        cara: 'windah'
    },

    // 3 narator
    {
        teks: 'Windah pun selfie dan menguploadnya di sosmed.',
        cara: 'narator'
    },

    // 4 narator
    {
        teks: 'Tiba tiba sesosok hitam muncul dari langit.',
        cara: 'narator'
    },

    // 5 ???
    {
        teks: 'Kamu telah melakukan kesalahan besar, Windah!!!',
        cara: '???'
    },

    // 6 windah
    {
        teks: 'SIAPA KAMU !!, SIAPA WINDAH!..Aku...Mikasa Ackerman!',
        cara: 'windah'
    },

    // 7 ???
    {
        teks: 'Astaga...Jiwa Mikasa sudah mendarah daging. Siapa aku? Aku adalah...',
        cara: '???'
    },

    // 8 narator
    {
        teks: 'Sosok hitam itu pun menunjukkan dirinya.',
        cara: 'narator'
    },

    // 9 windah
    {
        teks: 'Hah? Seekor kucing?',
        cara: 'windah'
    },

    // 10 larry
    {
        teks: 'Bukan kucing biasa. Aku adalah Penyihir bangsa ini yang diberi tugas untuk melindungi hak cipta.',
        cara: 'larry'
    },

    // 11 larry
    {
        teks: 'DAN KAU SUDAH MELANGGAR HAK CIPTA!!!!!',
        cara: 'larry'
    },

    // 12 windah
    {
        teks: 'T-Tetapi...Aku kan cuman cosplay?',
        cara: 'windah'
    },

    // 13 larry
    {
        teks: 'Tetap saja! Makhluk sepertimu harus diberi hukuman!',
        cara: 'larry'
    },

    // 14 windah
    {
        teks: 'Emang kucing sepertimu bisa apa?',
        cara: 'windah'
    },

    // 15 larry
    {
        teks: 'INTERNATOS CHIAN AMBALADOS',
        cara: 'larry'
    },

    // 16 windah
    {
        teks: 'APA-APAAN INI?! Lepaskan aku!',
        cara: 'windah'
    },

    // 17 larry
    {
        teks: 'Kamu saya hukum terjebak didalam dimensi ini sampai kamu mendapatkan kekuatan yang kuat!!',
        cara: 'larry'
    },

    // 18 windah
    {
        teks: 'Tapi bukannya itu mus-',
        cara: 'windah'
    },

    // 19 larry
    {
        teks: 'Ssh.., cukup nikmati saja rumah barumu (katanya sambil pergi)',
        cara: 'larry'
    },

    // 20 windah
    {
        teks: 'Dimensi ini tidak mengenal ampun. Satu-satunya cara untuk menyelamatkan Windah adalah dengan mengumpulkan kekuatan... secepat mungkin!',
        cara: 'narator'
    },

    // 21 scene last
    {
        teks: '[ SYSTEM ACTIVE: CLICK TO RESCUE WINDAH. ]',
        cara: 'system'
    }
];

// asset
let mulai = document.querySelector(`.mulai`);
let containerAwal = document.querySelector(`.scene-awal`);
let awal = document.querySelector(`.ketik`);
let container = document.querySelector(`.container`);
let containerDialog = document.querySelector(`.container-dialog`);
let ledakan = document.querySelector(`#ledakan`);
let fog = document.querySelector(`#fog`);
let larry = document.querySelector(`#larry`);
let windah = document.querySelector(`#windah`);
let nama = document.querySelector(`.nama`);
let teks = document.querySelector(`.teks`);
let body = document.querySelector('body');
let next = document.querySelector(`.next`);
let suaraKetik = new Audio('typewriter.mp3');
let j2prime = document.querySelector(`#j2prime`);
let sihir = document.querySelector(`#sihir`);
let portal = document.querySelector(`#portal-larry`);
let button = document.querySelector(`#button`);

// function ambil teks
function ambilTeks(n) {
    return story[n].teks;
}

// function ambil cara
function ambilCara(n) {
    return story[n].cara;
}

// function typing awal
function typingAwal(text) {
    guard = true;
    let i = 0;
    let speed = 50;
    awal.innerHTML = "";
    function animasi() {
        if (i < text.length) {
            awal.innerHTML += text.charAt(i);
            suaraKetik.currentTime = 0;
            suaraKetik.play();
            i++
            setTimeout(animasi, speed);
        } else {
            guard = false;
        }
    }
    animasi();
}

// function typing teks
function typingTeks(text) {
    guard = true;
    let i = 0;
    let speed = 50;
    teks.innerHTML = "";
    function animasi() {
        if (i < text.length) {
            teks.innerHTML += text.charAt(i);
            suaraKetik.currentTime = `0`;
            suaraKetik.play();
            i++
            setTimeout(animasi, speed);
        } else {
            guard = true;
            next.style.display = `block`;

            setTimeout(() => {
                guard = false;
            }, 350);
        }
    }
    animasi();
}

// click logic awal
guard = false;
let now = 0;
mulai.addEventListener(`click`, () => {
    mulai.style.display = `none`;
    main(now++);
});

// click logic dialog
function click(e) {
    if (guard) { return; }

    let proses = now++;
    next.style.display = `none`;
    main(proses);
}
containerAwal.addEventListener(`click`, click);
containerDialog.addEventListener(`click`, click);

// function main
function main(n) {

    if (nama.innerHTML === ``) {
        nama.style.display = `none`;
    }

    if (n === 0) {
        guard = true;
        let storyNow = n;
        let dataText = ambilTeks(storyNow);
        typingAwal(dataText);
        container.style.pointerEvents = `none`;
    }


    if (n === 1) {
        guard = true;
        container.style.pointerEvents = `all`;
        awal.style.display = `none`;
        containerAwal.style.opacity = `0`;
        containerAwal.style.pointerEvents = `none`;

        // container dialog
        setTimeout(() => {
            containerDialog.style.opacity = `1`;
        }, 2000)

        // dialog 1
        setTimeout(() => {
            let storyNow = n;
            let dataCara = ambilCara(storyNow);
            let dataText = ambilTeks(storyNow);
            typingTeks(dataText);

            if (dataCara === `windah`) {
                nama.innerHTML = `Windah`;
                nama.style.display = `flex`;
                nama.style.color = `rgb(29, 29, 29)`;
                nama.style.backgroundColor = `rgb(181, 133, 135)`;
                windah.classList.add(`aktif`);
                windah.classList.remove(`hilang`);
                windah.classList.remove(`pasif`);
                larry.classList.add(`pasif`);
                larry.classList.remove(`aktif`);
                body.style.backgroundBlendMode = `normal`;
            } else if (dataCara === `narator`) {
                nama.innerHTML = `Narator`;
                nama.style.backgroundColor = `rgb(24, 24, 24)`;
                nama.style.color = `#edefef`;
                windah.classList.add(`pasif`);
                windah.classList.remove(`aktif`);
                larry.classList.add(`pasif`);
                larry.classList.remove(`aktif`);
                body.style.backgroundBlendMode = `darken`;
            } else if (dataCara === `larry`) {
                nama.innerHTML = `larry`;
                nama.style.color = `#edefef`;
                nama.style.backgroundColor = `rgb(45,54,132)`;
                larry.classList.add(`aktif`);
                larry.classList.remove(`hilang`);
                larry.classList.remove(`pasif`);
                windah.classList.remove(`aktif`);
                windah.classList.add(`pasif`);
                body.style.backgroundBlendMode = `normal`;
            }

            awal.style.display = `none`;
        }, 5000);
    }

    if (n === 2) {
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            body.style.backgroundBlendMode = `normal`;
        }
    }

    if (n === 3) {
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            body.style.backgroundBlendMode = `normal`;
        }
    }

    if (n === 4) {
        guard = true;
        teks.innerHTML = `(Selfie...)`;

        windah.classList.remove(`pasif`);
        windah.classList.add(`aktif`);

        nama.innerHTML = `Windah`;
        nama.style.color = `rgb(29, 29, 29)`;
        nama.style.backgroundColor = `rgb(181, 133, 135)`;

        body.style.backgroundBlendMode = `darken`;

        j2prime.classList.remove(`hilang`);
        j2prime.classList.add(`aktif`);
        j2prime.style.bottom = `11.2rem`;

        setTimeout(() => {
            windah.classList.add(`selfie`);
        }, 1500);

        setTimeout(() => {
            windah.classList.remove(`selfie`);
            windah.classList.add(`selesai-selfie`);
        }, 1580);

        setTimeout(() => {
            windah.classList.remove(`selesai-selfie`);
            teks.innerHTML = ``;

            let storyNow = n;
            let dataCara = ambilCara(storyNow);
            let dataText = ambilTeks(storyNow);
            typingTeks(dataText);

            if (dataCara === `windah`) {
                nama.innerHTML = `Windah`;
                windah.classList.add(`aktif`);
                windah.classList.remove(`hilang`);
                windah.classList.remove(`pasif`);
                j2prime.classList.remove(`hilang`);
                j2prime.classList.add(`aktif`);
                larry.classList.add(`pasif`);
                larry.classList.remove(`aktif`);
                nama.style.display = `flex`;
                nama.style.color = `rgb(29, 29, 29)`;
                nama.style.backgroundColor = `rgb(181, 133, 135)`;
                body.style.backgroundBlendMode = `normal`;
            } else if (dataCara === `narator`) {
                nama.innerHTML = `Narator`;
                nama.style.backgroundColor = `rgb(24, 24, 24)`;
                nama.style.color = `#edefef`;
                windah.classList.add(`pasif`);
                windah.classList.remove(`aktif`);
                j2prime.classList.add(`pasif`);
                j2prime.classList.remove(`aktif`);
                larry.classList.add(`pasif`);
                larry.classList.remove(`aktif`);
                body.style.backgroundBlendMode = `darken`;
            } else if (dataCara === `larry`) {
                nama.innerHTML = `larry`;
                nama.style.color = `#edefef`;
                nama.style.backgroundColor = `rgb(45,54,132)`;
                larry.classList.add(`aktif`);
                larry.classList.remove(`hilang`);
                larry.classList.remove(`pasif`);
                windah.classList.remove(`aktif`);
                windah.classList.add(`pasif`);
                j2prime.classList.add(`pasif`);
                j2prime.classList.remove(`aktif`);
                body.style.backgroundBlendMode = `normal`;
            }
        }, 3000)
    }

    if (n === 5) {
        guard = true;
        teks.innerHTML = ``;
        nama.innerHTML = ``;
        body.style.animation = `getar .9s ease-in-out infinite`;
        ledakan.classList.remove(`hilang`);
        ledakan.style.animation = `getar .9s ease-in-out infinite`;
        setTimeout(() => {
            ledakan.classList.add(`hilang`);
            body.style.animation = `none`;
            fog.classList.remove(`hilang`);
        }, 1000);

        setTimeout(() => {
            teks.innerHTML = ``;

            let storyNow = n;
            let dataCara = ambilCara(storyNow);
            let dataText = ambilTeks(storyNow);
            typingTeks(dataText);

            if (dataCara === `windah`) {
                nama.innerHTML = `Windah`;
                windah.classList.add(`aktif`);
                windah.classList.remove(`hilang`);
                windah.classList.remove(`pasif`);
                j2prime.classList.remove(`hilang`);
                j2prime.classList.add(`aktif`);
                larry.classList.add(`pasif`);
                larry.classList.remove(`aktif`);
                nama.style.display = `flex`;
                nama.style.color = `rgb(29, 29, 29)`;
                nama.style.backgroundColor = `rgb(181, 133, 135)`;
                body.style.backgroundBlendMode = `normal`;
            } else if (dataCara === `narator`) {
                nama.innerHTML = `Narator`;
                nama.style.backgroundColor = `rgb(24, 24, 24)`;
                nama.style.color = `#edefef`;
                windah.classList.add(`pasif`);
                windah.classList.remove(`aktif`);
                j2prime.classList.add(`pasif`);
                j2prime.classList.remove(`aktif`);
                larry.classList.add(`pasif`);
                larry.classList.remove(`aktif`);
                body.style.backgroundBlendMode = `darken`;
            } else if (dataCara === `larry`) {
                nama.innerHTML = `larry`;
                nama.style.color = `#edefef`;
                nama.style.backgroundColor = `rgb(45,54,132)`;
                larry.classList.add(`aktif`);
                larry.classList.remove(`hilang`);
                larry.classList.remove(`pasif`);
                windah.classList.remove(`aktif`);
                windah.classList.add(`pasif`);
                j2prime.classList.add(`pasif`);
                j2prime.classList.remove(`aktif`);
                body.style.backgroundBlendMode = `normal`;
            } else if (dataCara === `???`) {
                windah.classList.remove(`aktif`);
                windah.classList.add(`pasif`);
                j2prime.classList.add(`pasif`);
                j2prime.classList.remove(`aktif`);
                nama.innerHTML = `???`;
                nama.style.color = `#edefef`;
                nama.style.backgroundColor = `rgb(45,54,132)`;
            }
        }, 2500);
    }

    if (n === 6) {
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            j2prime.classList.remove(`pasif`);
            j2prime.classList.add(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `normal`;
        }
    }

    if (n === 7) {
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            j2prime.classList.remove(`pasif`);
            j2prime.classList.add(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `???`) {
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            nama.innerHTML = `???`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
        }
    }

    if (n === 8) {
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            j2prime.classList.remove(`pasif`);
            j2prime.classList.add(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `normal`;
        }
    }

    if (n === 9) {
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            j2prime.classList.remove(`pasif`);
            j2prime.classList.add(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `normal`;
        }
    }

    if (n === 10) {
        teks.innerHTML = ``;

        fog.classList.add(`hilang`);

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            j2prime.classList.remove(`pasif`);
            j2prime.classList.add(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `normal`;
        }
    }

    if (n === 11) {
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            j2prime.classList.remove(`pasif`);
            j2prime.classList.add(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `normal`;
        }
    }

    if (n === 12) {
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            j2prime.classList.remove(`pasif`);
            j2prime.classList.add(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `normal`;
        }
    }

    if (n === 13) {
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            j2prime.classList.remove(`pasif`);
            j2prime.classList.add(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `normal`;
        }
    }

    if (n === 14) {
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            j2prime.classList.remove(`pasif`);
            j2prime.classList.add(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `normal`;
        }
    }

    if (n === 15) {
        guard = true;
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);

        if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `#2d3684`;
            larry.classList.remove(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            containerDialog.style.animation = `getar-tipis 2s ease-in-out infinite`;
            sihir.classList.remove(`hilang`);
            windah.classList.remove(`aktif`);
            windah.classList.remove(`pasif`);
            j2prime.classList.remove(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
            body.style.backgroundColor = `rgba(0, 0, 0, 0.74)`;
        }

        setTimeout(() => {
            typingTeks(dataText);
            guard = true;
            larry.style.animation = `getar .9s ease-in-out infinite`;
        }, 3000);

        setTimeout(() => {
            guard = true;
            portal.classList.remove(`hilang`);
        }, 5000);

        setTimeout(() => {
            guard = false;
        }, 5350);
    }

    if (n === 16) {
        guard = true;
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        windah.style.animation = `tersedot 7s ease-in-out forwards`;
        j2prime.style.animation = `tersedot 7s ease-in-out forwards`;

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            j2prime.classList.remove(`pasif`);
            j2prime.classList.add(`aktif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            larry.style.animation = `none`;
            body.style.backgroundBlendMode = `darken`;
            body.style.backgroundColor = `rgba(0, 0, 0, 0.74)`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
        }
    }

    if (n === 17) {
        guard = true;
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
            body.style.backgroundColor = `rgba(0, 0, 0, 0.74)`;
        }
    }

    if (n === 18) {
        guard = true;
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `darken`;
            body.style.backgroundColor = `rgba(0, 0, 0, 0.74)`;

            setTimeout(() => {
                portal.classList.add(`hilang`);
                body.style.backgroundBlendMode = `normal`;
            }, 2000);
        }
    }

    if (n === 19) {
        guard = true;
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            j2prime.classList.remove(`pasif`);
            j2prime.classList.add(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `normal`;
        }

        setTimeout(() => {
            sihir.classList.add(`hilang`);
            containerDialog.style.animation = `none`;
        }, 2000);

        setTimeout(() => {
            larry.style.transition = `all 6s ease`;
            larry.style.opacity = `0`;
            larry.style.pointerEvents = `none`;
        }, 4000);
    }

    if (n === 20) {
        guard = true;
        teks.innerHTML = ``;

        let storyNow = n;
        let dataCara = ambilCara(storyNow);
        let dataText = ambilTeks(storyNow);
        typingTeks(dataText);

        if (dataCara === `windah`) {
            nama.innerHTML = `Windah`;
            windah.classList.add(`aktif`);
            windah.classList.remove(`hilang`);
            windah.classList.remove(`pasif`);
            j2prime.classList.remove(`pasif`);
            j2prime.classList.add(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            nama.style.display = `flex`;
            nama.style.color = `rgb(29, 29, 29)`;
            nama.style.backgroundColor = `rgb(181, 133, 135)`;
            body.style.backgroundBlendMode = `normal`;
        } else if (dataCara === `narator`) {
            nama.innerHTML = `Narator`;
            nama.style.backgroundColor = `rgb(24, 24, 24)`;
            nama.style.color = `#edefef`;
            windah.classList.add(`pasif`);
            windah.classList.remove(`aktif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            larry.classList.add(`pasif`);
            larry.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `darken`;
        } else if (dataCara === `larry`) {
            nama.innerHTML = `larry`;
            nama.style.color = `#edefef`;
            nama.style.backgroundColor = `rgb(45,54,132)`;
            larry.classList.add(`aktif`);
            larry.classList.remove(`hilang`);
            larry.classList.remove(`pasif`);
            windah.classList.remove(`aktif`);
            windah.classList.add(`pasif`);
            j2prime.classList.add(`pasif`);
            j2prime.classList.remove(`aktif`);
            body.style.backgroundBlendMode = `normal`;
        }
    }

    if (n === 21) {
        guard = true;
        awal.innerHTML = ``;

        containerDialog.style.opacity = `0`;
        containerDialog.style.pointerEvents = `none`;
        containerAwal.style.opacity = `1`;
        containerAwal.style.pointerEvents = `none`;
        awal.style.display = `block`;

        setTimeout(() => {
            container.style.display = `none`;
            let storyNow = n;
            let dataCara = ambilCara(storyNow);
            let dataText = ambilTeks(storyNow);
            typingAwal(dataText);

            awal.style.animation = `blink .5s ease infinite alternate`;
            button.style.display = `block`;
        }, 5000);

        setTimeout(() => {
            button.style.opacity = `1`;
            button.style.pointerEvents = `all`;
            containerAwal.style.backgroundColor = `rgb(9, 13, 14)`;
        }, 7000);
    }
}