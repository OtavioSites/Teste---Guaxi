window.onscroll = function() {
    var header = document.getElementsByTagName("header")[0];

    // Verifica a posição de rolagem da página
    if (window.scrollY > 650) {
        header.style.backgroundColor = "#003566"; // Se rolar mais de 100px, fundo verde
    } else {
        header.style.backgroundColor = "transparent"; // Caso contrário, fundo vermelho
    }
}
function applyMediaQuery() {
    const mediaQuery = window.matchMedia("(max-width: 1200px)");

    function handleMediaQueryChange(e) {
        if (e.matches) {
            // Código para quando a largura da janela é menor ou igual a 1200px
            console.log("A largura da janela é menor ou igual a 1200px");
            // Adicione aqui o código JavaScript específico para essa condição
        } else {
            // Código para quando a largura da janela é maior que 1200px
            console.log("A largura da janela é maior que 1200px");
            // Adicione aqui o código JavaScript específico para essa condição
        }
    }

    // Adiciona o listener para mudanças na media query
    mediaQuery.addListener(handleMediaQueryChange);

    // Chama a função uma vez para aplicar as mudanças imediatamente
    handleMediaQueryChange(mediaQuery);
}

// Chama a função quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", applyMediaQuery);


function hoverLogo(){
    let logo = document.getElementById("logo");
    logo.src = "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN";
    logo.style.transition = "0.3s";
}
function hoverLogoSai(){
    let logo = document.getElementById("logo");
    logo.src = "assets/imgs/Logo.jpg";
}




const navLinks = document.querySelectorAll('.menu a[href^="#"]');


function getDistanceFromTheTop(element){
    const id = element.getAttribute("href");

    return document.querySelector(id).offsetTop;
    
}

function nativeScrool(distanceFromTheTop){
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    });
}

function scrollToSection(event){
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) -  90;
    nativeScrool(distanceFromTheTop);

}

navLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})