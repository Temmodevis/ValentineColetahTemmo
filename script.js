const pages=document.querySelectorAll(".page");
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const nextBtns=document.querySelectorAll(".nextBtn");
const backBtn=document.querySelector(".backBtn");

let current=0;

function show(i){
pages.forEach(p=>p.classList.remove("active"));
pages[i].classList.add("active");
current=i;
burst();
}

yesBtn.onclick=()=>show(1);

noBtn.onmouseover=()=>{
noBtn.style.transform=`translate(${Math.random()*300-150}px,${Math.random()*300-150}px)`;
};

nextBtns.forEach(b=>{
b.onclick=()=>show(current+1);
});

backBtn.onclick=()=>show(2);

// CONTINUOUS FLOWERS 🌸
function dropFlower(){
const f=document.createElement("div");
f.className="flower";
f.innerHTML=["🌸","🌹","💮","🌷"][Math.floor(Math.random()*4)];
f.style.left=Math.random()*100+"vw";
f.style.animationDuration=5+Math.random()*5+"s";
document.body.appendChild(f);

setTimeout(()=>f.remove(),10000);
}

setInterval(dropFlower,300);

// FLOWER BURST ON CLICK
function burst(){
for(let i=0;i<15;i++){
dropFlower();
}
}

// MEMORY MESSAGES
document.getElementById("msg1").innerText=
"Every moment with you feels like magic. Thank you for loving me the way you do.";

document.getElementById("msg2").innerText=
"You are my peace, my smile, and my favorite person. I cherish us always.";
