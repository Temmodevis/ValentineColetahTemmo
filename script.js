const pages = document.querySelectorAll(".page");
let current = 0;

function showPage(i){
if(i < 0 || i >= pages.length) return;

pages.forEach(p => p.classList.remove("active"));
pages[i].classList.add("active");
current = i;
burst();
}

// BUTTON CONTROLS
function nextPage(){ showPage(current+1); }
function goBack(){ showPage(current-1); }
function goToPage(i){ showPage(i); }

// NO BUTTON RUNS
function runNo(btn){
btn.style.transform =
`translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
}

// FLOWERS
function dropFlower(){
const f=document.createElement("div");
f.className="flower";
f.innerHTML=["🌸","🌹","💮","🌷","❤️"][Math.floor(Math.random()*5)];
f.style.left=Math.random()*100+"vw";
f.style.animationDuration=6+Math.random()*5+"s";
document.body.appendChild(f);
setTimeout(()=>f.remove(),12000);
}

setInterval(dropFlower,350);

function burst(){
for(let i=0;i<12;i++) dropFlower();
}

showPage(0);
