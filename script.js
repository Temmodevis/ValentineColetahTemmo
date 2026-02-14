const pages = document.querySelectorAll('.page');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const nextBtns = document.querySelectorAll('.nextBtn');
const backBtns = document.querySelectorAll('.backBtn');
const choices = document.querySelectorAll('.choice');

let currentPage = 0;

function showPage(index){
  pages.forEach(p=>p.classList.remove('active'));
  pages[index].classList.add('active');
  currentPage = index;
}

// YES
yesBtn.addEventListener('click',()=>showPage(1));

// RUNAWAY NO 😏
noBtn.addEventListener('mouseover',()=>{
  const x = Math.random()*300-150;
  const y = Math.random()*300-150;
  noBtn.style.transform=`translate(${x}px,${y}px)`;
});

// NEXT
nextBtns.forEach(btn=>{
  btn.addEventListener('click',()=>showPage(currentPage+1));
});

// BACK
backBtns.forEach(btn=>{
  btn.addEventListener('click',()=>showPage(currentPage-1));
});

// CHOICES
choices.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const type = btn.dataset.type;

    if(type==="chocolate" || type==="yogurt"){
      window.location.href="https://wa.me/254790214552?text=Hey%20love%20❤️%20I%20choose%20"+type+"%20for%20Valentine%20🥺";
    }

    if(type==="me"){
      alert("Aww 🥺❤️\nIf you really want me there next week, I promise I will make that moment the most beautiful memory of our love 💖🌹");
    }
  });
});

// FLOWERS 🌸
function dropFlower(){
  const flower=document.createElement("div");
  flower.className="flower";
  flower.innerHTML=["🌸","🌹","💮","🌷","❤️"][Math.floor(Math.random()*5)];
  flower.style.left=Math.random()*100+"vw";
  flower.style.animationDuration=6+Math.random()*5+"s";
  document.body.appendChild(flower);
  setTimeout(()=>flower.remove(),12000);
}
setInterval(dropFlower,300);
