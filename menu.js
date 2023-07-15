//mudança do tamanho do fundo 
window.addEventListener("scroll", function() {
    let header = document.querySelector('#ifundo');
    header.classList.toggle('rolagem2', window.scrollY > 0);
});

//mudança de do menu navegação
window.addEventListener("scroll", function() {
    let header = document.querySelector('#inav');
    header.classList.toggle('rolagem', window.scrollY > 0);
});
//mudança de texto//

// Array com os textos para serem exibidos
var texts = [
    "Não se trata apenas de ver o que ninguém\nviu, mas sim de pensar,o que ninguém ainda\npensou sobre o que todo mundo vê.\n- Albert Szent-Györgyi",
    "A imaginação é mais importante que\n o conhecimento.- Albert Einstein",
    "Toda verdade física é simbólica, e os símbolos,\nenquanto significativos,têm o poder de afetar\nnossa compreensão do mundo.\nNiels Bohr "
];

// Função para atualizar o texto
function changeText() {
    var textContainer = document.getElementById("text-container");
    var currentIndex = texts.indexOf(textContainer.textContent);
    var nextIndex = (currentIndex + 1) % texts.length; // Próximo índice no array

    textContainer.classList.remove("fade-in");
    textContainer.classList.add("fade-out");

    setTimeout(function() {
        textContainer.textContent = texts[nextIndex];
        textContainer.style.whiteSpace = "pre";
        textContainer.classList.remove("fade-out");
        textContainer.classList.add("fade-in");
    }, 1000); // Tempo correspondente à duração da transição em CSS (0.5s = 500ms)
}

// Chamar a função changeText a cada 10 segundos
setInterval(changeText, 10000);
//ação de clicar o botão de contato
function toggleFormulario() {
    var formularioContato = document.getElementById("formulario-contato");
    var btnContato = document.getElementById("btn-contato");

    if (formularioContato.classList.contains("form-cont")) {
        formularioContato.classList.remove("form-cont");
        formularioContato.classList.add("visible");
        btnContato.textContent = "Fechar";
    } else {
        formularioContato.classList.remove("visible");
        formularioContato.classList.add("form-cont");
        btnContato.textContent = "Contato";
    }
}



document.addEventListener('DOMContentLoaded',function(){

let html = document.querySelector('html');
let checkbox = document.querySelector('#idark');

    checkbox.addEventListener('change', function () {
    html.classList.toggle('light-mode');
});
});

document.addEventListener('DOMContentLoaded', function() {
    let joao = document.querySelector('html');
    let pedro = document.querySelector('#idark2');

    pedro.addEventListener('change', function() {
    joao.classList.toggle('light-mode2');
    });
});
