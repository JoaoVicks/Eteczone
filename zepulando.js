function realizar() {
    let JoeyMass = parseFloat(document.getElementById("mass").value);
    let HillLength = parseFloat(document.getElementById("dist1").value); 
    let gField = parseFloat(document.getElementById("grav").value);
    let Angledeg = parseFloat(document.getElementById("ang1").value);
	let RampLength = parseFloat(document.getElementById("dist2").value);
	let RampAngle = parseFloat(document.getElementById("ang2").value);

    if (JoeyMass > 0 && HillLength > 0 && gField > 0 && Angledeg > 0 && RampAngle > 0 && RampLength > 0) {
        
    let Anglerad = Angledeg * (Math.PI / 180);
    let VerticalDisplacement = (HillLength * Math.sin(Anglerad));
    let PEg = VerticalDisplacement*JoeyMass*gField;
	let FfrictionHill = 0;
	let WorkOnHill = FfrictionHill*HillLength;
	let KEBottom = PEg - WorkOnHill;
	let RampAngleRad = RampAngle*Math.PI/180;
	let RampHeight = RampLength*Math.sin(RampAngleRad);
	let EnergyLostOnRamp = JoeyMass*RampHeight*gField;
	let KEatJump = KEBottom - EnergyLostOnRamp;
	let VelocityAtJump = Math.pow((2*(KEatJump)/JoeyMass), 0.5);
	let VelocityAtJumpX = VelocityAtJump*Math.cos(RampAngleRad);
	let VelocityAtJumpY = VelocityAtJump*Math.sin(RampAngleRad);
	let TimeInAir = 2*VelocityAtJumpY/gField;
	let DistanceHorizontal = (VelocityAtJumpX*TimeInAir).toFixed(2);

    document.getElementById("angr").innerHTML = `ANGULOMrad = ${Angledeg} × (π ÷ 180) = ${Anglerad}`
    document.getElementById("desv").innerHTML = `DESLOCAMENTOv = ${HillLength} × SIN(${Anglerad}) = ${VerticalDisplacement}`
    document.getElementById("potg").innerHTML = `POTENCIALg = ${VerticalDisplacement} × ${JoeyMass} × ${gField} = ${PEg}`
    document.getElementById("trabm").innerHTML = `TRABALHOm = ${FfrictionHill} × ${HillLength} = ${WorkOnHill}`
    document.getElementById("cinet").innerHTML = `CINÉTICAt = ${PEg} - ${WorkOnHill} = ${KEBottom}`
    document.getElementById("ang2r").innerHTML = `ANGULORrad = ${RampAngle} × (π ÷ 180) = ${RampAngleRad}`
    document.getElementById("rampa").innerHTML = `RAMPAa = ${RampHeight} × SIN(${RampAngleRad}) = ${RampHeight}`
    document.getElementById("perde").innerHTML = `PERDAe = ${JoeyMass} × ${RampHeight} × ${gField} = ${EnergyLostOnRamp}`
    document.getElementById("cinep").innerHTML = `CINETICAp = ${KEBottom} - ${EnergyLostOnRamp} = ${KEatJump}`
    document.getElementById("velop").innerHTML = `VELOCIDADEp = √(2 × ${KEatJump} ÷ ${JoeyMass}) = ${VelocityAtJump}`
    document.getElementById("velox").innerHTML = `VELOCIDADEpx = ${VelocityAtJump} × COS(${RampAngleRad}) = ${VelocityAtJumpX}`
    document.getElementById("veloy").innerHTML = `VELOCIDADEpy = ${VelocityAtJump} × SIN(${RampAngleRad}) = ${VelocityAtJumpY}`
    document.getElementById("tempo").innerHTML = `TEMPOa = 2 × ${VelocityAtJumpY} ÷ ${gField} = ${TimeInAir}`
    document.getElementById("distt").innerHTML = `DISTANCIA = ${VelocityAtJumpX} × ${TimeInAir} = ${DistanceHorizontal}`

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
    document.getElementById("dist1").value = "";
    document.getElementById("grav").value = "";
    document.getElementById("ang1").value = "";
    document.getElementById("dist2").value = "";
    document.getElementById("ang2").value = "";
    
}