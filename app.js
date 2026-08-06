document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("startBtn");

    btn.addEventListener("click", () => {

        const music = document.getElementById("bgMusic");

        if (music) {
            sessionStorage.setItem("playMusic", "yes");
        }

        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "letter.html";
        }, 1000);

    });

});

// ✨ Bokeh Lights

const bokehBox = document.getElementById("bokeh");

for(let i=0;i<35;i++){

const b=document.createElement("div");

b.className="bokeh";

const size=20+Math.random()*80;

b.style.width=size+"px";
b.style.height=size+"px";

b.style.left=Math.random()*100+"vw";

b.style.animationDuration=(12+Math.random()*10)+"s";

b.style.animationDelay=Math.random()*10+"s";

bokehBox.appendChild(b);

}
// ✨ Hanging Fairy Lights

const fairyBox = document.getElementById("fairyLights");

for(let i=0;i<18;i++){

    const wire = document.createElement("div");

    wire.className = "light-string";

    wire.style.left = (i*6 + Math.random()*2) + "%";

    wire.style.height = (35 + Math.random()*55) + "px";

    wire.style.animationDelay = (Math.random()*3) + "s";

    const bulb = document.createElement("div");

    bulb.className = "bulb";

    wire.appendChild(bulb);

    fairyBox.appendChild(wire);

}