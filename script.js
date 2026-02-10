const pages=document.querySelectorAll(".page");
let c=0;

function show(i){
pages.forEach(p=>p.classList.remove("active"));
pages[i].classList.add("active");
c=i;
burst();
}

function next(){ if(c<pages.length-1) show(c+1); }
function back(){ if(c>0) show(c-1); }
function go(i){ show(i); }

function escape(b){
b.style.transform=`translate(${Math.random()*150-75}px,${Math.random()*150-75}px)`;
}

// hearts
function heart(){
let h=document.createElement("div");
h.className="heart";
h.innerHTML="❤️";
h.style.left=Math.random()*100+"vw";
h.style.animationDuration=6+Math.random()*5+"s";
document.body.appendChild(h);
setTimeout(()=>h.remove(),10000);
}

setInterval(heart,500);

function burst(){
for(let i=0;i<8;i++) heart();
}

show(0);
