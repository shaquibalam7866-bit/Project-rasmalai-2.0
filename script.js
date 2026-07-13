const startBtn = document.getElementById("startBtn");
const welcomeMessage = document.getElementById("welcomeMessage");
const giftBox = document.getElementById("giftBox");
const giftText = document.getElementById("giftText");

startBtn.addEventListener("click", function () {
    startBtn.style.display = "none";
    welcomeMessage.style.display = "block";

    setTimeout(function () {
        giftBox.style.display = "block";
        giftText.style.display = "block";
    }, 2000);
});

giftBox.addEventListener("click", function () {
    giftBox.innerHTML = "🎉";
    giftText.innerHTML = "<h2>Happy Birthday My Rasmalai ❤️</h2>";
});
const bgMusic = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
    bgMusic.play();
});
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

startBtn.addEventListener("click", () => {
  setTimeout(typeLetter, 1000);
});

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "⏸️ Pause Music";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }
});
