function realizar() {
    // CAPTAÇÃO DE VALORES PARA USA-LOS COMO VARIAVEIS//
    let DB = document.getElementById("boatdensi").value;
    let DF = document.getElementById("fluiddensi").value;
    let MP = document.getElementById("mediapeople").value;
    let CP = document.getElementById("comp").value;
    let LG = document.getElementById("larg").value;
    let AT = document.getElementById("alt").value;
    //                                                 //

    // VERIFICAÇÃO PARA IMPEDIR DE REALIZAR OPERAÇÕES COM VALORES VAZIOS//
    if (DB > 0 && DF > 0 && MP > 0 && CP > 0 && LG > 0 && AT > 0) {
        
        // REALIZAÇÃO DE CONTAS NESCESSÁRIAS             //
        VL = AT*CP*LG/100;
        FB = DF*9.8*VL;
        TM = FB/9.8;
        MR = VL*DB;
        MPP = TM - MR;
        resposta = Math.floor(MPP/MP);
        //                                               //

        // UTILIZAÇÃO DOS VALORES ENCONTRADOS NAS CONTAS PARA AUXILIAR NAS EXPLICAÇÕES//        
        document.getElementById("volume").innerHTML = "VOLUME = " + AT + " × " + CP + " × " + LG + " ÷ " + "100" + " = " + VL; 
        document.getElementById("empuxo").innerHTML = "EMPUXO = " + DF + " × " + "9.8" + " × " + VL + " = " + FB; 
        document.getElementById("massatotal").innerHTML = "MASSA TOTAL = " + FB + " ÷ " + "9.8" + "=" + TM;  
        document.getElementById("massabarco").innerHTML = "MASSA DO BARCO = " + VL + " × " + DB + "=" + MR ; 
        document.getElementById("massapessoas").innerHTML = "MASSA DAS PESSOAS = " + TM + " - " + MR + "=" + MPP ; 
        document.getElementById("resposta").innerHTML = "QUANTIDADE DE PESSOAS = " + MPP + " ÷ " + MP + " = " + resposta; 
        //                                                                            //

        // SUBSTITUIÇÃO DOS INPUTS PARA AS EXPLICAÇÕES//
        document.getElementById("resolucao").style.display = "block "
        document.getElementById("entradas").style.display = "none "
        //                                            //
    }

    else{
        alert("DIGITE TODOS OS VALORES")
    }
    //                                                                     //
}

function voltar() {
    // SUBSTITUIÇÃO DAS EXPLICAÇÕES  PARA OS INPUTS//
    document.getElementById("resolucao").style.display = "none "
    document.getElementById("entradas").style.display = "flex "
    //                                              //

    // SUBSTITUINDO OS VALORES DOS INPUTS PARA STRINGS VAZIAS//
    document.getElementById("boatdensi").value = "";
    document.getElementById("fluiddensi").value = "";
    document.getElementById("mediapeople").value = "";
    document.getElementById("comp").value = "";
    document.getElementById("larg").value = "";
    document.getElementById("alt").value = "";
    //                                                        //

}
//light and dark mode //
document.addEventListener('DOMContentLoaded', function () {
    let html = document.querySelector('html');
    let botao = document.querySelector('#idark3');

    botao.addEventListener('change', function () {
    html.classList.toggle('light_mode3');
    });
});


function desaparecer(){
    var imagem1 = document.getElementById("img1");
    var imagem2 = document.getElementById("img2");

    imagem1.style.visibility = "hidden";
    imagem2.style.visibility = "hidden";


};

function aparecer(){
    let imagem1= document.getElementById('img1');
    let imagem2= document.getElementById('img2');

    imagem1.style.visibility = 'visible';
    imagem2.style.visibility = 'visible ';
}

function CB() {
    document.getElementById('comp').title  = 'COMPRIMENTO DO BARCO(M)'
}

function LB() {
    document.getElementById('larg').title  = 'LARGURA DO BARCO(M)'
}

function AB() {
    document.getElementById('alt').title  = 'ALTURA DO BARCO(M)'
}