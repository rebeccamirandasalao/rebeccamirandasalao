let lastScrollTop = 0; // Para guardar a última posição do scroll

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Obtém a posição atual do scroll
  
  if (currentScroll > lastScrollTop) {
    // Scroll para baixo
    header.classList.add('hide'); // Adiciona a classe 'hide' para ocultar o cabeçalho
  } else {
    // Scroll para cima
    header.classList.remove('hide'); // Remove a classe 'hide' para mostrar o cabeçalho
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Garante que o valor de scroll não fique negativo
});




window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Obtém a posição atual do scroll

  if (currentScroll > 100) {
    header.classList.add('scrolled'); // Adiciona a classe quando não está no topo
  } else {
    header.classList.remove('scrolled'); // Remove a classe quando está no topo
  }
});