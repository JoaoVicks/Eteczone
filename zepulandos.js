function realizar() {
    let JoeyMass = parseFloat(document.getElementById("mass").value);
    let gField = parseFloat(document.getElementById("grav").value);
    let RampAngle = parseFloat(document.getElementById("ang").value);
    let KEofJoey = parseFloat(document.getElementById("cinet").value);

    if (JoeyMass > 0 && gField > 0 && RampAngle > 0 && KEofJoey > 0) {

        let RampAngleRad = RampAngle * Math.PI / 180;
        let VelocityAtJump = Math.sqrt(2 * KEofJoey / JoeyMass);
        let VelocityAtJumpX = VelocityAtJump * Math.cos(RampAngleRad);
        let VelocityAtJumpY = VelocityAtJump * Math.sin(RampAngleRad);
        let TimeInAir = 2 * VelocityAtJumpY / gField;
        let DistanceHorizontal = VelocityAtJump * TimeInAir;

        document.getElementById("ang2r").innerHTML = `ANGULORrad = ${RampAngle} × (π ÷ 180) = ${RampAngleRad}`
        document.getElementById("velop").innerHTML = `VELOCIDADEp = √(2 × ${KEofJoey} ÷ ${JoeyMass}) = ${VelocityAtJump}`
        document.getElementById("velox").innerHTML = `VELOCIDADEpx = ${VelocityAtJump} × COS(${RampAngleRad}) = ${VelocityAtJumpX}`
        document.getElementById("veloy").innerHTML = `VELOCIDADEpy = ${VelocityAtJump} × SIN(${RampAngleRad}) = ${VelocityAtJumpY}`
        document.getElementById("tempo").innerHTML = `TEMPOa = 2 × ${VelocityAtJumpY} ÷ ${gField} = ${TimeInAir}`
        document.getElementById("distt").innerHTML = `DISTANCIA = ${VelocityAtJumpX} × ${TimeInAir} = ${(DistanceHorizontal).toFixed(2)}`

        document.getElementById("saida").style.display = "flex";
        document.getElementById("entrada").style.display = "none";

    }
    else{
        alert("DIGITE TODOS OS VALORES")
    }
    
}

function voltar() {

    document.getElementById("entrada").style.display = "flex";
    document.getElementById("saida").style.display = "none";

    document.getElementById("mass").value = "";
    document.getElementById("grav").value = "";
    document.getElementById("ang").value = "";
    document.getElementById("cinet").value = "";
    
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

let html = document.querySelector('html');
let btn = document.querySelector('#idark12');

btn.addEventListener('change' , function(){
    html.classList.toggle('light-mode7');




});