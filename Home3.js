const lastSurprise = document.getElementById("lastSurprise");

lastSurprise.addEventListener("click", function () {

    const surpriseOverlay = document.createElement("div");

    surpriseOverlay.className = "finalOverlay";

    surpriseOverlay.innerHTML = `
        <div class="confetti-container">
            <span>🎉</span>
            <span>💗</span>
            <span>✨</span>
            <span>🎊</span>
            <span>💕</span>
            <span>✨</span>
            <span>🎉</span>
            <span>💖</span>
            <span>🎊</span>
            <span>💕</span>
        </div>

        <div class="finalCard">

            <button class="finalClose" id="finalClose">
                ×
            </button>

            <div class="finalHeart">
                ❤️
            </div>

            <h2>You Made It To The End</h2>

            <p>
                If you're seeing this, then you officially made it
                through all the little surprises I prepared for you. 😂❤️
            </p>

            <p>
                I just want you to know that you are genuinely
                one of the most special people in my life.
            </p>

            <p>
                Thank you for all the memories, the laughs,
                the crazy moments and simply for being you.
            </p>

            <h3>
                Happy Birthday, Bestie! 🎂❤️
            </h3>

            <div class="finalSignature">
                With love,<br>
                Your Small boy ❤️
            </div>

        </div>
    `;

    document.body.appendChild(surpriseOverlay);

    requestAnimationFrame(function () {
        surpriseOverlay.classList.add("show");
    });


    const finalClose = document.getElementById("finalClose");

    finalClose.addEventListener("click", function () {
        surpriseOverlay.classList.remove("show");

        setTimeout(function () {
            surpriseOverlay.remove();
        }, 500);
    });


    surpriseOverlay.addEventListener("click", function (event) {

        if (event.target === surpriseOverlay) {
            surpriseOverlay.classList.remove("show");

            setTimeout(function () {
                surpriseOverlay.remove();
            }, 500);
        }

    });

});