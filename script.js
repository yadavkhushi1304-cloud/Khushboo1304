// =====================================
// Romantic Birthday Website
// Part 1
// =====================================

// Elements
const welcome = document.getElementById("welcome");
const website = document.getElementById("website");
const giftBox = document.getElementById("giftBox");
const song = document.getElementById("song");
const typing = document.getElementById("typing");

// Romantic Message
const message = `Happy Birthday My Love ❤️

Today is all about celebrating you.

Thank you for filling my life with love 
and happiness.

I pray that this birthday brings you
good health,
success,
peace,
and endless happiness.

May all your dreams come true.

I Love You Forever  ❤️

Forever Yours,

Khushboo ❤️`;

let index = 0;

// =====================================
// Open Gift
// =====================================

giftBox.addEventListener("click", () => {

    // Open Lid
    document.querySelector(".lid").style.transform =
        "translateY(-70px) rotate(-20deg)";

    // Small delay
    setTimeout(() => {

        welcome.style.display = "none";
        website.style.display = "block";


        // Start Effects
        createStars();
        createPetals();
        typeWriter();
        launchConfetti();

    },1000);

});

// =====================================
// Typing Effect
// =====================================

function typeWriter(){

    if(index < message.length){

        if(message.charAt(index) === "\n"){

            typing.innerHTML += "<br>";

        }else{

            typing.innerHTML += message.charAt(index);

        }

        index++;

        setTimeout(typeWriter,35);

    }

}

// =====================================
// Stars
// =====================================

function createStars(){

    const stars=document.getElementById("stars");

    for(let i=0;i<180;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"vw";
        star.style.top=Math.random()*100+"vh";

        star.style.animationDelay=
        Math.random()*3+"s";

        stars.appendChild(star);

    }

}

// =====================================
// Rose Petals
// =====================================

function createPetals(){

const petals=document.getElementById("petals");

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=
(6+Math.random()*4)+"s";

petal.style.fontSize=
(18+Math.random()*18)+"px";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

},250);

}

// =====================================
// First Confetti
// =====================================

function launchConfetti(){

confetti({

particleCount:180,

spread:120,

origin:{y:.6}

});

}

// =====================================
// Fireworks Animation
// =====================================

function fireworkBurst() {

    confetti({
        particleCount: 150,
        spread: 180,
        startVelocity: 55,
        gravity: 0.8,
        origin: {
            x: Math.random(),
            y: Math.random() * 0.5
        }
    });

}

// Fireworks every 15 seconds
setInterval(fireworkBurst, 15000);

// =====================================
// Music Button
// =====================================

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (song.paused) {

        song.play();

        musicBtn.innerHTML = "⏸ Pause Music";

    } else {

        song.pause();

        musicBtn.innerHTML = "🎵 Play Music";

    }

});

// =====================================
// Photo Gallery Lightbox
// =====================================

const photos = document.querySelectorAll(".photo");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = photo.src;

    });

});

closeLightbox.onclick = () => {

    lightbox.style.display = "none";

};

lightbox.onclick = function(e){

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

};

// =====================================
// Flip Love Letter
// =====================================

const lovePage = document.getElementById("lovePage");

let opened = false;

lovePage.addEventListener("click", () => {

    if(!opened){

        lovePage.style.transform = "rotateY(-170deg)";

        opened = true;

    }else{

        lovePage.style.transform = "rotateY(0deg)";

        opened = false;

    }

});

// =====================================
// Floating Hearts
// =====================================

setInterval(()=>{

    const heart = document.createElement("div");

    heart.className = "heartFloat";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize =
        (18 + Math.random()*20) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

},700);

// =====================================
// PART 3 - Final Animations
// =====================================

// Grand Birthday Celebration
function grandCelebration(){

    let duration = 8000;
    let end = Date.now() + duration;

    (function frame(){

        confetti({
            particleCount:8,
            angle:60,
            spread:60,
            origin:{x:0}
        });

        confetti({
            particleCount:8,
            angle:120,
            spread:60,
            origin:{x:1}
        });

        if(Date.now() < end){
            requestAnimationFrame(frame);
        }

    })();

}

// Celebration after 5 seconds
setTimeout(grandCelebration,5000);

// =====================================
// Auto Fireworks
// =====================================

setInterval(()=>{

    confetti({

        particleCount:200,

        spread:170,

        startVelocity:60,

        gravity:0.9,

        origin:{
            x:Math.random(),
            y:Math.random()*0.5
        }

    });

},18000);

// =====================================
// Smooth Fade Animation
// =====================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="1s ease";

observer.observe(section);

});

// =====================================
// Glowing Candle
// =====================================

const flame = document.querySelector(".flame");

setInterval(()=>{

flame.style.boxShadow =
`0 0 ${20+Math.random()*15}px orange`;

},300);

// =====================================
// Romantic Ending
// =====================================

setTimeout(()=>{

confetti({

particleCount:350,

spread:180,

origin:{y:0.5}

});

const finalCard = document.querySelector(".final-card");

finalCard.style.transform="scale(1.05)";

finalCard.style.transition="1s";

},25000);

// =====================================
// Console Surprise
// =====================================

console.log(
"%c❤️ Happy Birthday My Love ❤️",
"color:#ff1493;font-size:24px;font-weight:bold;"
);

