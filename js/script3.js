const btnSim = document.getElementById("btnSim");
const btnNao = document.getElementById("btnNao");

btnSim.addEventListener("click", () => {
  // Cria animação de corações crescendo antes do alerta
  const container = document.querySelector(".container");

  // Cria 10 corações grandes que aparecem e somem
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.position = "absolute";
    heart.style.fontSize = "40px";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.opacity = "1";
    heart.style.transition = "all 1s ease-out";
    heart.textContent = "💖";
    container.appendChild(heart);
    setTimeout(() => {
      heart.style.opacity = "0";
      heart.style.transform = "scale(2)";
    }, 50);
    setTimeout(() => heart.remove(), 1050);
  }

  setTimeout(() => {
    alert("Eu sabia que você diria SIM! 💖 Te amo!");
    window.location.href = "pagina1.html";
  }, 1100);
});

btnNao.addEventListener("click", () => {
  // Botão “Não” se move para lado aleatório na tela como brincadeira
  const x = Math.random() * (window.innerWidth - btnNao.offsetWidth);
  const y = Math.random() * (window.innerHeight - btnNao.offsetHeight);
  btnNao.style.position = "absolute";
  btnNao.style.left = `${x}px`;
  btnNao.style.top = `${y}px`;
});
