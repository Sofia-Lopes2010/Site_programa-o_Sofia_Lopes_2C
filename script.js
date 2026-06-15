function mostrarSecao(secaoSelecionada) {

    const secoes = document.querySelectorAll("main section");

    secoes.forEach(secao => {
        secao.style.display = "none";
    });

    document.getElementById(secaoSelecionada).style.display = "block";
}