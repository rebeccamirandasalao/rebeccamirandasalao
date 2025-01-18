const button = document.getElementById("show-more");
const div = document.getElementById("servicos-hidden");

button.addEventListener("click", () => {
  div.classList.toggle("active"); // Alterna entre mostrar e esconder a div

  // Altera o texto do botão
  if (div.classList.contains("active")) {
    button.textContent = "Ver menos";
  } else {
    button.textContent = "Ver mais";
  }
});
