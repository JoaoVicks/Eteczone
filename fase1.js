function enviar() {
    const C1 = 500;
    const C2 = C1
    var V1 = parseFloat(document.getElementById("VelE").value)
    var V2 = parseFloat(document.getElementById("VelD").value)
    var M2 = parseFloat(document.getElementById("Massa").value)

    M1 = ((M2 + C2) * V2 / V1) - C1
    resposta = M1


    document.getElementById("texto").innerHTML = `Massa Desconhecida = ((${M2}+${C2}) * ${V2} / ${V1}) - ${C1} = ${resposta} <br> <b>${resposta.toFixed(0)}</b>`


    document.getElementById('saida').style.display = 'block';
    document.getElementById('entrada').style.display = 'none';


}

let html = document.querySelector('html');
let btn = document.querySelector('#idark10');

btn.addEventListener('change', function () {
    html.classList.toggle('light-mode7');
});
function desaparecer() {
    var imagem1 = document.getElementById("img1");
    var imagem2 = document.getElementById("img2");
    var imagem3 = document.getElementById("img3");
    var imagem4 = document.getElementById("img4");


    imagem1.style.visibility = "hidden";
    imagem2.style.visibility = "hidden";
    imagem3.style.visibility = "hidden";
    imagem4.style.visibility = "hidden";


};

function aparecer() {

    var imagem1 = document.getElementById("img1");
    var imagem2 = document.getElementById("img2");
    var imagem3 = document.getElementById("img3");
    var imagem4 = document.getElementById("img4");


    imagem1.style.visibility = 'visible';
    imagem2.style.visibility = 'visible ';
    imagem3.style.visibility = 'visible';
    imagem4.style.visibility = 'visible ';
}

function voltar(){
    var V1 = document.getElementById("VelE").value=''
    var V2 = document.getElementById("VelD").value=''
    var M2 = document.getElementById("Massa").value=''

    document.getElementById('entrada').style.display='flex'
        document.getElementById('saida').style.display='none'
}