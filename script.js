const pages = document.querySelectorAll('.page');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const nextBtns = document.querySelectorAll('.nextBtn');
const backBtn = document.querySelector('.backBtn');

let currentPage = 0;

function showPage(index) {
    pages.forEach(page => page.classList.remove('active'));
    pages[index].classList.add('active');
    currentPage = index;
}

// YES BUTTON
yesBtn.addEventListener('click', () => {
    showPage(1);
});

// NO BUTTON RUNS AWAY 😏
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// NEXT BUTTONS
nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        showPage(currentPage + 1);
    });
});

// BACK BUTTON
document.addEventListener('click', e => {
    if(e.target.classList.contains('backBtn')){
        showPage(currentPage - 1);
    }
});

// FLOWER DROP NON STOP 🌸
function dropFlower(){
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerHTML = ["🌸","🌹","💮","🌷","❤️"][Math.floor(Math.random()*5)];
    flower.style.left = Math.random()*100 + "vw";
    flower.style.animationDuration = 6 + Math.random()*5 + "s";
    document.body.appendChild(flower);

    setTimeout(()=>flower.remove(),12000);
}

setInterval(dropFlower,300);

