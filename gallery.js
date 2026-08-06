const photos = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg"
];

const captions = [
    "Every picture tells a beautiful story... ❤️",
    "Your smile makes every moment special. ✨",
    "Creating memories with you is my favorite thing. 🥰",
    "Happy Birthday! May your life always be filled with happiness. 🎂❤️"
];

const slide = document.getElementById("slide");
const caption = document.getElementById("caption");

let index = 0;

function changeSlide(){

    slide.style.opacity = "0";

    setTimeout(()=>{

        index++;

        if(index >= photos.length){
            index = 0;
        }

        slide.src = photos[index];
        caption.innerHTML = captions[index];

        slide.style.opacity = "1";

    },500);

}

setInterval(changeSlide,3000);
// ❤️ Floating Hearts

const heartBox = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize =
    (18 + Math.random()*22) + "px";

    heart.style.animationDuration =
    (4 + Math.random()*4) + "s";

    heartBox.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

const hearts = document.getElementById("hearts");

const colors = ["❤️","🤍","💛"];

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = colors[Math.floor(Math.random() * colors.length)];

    heart.style.left = (Math.random() * 96 + 2) + "vw";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heart.style.animationDelay = (Math.random() * 2) + "s";

    heart.style.transform = `translateX(${Math.floor((Math.random() - 0.5) * 80)}px)`;

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 300);

// Smooth Page Transition

function goNext(page){

    document.body.classList.add("fadeOut");

    setTimeout(()=>{

        window.location.href=page;

    },900);

}
setTimeout(() => {

    goNext("cake.html");

}, 15000);
