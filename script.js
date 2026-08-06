const PASSWORD = "080826";

const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

unlockBtn.addEventListener("click", () => {

    const entered = passwordInput.value.trim();

    if (entered === PASSWORD) {

        message.style.color = "#7CFC00";
        message.innerHTML = "❤️ Access Granted ❤️";

        setTimeout(() => {
            window.location.href = "letter.html";
        }, 1200);

    } else {

        message.style.color = "#FFD700";
        message.innerHTML = "❌ Wrong Password";

        passwordInput.value = "";
        passwordInput.focus();

    }

});

passwordInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        unlockBtn.click();
    }

});