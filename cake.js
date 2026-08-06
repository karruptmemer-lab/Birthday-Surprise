const blowBtn = document.getElementById("blowBtn");
const flames = document.querySelectorAll(".flame");
const confettiBox = document.getElementById("confetti");

blowBtn.addEventListener("click", () => {

    // 🔥 Blow out candles
    flames.forEach(flame => {
        flame.style.opacity = "0";
        flame.style.transform = "translateX(-50%) scale(0)";
    });

    // 🎉 Confetti Blast
    for(let i = 0; i < 180; i++){

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.background = [
            "#ff4d6d",
            "#ffd93d",
            "#ffffff",
            "#7bffb7",
            "#87cefa"
        ][Math.floor(Math.random()*5)];

        piece.style.animationDuration =
        (2 + Math.random()*2) + "s";

        piece.style.transform =
        `rotate(${Math.random()*360}deg)`;

        confettiBox.appendChild(piece);

        setTimeout(()=>{
            piece.remove();
        },4000);

    }

    blowBtn.innerHTML = "🎉 Wish Completed 🎉";

    setTimeout(()=>{

        window.location.href = "gift.html";

    },3500);

});

// 🎆 Fireworks

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const fireworks = [];

function randomColor(){

    const colors = [
        "#ff4d6d",
        "#FFD93D",
        "#ffffff",
        "#00E5FF",
        "#7BFFB7",
        "#FF66FF",
        "#FFA500"
    ];

    return colors[Math.floor(Math.random()*colors.length)];
}

function createFirework(){

    const x = Math.random()*canvas.width;
    const y = Math.random()*(canvas.height*0.5);

    const particles=[];

    for(let i=0;i<70;i++){

        particles.push({

            x,
            y,

            dx:(Math.random()-0.5)*8,

            dy:(Math.random()-0.5)*8,

            size:2+Math.random()*3,

            color:randomColor(),

            alpha:1

        });

    }

    fireworks.push(particles);

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    fireworks.forEach((fw,index)=>{

        fw.forEach(p=>{

            p.x+=p.dx;
            p.y+=p.dy;

            p.dy+=0.03;

            p.alpha-=0.01;

            ctx.globalAlpha=p.alpha;

            ctx.fillStyle=p.color;

            ctx.beginPath();

            ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

            ctx.fill();

        });

        if(fw[0].alpha<=0){

            fireworks.splice(index,1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

setInterval(createFirework,1200);

// 🎈 Floating Balloons

const balloonBox = document.getElementById("balloons");

const balloonIcons = ["🎈","🎈","🎈"];

function createBalloon(){

    const b = document.createElement("div");

    b.className = "balloon";

    b.innerHTML = balloonIcons[Math.floor(Math.random()*balloonIcons.length)];

    b.style.left = (Math.random()*96 + 2) + "vw";

    b.style.fontSize = (45 + Math.random()*35) + "px";

    b.style.animationDuration = (8 + Math.random()*5) + "s";

    balloonBox.appendChild(b);

    setTimeout(()=>{
        b.remove();
    },13000);

}

setInterval(createBalloon,900);

// ✨ Fairy Lights

const lights = document.getElementById("lights");

const lightColors = [

"#FFD54F",
"#FFF8E1",
"#FFFFFF",
"#FFE082"

];

for(let i=0;i<120;i++){

const l=document.createElement("div");

l.className="light";

l.style.left=Math.random()*100+"vw";

l.style.top=Math.random()*100+"vh";

l.style.color=lightColors[Math.floor(Math.random()*lightColors.length)];

l.style.animationDelay=Math.random()*2+"s";

lights.appendChild(l);

}