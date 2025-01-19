document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in'); // Seleciona todos os elementos com a classe 'fade-in'

    const handleScroll = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('show'); // Adiciona a classe 'show' quando o elemento entra na viewport
            }
        });
    };

    window.addEventListener('scroll', handleScroll); // Escuta o scroll
    handleScroll(); // Garante que os elementos já visíveis no carregamento também sejam mostrados
});
