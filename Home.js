const leftCover = document.getElementById("leftCover");
const rightCover = document.getElementById("rightCover");

rightCover.addEventListener("click", () => {
    leftCover.classList.add("open-left");
    rightCover.classList.add("open-right");

    birthdayMusic.currentTime = 0; 
    birthdayMusic.play().catch((error) => {
        console.log("Music could not start:", error);
    });
});

const closeBook = document.getElementById("closeBook");

closeBook.addEventListener("click", () => {
    leftCover.classList.remove("open-left");
    rightCover.classList.remove("open-right");
    birthdayMusic.pause();
});

/* Secret Message Popup */

const secretButton = document.getElementById("secretButton");
const secretOverlay = document.getElementById("secretOverlay");
const secretClose = document.getElementById("secretClose");

secretButton.addEventListener("click", () => {
    secretOverlay.classList.add("show");
});

secretClose.addEventListener("click", () => {
    secretOverlay.classList.remove("show");
});

secretOverlay.addEventListener("click", (event) => {
    if (event.target === secretOverlay) {
        secretOverlay.classList.remove("show");
    }
});