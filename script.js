const pages=document.querySelectorAll('.page');
let current=0;

function show(i){
pages.forEach(p=>p.classList.remove('active'));
pages[i].classList.add('active');
current=i;
}

document.getElementById('yesBtn').onclick=()=>show(1);

document.getElementById('noBtn').onmouseover=()=>{
noBtn.style.transform=`translate(${Math.random()*80-40}px,${Math.random()*80-40}px)`
};

document.addEventListener('click',e=>{
if(e.target.classList.contains('nextBtn')) show(current+1);
if(e.target.classList.contains('backBtn')) show(current-1);
});

/* FLOWERS */

function flower(){
const f=document.createElement("div");
f.innerText=["🌸","🌹","💮","🌷"][Math.floor(Math.random()*4)];
f.style.position="fixed";
f.style.left=Math.random()*100+"vw";
f.style.top="-20px";
f.style.fontSize="20px";
f.style.opacity=".5";
document.body.appendChild(f);

let fall=setInterval(()=>{
f.style.top=(f.offsetTop+2)+"px";
},20);

setTimeout(()=>{
clearInterval(fall);
f.remove();
},8000);
}

setInterval(flower,400);
