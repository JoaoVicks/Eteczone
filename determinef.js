function enviar() {

    let Fluid2Density = document.getElementById("D2").value;
    let FluidLevel2 = document.getElementById("N2").value;
    let FluidLevel1 = document.getElementById("N1").value;

    if (Fluid2Density > 0 && FluidLevel2 > 0 && FluidLevel1 > 0) {

		let Pressure2 = (Fluid2Density*9.8*FluidLevel2/1000).toFixed(0);
        let densityratio = (FluidLevel2 / FluidLevel1);
        let Fluid1Density = (Fluid2Density * densityratio).toFixed(0);

        document.getElementById("saida").style.display = "block";
        document.getElementById("entrada").style.display = "none";
        
        document.getElementById("PR").innerHTML= `PR = ${Fluid2Density} × 9.8 × ${FluidLevel2} ÷ 1000 = ${Pressure2}`;
        document.getElementById("DR").innerHTML= `DR = ${FluidLevel2} ÷ ${FluidLevel1} = ${densityratio}`;
        document.getElementById("D1").innerHTML= `D1 = ${Fluid2Density} × ${densityratio} = ${Fluid1Density}`;
    }
    else{
        alert("DIGITE TODOS OS VALORES")
    }
}

function voltar() {

    document.getElementById("entrada").style.display = "flex";
    document.getElementById("saida").style.display = "none";

    document.getElementById("D2").value = "";
    document.getElementById("N1").value = "";
    document.getElementById("N2").value = "";
    
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
let html$ = document.querySelector('html');
let btn$ =  document.querySelector('#idark9');

btn$.addEventListener('change', function(){
html$.classList.toggle('light-mode7');



});