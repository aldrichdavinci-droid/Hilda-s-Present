const loginForm = document.getElementById("loginForm");

const usernameInput = document.getElementById("Uname");
const passwordInput = document.getElementById("password");

const errorMessage = document.getElementById("errorMessage");


loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    const correctUsername = "Twinnie";
    const correctPassword = "Satanic";


    if (username === correctUsername && password === correctPassword) {

        errorMessage.textContent = "Access granted ❤️";

        errorMessage.style.color = "#e75480";

        setTimeout(function () {
            window.location.href = "Home.html";
        }, 500);

    } else {

        errorMessage.textContent =
            "Wrong username or password. Try again 💗";

        errorMessage.style.color = "#d63f6d";

        passwordInput.value = "";
    }

});