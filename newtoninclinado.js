function realizar() {
    let MM = document.getElementById ("massamesa").value;
    let MH = document.getElementById("massapendurada").value;
    let AN = document.getElementById("angulo").value;

    if (MH > 0 && MM > 0 && AN > 0) {
        let AR = AN*Math.PI/180;
        let F1 = MH*9.8;
        let F2 = MM*9.8*Math.sin(AR);
        let TF = Math.abs(F2 - F1);
        let MS = parseFloat(MM) + parseFloat(MH);
        let AC = (TF / MS).toFixed(2);
        let TE = 0;
        let DI = "";
        let TXT = ""

        if (F2 > F1){
            DI = "COMO A FORÇA 2 É MAIOR QUE A FORÇA 1 A DIREÇÃO ESTÁ PARA BAIXO E DEVEMOS MULTIPLICAR A MASSA PENDURADA PELA ACELERAÇÃO E SOMAR A FORÇA 1";
            TE = (F1+MH*AC).toFixed(2);
            TXT = `TENSÃO = ${MH} × ${AC} + ${F1} = ${TE}`
        }
        else{
            DI = "COMO A FORÇA 2 É MENOR QUE A FORÇA 1 A DIREÇÃO ESTÁ PARA CIMA E DEVEMOS MULTIPLICAR A MASSA PENDURADA PELA ACELERAÇÃO E SUBTRAIR A FORÇA 1";
            TE = (F1-MH*AC).toFixed(2);
            TXT = `TENSÃO = ${MH} × ${AC} - ${F1} = ${TE}`
        }

        document.getElementById("resolucao").style.display = "block";
        document.getElementById("entrada").style.display = "none";

        document.getElementById("f1").innerHTML = `FORÇA 1 = ${MH} × 9.8 = ${F1}`;
        document.getElementById("f2").innerHTML = `FORÇA 2 = ${MM} × 9.8 × SIN(${AN}) = ${F2}`;
        document.getElementById("ac").innerHTML = `ACELERAÇÃO = (${F2} - ${F1}) ÷ (${MM} + ${MH}) = ${TF} ÷ ${MS} = ${AC}`;
        document.getElementById("di").innerHTML = `${DI}`;
        document.getElementById("te").innerHTML = `${TXT}`;

    }

    else{
        alert("DIGITE TODOS OS VALORES")
    }
    
}

function voltar() {
    document.getElementById("entrada").style.display = "flex";
    document.getElementById("resolucao").style.display = "none";

    document.getElementById("massamesa").value = "";
    document.getElementById("massapendurada").value = "";
    document.getElementById("angulo").value = "";
}
//light-mode- and -dark-mode
document.addEventListener('DOMContentLoaded', function(){
let html = document.querySelector('html');
let btn = document.querySelector('#idark4');

btn.addEventListener('change',function() {
html.classList.toggle('light-mode4');

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


