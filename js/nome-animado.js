const spanAnimado = document.querySelector(".span-animado");
        const texto = "Junior CyberSecurity Analyst";
        const escreverIntervalo = 200;
        const apagarIntervalo = 50;

        function escreverTexto(spanAnimado, texto, intervalo) {
            const char = texto.split("").reverse();

            const typer = setInterval(() => {
                if (!char.length) {
                    clearInterval(typer);
                    setTimeout(() => {
                        apagarTexto(spanAnimado, texto, apagarIntervalo);
                    }, 1000);
                } else {
                    const next = char.pop();
                    spanAnimado.innerHTML += next;
                }
            }, intervalo);
        }

        function apagarTexto(spanAnimado, texto, intervalo) {
            const char = texto.split("");

            const eraser = setInterval(() => {
                if (!char.length) {
                    clearInterval(eraser);
                    setTimeout(() => {
                        escreverTexto(spanAnimado, texto, escreverIntervalo);
                    }, 500);
                } else {
                    char.pop();
                    spanAnimado.innerHTML = char.join("");
                }
            }, intervalo);
        }

        escreverTexto(spanAnimado, texto, escreverIntervalo);