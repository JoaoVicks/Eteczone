function realizar() {
    let M1 = document.getElementById("massamesa").value;
    let M2 = document.getElementById("massapendurada").value;

    if (M1 > 0 && M2 > 0) {

    let FR = M2 * 9.8;
    let AC = (Math.abs(FR)/(parseFloat(M1)+parseFloat(M2))).toFixed(1);
    let TE = (M2 * (9.8 - AC)).toFixed(1);

    document.getElementById("entradas").style.display = "none"
    document.getElementById("resolucao").style.display = "block"

    document.getElementById("fr").innerHTML = `FORÇA = ${M2} × 9.8 = ${FR}`;
    document.getElementById("ac").innerHTML = `ACELERAÇÃO = ${FR} ÷ (${M1} + ${M2}) = ${AC}`;
    document.getElementById("te").innerHTML = `TENSÃO = ${M2} × (9.8 - ${AC}) = ${TE}`;

    }

    else{
        alert("DIGITE TODOS OS VALORES")
    }
}

function voltar() {

    document.getElementById("entradas").style.display = "block"
    document.getElementById("resolucao").style.display = "none"

    document.getElementById("massamesa").value = "";
    document.getElementById("massapendurada").value = ";"
}
//light mode anda dark mode //

document.addEventListener('DOMContentLoaded' ,function(){
 let html$= document.querySelector('html');
 let botao$= document.querySelector('#idark5');


 botao$.addEventListener('change',function(){
 html$.classList.toggle('light-mode5')

 });





});

function sumir(){
    var imagem1 = document.getElementById('img1-1');
    var imagem2 = document.getElementById('img2-2');
    
    imagem1.style.visibility= "hidden";
    imagem2.style.visibility= "hidden";
};


function aparecer(){
    var imagem1 = document.getElementById('img1-1');
    var imagem2 = document.getElementById('img2-2');
    
    imagem1.style.visibility= "visible";
    imagem2.style.visibility= "visible";
};
