function enviar(){
    var T1 = parseFloat(document.getElementById("T1").value)
    var T2 = parseFloat(document.getElementById("T2").value)
    var T3 = parseFloat(document.getElementById("T3").value)
    var T4 = parseFloat(document.getElementById("T4").value)
    var D1 = parseFloat(document.getElementById("D1").value)
    var D2 = parseFloat(document.getElementById("D2").value)
    var massa = parseFloat(document.getElementById("massa").value)
    var imp = parseFloat(document.getElementById("impacto").value)
    var deltas = (D2 - D1) / 100
    var deltat1 = (T2 - T1) / 1000
    var deltat2 = (T4 - T3) / 1000
    var Vi = deltas / deltat1 
    var Vf = deltas / deltat2
    var Pi = (-massa)/1000 *  Vi 
    var Pf = (massa)/1000 * Vf 
    var deltap = Pf - Pi
    var forca = deltap / (imp / 1000)

    document.getElementById('saida').style.display = 'block';
    document.getElementById('entrada').style.display= 'none';
    document.getElementById("texto1").innerHTML = `Resposta 1: Delta p = ${Math.abs(deltap).toFixed(2)}`
    document.getElementById("texto2").innerHTML = `Resposta 2: Força no disco = ${Math.abs(forca).toFixed(2)}`


document.getElementById("variaS").innerHTML = `ΔS = (${D2.toFixed(2)} - ${D1.toFixed(2)})/100 = ${deltas.toFixed(2)}`;
document.getElementById("tempoIni").innerHTML= `ΔT inicial = (${T2.toFixed(2)} - ${T1.toFixed(2)})/1000 = ${deltat1.toFixed(2)}`
document.getElementById("velocIni").innerHTML= `  Vi = ${deltas.toFixed(2)} / ${deltat1.toFixed(2)} = ${Vi.toFixed(2)}`
document.getElementById("momentumIni").innerHTML= `Pi = ${0.001 * -massa.toFixed(2)} * ${Vi.toFixed(2)} = ${Pi.toFixed(2)}     <i>=>massa em Kg</i> `
document.getElementById("tempoFinal").innerHTML= ` ΔT final = (${T4.toFixed(2)} - ${T3.toFixed(2)})/1000 = ${deltat2.toFixed(2)}    `
document.getElementById("velocFinal").innerHTML= `  Vf = ${deltas.toFixed(2)} / ${deltat2.toFixed(2)} = ${Vf.toFixed(2)} `
document.getElementById("momentumFinal").innerHTML= `   Pf = ${0.001 * massa.toFixed(2)} * ${Vf.toFixed(2)} = ${Pf.toFixed(2)}      <i>=> massa em g/1000</i> `
document.getElementById("variaMomentu").innerHTML= `ΔP = ${Pf.toFixed(2)} - ${Pi.toFixed(2)} = ${massa.toFixed(2)} * ${Vf.toFixed(2)} + ${massa.toFixed(2)} * ${Vi.toFixed(2)} = ${Math.abs(deltap).toFixed(2)}`
document.getElementById("forca").innerHTML= ` F = ${deltap.toFixed(2)} / (${imp.toFixed(2)}/1000) = ${Math.abs(forca).toFixed(2)}` 



// a explicação pode ficar assim:

//
//
//
//
}
function desaparecer(){
    var imagem1 = document.getElementById("img1-3");
    var imagem2 = document.getElementById("img2-3");

    imagem1.style.visibility = "hidden";
    imagem2.style.visibility = "hidden";


};

function aparecer(){
    let imagem1= document.getElementById('img1-3');
    let imagem2= document.getElementById('img2-3');

    imagem1.style.visibility = 'visible';
    imagem2.style.visibility = 'visible ';
}
function voltar(){
    document.getElementById('saida').style.display = 'none';
    document.getElementById('entrada').style.display= 'flex';
    document.getElementById("T1").value= ""
document.getElementById("T2").value= ""
document.getElementById("T3").value= ""
document.getElementById("T4").value= ""
document.getElementById("D1").value=''
ocument.getElementById("D2").value= ""
document.getElementById("massa").value= ""
document.getElementById("impacto").value= ""
    
}
let html = document.querySelector('html');
let btn = document.querySelector('#idark10');

btn.addEventListener('change',function(){
    html.classList.toggle('light-mode7');
});