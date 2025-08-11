const btnProximo = document.getElementById("btnProximo");

btnProximo.addEventListener("click", () => {
  btnProximo.style.transition = "transform 0.2s ease";
  btnProximo.style.transform = "scale(1.2)";
  
  // Tocar beep simples usando Web Audio API
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // frequência 440Hz
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  
  setTimeout(() => {
    oscillator.stop();
    btnProximo.style.transform = "scale(1)";
    
    // animação fade-out da container
    document.querySelector(".container").classList.add("fade-out");
    
    setTimeout(() => {
      window.location.href = "pagina2.html";
    }, 600);
  }, 200);
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
