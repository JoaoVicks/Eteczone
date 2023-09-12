function realizar() {

    let MassOfShip = parseFloat(document.getElementById("mass").value);
    let RadiusInkm = parseFloat(document.getElementById("raio").value);
    let DensityOfKuiper = parseFloat(document.getElementById("densi").value);

    
    if (MassOfShip > 0 && DensityOfKuiper > 0 && RadiusInkm > 0) {

        let RadiusOfKuiper = RadiusInkm * 1000;
        let VolumeOfKuiper = (4/3)*Math.PI*Math.pow(RadiusOfKuiper, 3.0);
        let MassOfKuiper = VolumeOfKuiper*DensityOfKuiper;
        let WorkToEscape = (6.67e-11)*MassOfShip*MassOfKuiper/RadiusOfKuiper;
        let EscapeVelocity = Math.pow((2*WorkToEscape/MassOfShip), 0.5);

        document.getElementById("rada").innerHTML = `RAIO DE KUITER = ${RadiusInkm} ÷ 1000 = ${RadiusOfKuiper}`;
        document.getElementById("voy").innerHTML = `VOLUME DE KUITER = (4 ÷ 3) × π ${RadiusOfKuiper}³ = ${VolumeOfKuiper}`;
        document.getElementById("radival").innerHTML = `MASSA DE KUIPER = ${VolumeOfKuiper} × ${DensityOfKuiper} = ${MassOfKuiper}`;
        document.getElementById("1time").innerHTML = `TRABALHO PARA ESCAPAR = (6.67e-11) × ${MassOfShip} × ${MassOfKuiper} ÷ ${RadiusOfKuiper} = ${WorkToEscape}`;
        document.getElementById("2timem").innerHTML = `VELOCIDADE = √(2 × ${WorkToEscape} ÷ ${MassOfShip}) = ${(EscapeVelocity.toFixed(1))}`;
    
        document.getElementById("saida").style.display = "flex";
        document.getElementById("entrada").style.display = "none";

    }
    else{
        alert("DIGITE TODOS OS VALORES");
    }
    
}

function voltar() {
    document.getElementById("mass").value = "";
    document.getElementById("raio").value = "";
    document.getElementById("densi").value = "";
    document.getElementById("alt").value = "";

    document.getElementById("entrada").style.display = "flex";
    document.getElementById("saida").style.display = "none";
}