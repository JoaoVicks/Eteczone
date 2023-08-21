function realizar() {
    let StoneMass = document.getElementById("mass").value;
    let Distance = document.getElementById("dist").value;
    let Time = document.getElementById("temp").value;
    if (StoneMass > 0 && Distance > 0 && Time > 0) {
    let StoneSpeed = (Distance / Time).toFixed(2);
	let StoneKE = (0.5*StoneMass*Math.pow(StoneSpeed,2.0)).toFixed(2);

    document.getElementById("speed").innerHTML = `VELOCIDADE = ${Distance} ÷ ${Time} = ${StoneSpeed}`;
    document.getElementById("cinet").innerHTML = `CINÉTICA = 0.5 × ${StoneMass} × ${StoneSpeed}² = ${StoneKE}`;

    document.getElementById("saida").style.display = "block";
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
    document.getElementById("dist").value = "";
    document.getElementById("temp").value = "";
    
}

let html$ = document.querySelector('html');
let btn$ =  document.querySelector('#idark13');

btn$.addEventListener('change', function(){
html$.classList.toggle('light-mode7');



});
