const startDate = new Date("2024-11-14T20:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  const remainingDays = days % 365;

  document.getElementById("timer").textContent =
    `${years} anos, ${remainingDays} dias, ` +
    `${hours.toString().padStart(2, "0")}h:` +
    `${minutes.toString().padStart(2, "0")}m:` +
    `${seconds.toString().padStart(2, "0")}s`;
}

setInterval(updateTimer, 1000);
updateTimer();

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("heart");
  coracao.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000); // Remove após a animação
}

window.addEventListener("load", () => {
  const intervalo = setInterval(criarCoracao, 100); // Cria corações a cada 100ms

  setTimeout(() => {
    clearInterval(intervalo);
  }, 5000);
});
