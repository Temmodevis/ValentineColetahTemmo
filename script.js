const slides=document.querySelectorAll(".slide");
let i=0;

function show(n){
slides.forEach(s=>s.classList.remove("active"));
slides[n].classList.add("active");
i=n;
burst();
}

function next(){ if(i<slides.length-1) show(i+1); }
function back(){ if(i>0) show(i-1); }
function go(n){ show(n); }

function escape(b){
b.style.transform=`translate(${Math.random()*120-60}px,${Math.random()*120-60}px)`;
}

// hearts
function heart(){
let h=document.createElement("div");
h.className="heart";
h.innerHTML="❤️";
h.style.left=Math.random()*100+"vw";
h.style.fontSize=12+Math.random()*15+"px";
h.style.animationDuration=6+Math.random()*4+"s";
document.body.appendChild(h);
setTimeout(()=>h.remove(),10000);
}

setInterval(heart,500);

function burst(){
for(let x=0;x<6;x++) heart();
}

show(0);
