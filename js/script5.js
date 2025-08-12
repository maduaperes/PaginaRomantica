// Ajuste para cada página (1 a 5)
const currentStep = 5; // altere conforme a página atual
const totalSteps = 5;

const progressBar = document.getElementById("progressBar");
const buttons = document.querySelectorAll("button[data-answer]");
const feedback = document.getElementById("feedback");

// Atualiza a barra de progresso
function updateProgressBar() {
  const percent = (currentStep / totalSteps) * 100;
  progressBar.style.width = percent + "%";
}

function showFeedback(text, isCorrect) {
  feedback.textContent = text;
  feedback.classList.remove("feedback-correct", "feedback-wrong");

  // Força reflow para reiniciar a animação
  void feedback.offsetWidth;

  if (isCorrect) {
    feedback.classList.add("feedback-correct");
  } else {
    feedback.classList.add("feedback-wrong");
  }
}

// Quando clicar numa resposta
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.getAttribute("data-answer");
    if (answer === "correto") {
      showFeedback("❤️ Acertou! Você é incrível!");
      // Espera 1.5s e vai pra próxima página ou final
      setTimeout(() => {
        if (currentStep < totalSteps) {
          window.location.href = `pagina${currentStep + 1}.html`;
        } else {
          window.location.href = "paginaFinal.html";
        }
      }, 1500);
    } else {
      showFeedback("Ops, tente de novo! 💔");
      // Opcional: animação de erro, shake, etc
    }
  });
});

// Inicializa tudo
updateProgressBar();
