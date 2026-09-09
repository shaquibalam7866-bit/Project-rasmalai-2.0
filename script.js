const startBtn = document.getElementById("startBtn");
const welcomeMessage = document.getElementById("welcomeMessage");
const giftBox = document.getElementById("giftBox");
const giftText = document.getElementById("giftText");

startBtn.addEventListener("click", function () {
    document.getElementById("bgMusic").play();
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
// Full Screen Gallery

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
    img.addEventListener("click", () => {
        if (img.requestFullscreen) {
            img.requestFullscreen();
        } else if (img.webkitRequestFullscreen) {
            img.webkitRequestFullscreen();
        }
    });
});
<script>
// =========================
// PASSWORD LOCK
// =========================

const correctPassword = "afsha sheikh";

function unlockWebsite() {
    const enteredPassword =
        document.getElementById("passwordInput").value.trim();

    const wrongPassword =
        document.getElementById("wrongPassword");

    if (enteredPassword === correctPassword) {

        const lockScreen =
            document.getElementById("lockScreen");

        lockScreen.style.transition = "opacity 0.8s ease";
        lockScreen.style.opacity = "0";

        setTimeout(() => {
            lockScreen.style.display = "none";
        }, 800);

    } else {

        wrongPassword.innerText =
            "Wrong password 😅 Try again!";

    }
}
</script>
