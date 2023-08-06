function enviar() {

    let DensityOfMaterial = document.getElementById("DE").value;
	let ColumnHeight = document.getElementById("NA").value * 10;
	let ColumnRadius = document.getElementById("RA").value;

    if (DensityOfMaterial > 0 && ColumnHeight > 0 && ColumnRadius > 0) {

        let ColumnWidth = 2*ColumnRadius;
        let ColumnRadiusm = ColumnRadius/1000;
        let ColumnHeightm = ColumnHeight/1000;
        let ColumnArea = Math.PI*Math.pow(ColumnRadiusm, 2.0);
        
        let Volume = Math.PI*Math.pow(ColumnRadiusm, 2.0)*ColumnHeightm;
        let Mass = (Volume*DensityOfMaterial).toFixed(2);
        let Force = (Mass*9.8).toFixed(2);
        
        let Pressure = Force/ColumnArea;
        let PressurekPa = (Pressure/1000).toFixed(2);

        document.getElementById("saida").style.display = "block";
        document.getElementById("entrada").style.display = "none";
        
        document.getElementById("CA").innerHTML= `CA = π × ${ColumnRadiusm}² =  ${ColumnArea}`;
        document.getElementById("VO").innerHTML= `VO = π × ${ColumnRadiusm}² × ${ColumnHeightm} = ${Volume}`;
        document.getElementById("MA").innerHTML= `MA = ${Volume} × ${DensityOfMaterial} = ${Mass}`;
        document.getElementById("FO").innerHTML= `FO = ${Mass} × 9.8 = ${Force}`;
        document.getElementById("PR").innerHTML= `PR = ${Force} ÷ ${ColumnArea} = ${Pressure}`;
        document.getElementById("PP").innerHTML= `PP = ${Pressure} ÷ 1000 = ${PressurekPa}`;
    }
    else{
        alert("DIGITE TODOS OS VALORES")
    }
	
}

function voltar() {

    document.getElementById("entrada").style.display = "flex";
    document.getElementById("saida").style.display = "none";

    document.getElementById("DE").value = "";
    document.getElementById("NA").value = "";
    document.getElementById("RA").value = "";
    
}

//light mode and dark mode //

let html$ = document.querySelector('html');
let btn$ =  document.querySelector('#idark7');

btn$.addEventListener('change', function(){
html$.classList.toggle('light-mode7');



});


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