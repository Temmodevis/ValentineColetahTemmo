body{
  background: linear-gradient(-45deg,#ff003c,#ff6b81,#fff,#ffb3c6);
  background-size:400% 400%;
  animation:bg 12s ease infinite;
  overflow:hidden;
}

@keyframes bg{
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}

.page{
  width:100vw;
  height:100vh;
  display:none;
  position:absolute;
}

.page.active{
  display:flex;
  animation:fade .7s ease;
}

@keyframes fade{
  from{opacity:0; transform:translateY(30px);}
  to{opacity:1; transform:translateY(0);}
}

.romantic-card{
  max-width:650px;
  border-radius:25px;
  background:rgba(255,255,255,.96);
}

.flower{
  position:fixed;
  top:-50px;
  font-size:22px;
  opacity:.4;
  animation:fall linear infinite;
  z-index:-1;
}

@keyframes fall{
  to{transform:translateY(110vh) rotate(360deg);}
}
