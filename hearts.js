const heartsContainer = document.getElementById('hearts');
const symbols = ['💖','💕','💗','💓','💞'];

function spawnHeart(){
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = symbols[Math.floor(Math.random()*symbols.length)];
  h.style.left = Math.random()*100 + 'vw';
  h.style.fontSize = (16 + Math.random()*24) + 'px';
  const duration = 6 + Math.random()*6;
  h.style.animationDuration = duration + 's';
  heartsContainer.appendChild(h);
  setTimeout(()=>h.remove(), duration*1000);
}
setInterval(spawnHeart, 400);
