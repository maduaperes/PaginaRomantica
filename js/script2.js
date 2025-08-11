const btnProximo = document.getElementById("btnProximo");
const container = document.querySelector(".container");

btnProximo.addEventListener("click", () => {
  // Cria overlay de loading
  const loadingOverlay = document.createElement("div");
  loadingOverlay.id = "loadingOverlay";
  loadingOverlay.innerHTML = `<div class="loading-text">Carregando<span id="dots"></span></div>`;
  document.body.appendChild(loadingOverlay);
  
  // Esconde container
  container.style.display = "none";

  // Anima os "..."
  let dots = 0;
  const dotsSpan = document.getElementById("dots");
  const interval = setInterval(() => {
    dots = (dots + 1) % 4; // 0 a 3
    dotsSpan.textContent = '.'.repeat(dots);
  }, 500);

  // Depois de 2.5 segundos, tira o loading e vai pra página 3
  setTimeout(() => {
    clearInterval(interval);
    window.location.href = "pagina3.html";
  }, 2500);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
