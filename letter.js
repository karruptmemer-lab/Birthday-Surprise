const message = `Dear ❤️,

Aaj ka din sirf tumhara hai...

Main bas itna chahta hu ki tum hamesha smile karti raho. 😊

Tumhari har wish puri ho.

Har din tumhare liye khushiyon se bhara ho.

Thank you meri life me aane ke liye.

Once Again...

🎂 Happy Birthday! 🎈❤️

I wish you lots of happiness, success and endless smiles.

Always Stay Happy. 🤍`;

const typing = document.getElementById("typing");

let i = 0;

function typeLetter() {

    if (i < message.length) {

        typing.innerHTML += message.charAt(i);

        // Auto scroll while typing
        const letterBox = document.querySelector(".letter");
        letterBox.scrollTop = letterBox.scrollHeight;

        i++;

        setTimeout(typeLetter, 35);

    }

}

typeLetter();

document.getElementById("nextBtn").addEventListener("click", () => {

    window.location.href = "gallery.html";

});