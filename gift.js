const gift = document.getElementById("giftBox");
const finalMessage = document.getElementById("finalMessage");
const hearts = document.getElementById("hearts");

gift.addEventListener("click", () => {

    gift.style.transform = "scale(1.5) rotate(20deg)";
    gift.style.opacity = "0";

    // ❤️ Heart Burst
    for(let i = 0; i < 80; i++){

        const heart = document.createElement("div");

        heart.innerHTML = ["❤️","🤍","💛"][Math.floor(Math.random()*3)];

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize =
        (18 + Math.random()*18) + "px";

        heart.style.pointerEvents = "none";

        const x = (Math.random()-0.5)*900;
        const y = (Math.random()-0.5)*900;

        heart.animate([

            {
                transform:"translate(0,0) scale(.5)",
                opacity:1
            },

            {
                transform:`translate(${x}px,${y}px) scale(1.6)`,
                opacity:0
            }

        ],{

            duration:2200,

            easing:"ease-out"

        });

        hearts.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },2200);

    }

    // ✨ Show Final Message
    setTimeout(()=>{

        finalMessage.classList.remove("hidden");

    },700);

});