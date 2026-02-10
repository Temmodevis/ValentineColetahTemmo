const pages=document.querySelectorAll('.page');
let current=0;

function show(i){
pages.forEach(p=>p.classList.remove('active'));
pages[i].classList.add('active');
current=i;
}

document.getElementById('yesBtn').onclick=()=>show(1);

document.getElementById('noBtn').onmouseover=()=>{
document.getElementById('noBtn').style.transform=
`translate(${Math.random()*120-60}px,${Math.random()*120-60}px)`
};

document.addEventListener('click',e=>{
if(e.target.classList.contains('nextBtn')) show(current+1);
if(e.target.classList.contains('backBtn')) show(current-1);
});
