const menuButton = document.getElementById("menu-button");
const closeMenu = document.getElementById("close-menu");
const menu = document.getElementById("cabecalho-cel");

menuButton.addEventListener("click", () => {
  menu.classList.add("actived-menu"); // Adiciona a classe para abrir o menu
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("actived-menu"); // Remove a classe para fechar o menu
});