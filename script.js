const startBtn = document.getElementById("startBtn");
const welcomeMessage = document.getElementById("welcomeMessage");
const giftBox = document.getElementById("giftBox");
const giftText = document.getElementById("giftText");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");


// =========================
// OPEN MY HEART
// =========================

startBtn.addEventListener("click", function () {

    // Try to play music
    bgMusic.play().catch(() => {
        console.log("Music needs user permission.");
    });

    startBtn.style.display = "none";
    welcomeMessage.style.display = "block";

    setTimeout(function () {
        giftBox.style.display = "block";
        giftText.style.display = "block";
    }, 2000);

    setTimeout(typeLetter, 1000);
});


// =========================
// GIFT BOX
// =========================

giftBox.addEventListener("click", function () {

    giftBox.innerHTML = "🎉";
    giftText.innerHTML =
        "<h2>Happy Birthday My Rasmalai ❤️</h2>";
});


// =========================
// MUSIC BUTTON
// =========================

musicBtn.addEventListener("click", function () {

    if (bgMusic.paused) {

        bgMusic.play();
        musicBtn.innerHTML = "⏸️ Pause Music";

    } else {

        bgMusic.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }
});


// =========================
// LETTER TYPEWRITER
// =========================

const letter = document.getElementById("letter");
const text = letter.innerHTML;

letter.innerHTML = "";

let i = 0;

function typeLetter() {

    if (i < text.length) {

        letter.innerHTML += text.charAt(i);
        i++;

        setTimeout(typeLetter, 30);
    }
}


// =========================
// BIRTHDAY COUNTDOWN
// =========================

const birthday = new Date("October 11, 2026 00:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("timer").innerHTML =
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds";

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("timer").innerHTML =
            "🎉 Happy Birthday My Rasmalai ❤️";
    }

}, 1000);


// =========================
// FULL SCREEN GALLERY
// =========================

const images = document.querySelectorAll(".gallery img");

images.forEach(function (img) {

    img.addEventListener("click", function () {

        if (img.requestFullscreen) {
            img.requestFullscreen();
        }

        else if (img.webkitRequestFullscreen) {
            img.webkitRequestFullscreen();
        }

    });

});
