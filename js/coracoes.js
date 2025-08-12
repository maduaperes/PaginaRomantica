function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + 20 + "px";

  const duration = Math.random() * 3 + 3;
  heart.style.animation = `floatUp ${duration}s forwards`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createHeart, 400);
