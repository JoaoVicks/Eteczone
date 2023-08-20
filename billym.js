function realizar() {
    let BillyMass = parseFloat(document.getElementById("mass").value);
    let gField = parseFloat(document.getElementById("grav").value);
    let Angledeg = parseFloat(document.getElementById("ang").value);
    let mu = parseFloat(document.getElementById("atri").value);
    let HillLength = parseFloat(document.getElementById("dist").value);
    if (BillyMass > 0 && gField > 0 && Angledeg > 0 && mu > 0 && HillLength > 0) {
    
    let Anglerad = (Angledeg * (Math.PI / 180));
    let VerticalDisplacement = (HillLength * Math.sin(Anglerad)).toFixed(2);
    VerticalDisplacement = parseFloat(VerticalDisplacement);
    PEg = VerticalDisplacement * BillyMass * gField;
    FnormalHill = BillyMass * gField * Math.cos(Anglerad);
    Fgx = BillyMass * gField * Math.cos(Anglerad);
    FfrictionHill = mu * FnormalHill;
    AccelerationHill = (Fgx - FfrictionHill) / BillyMass;
    WorkOnHill = FfrictionHill * HillLength;
    KEBottom = PEg - WorkOnHill;
    VelocityBottom = Math.pow((2 * (KEBottom) / BillyMass), 0.5);
    FnormalFlat = BillyMass * gField;
    FfrictionFlat = FnormalFlat * mu;
    DistanceHorizontal = (KEBottom / FfrictionFlat).toFixed(2);

    document.getElementById("angr").innerHTML = `ANGULOMrad = ${Angledeg} × (π ÷ 180) = ${Anglerad}`
    document.getElementById("desv").innerHTML = `DESLOCAMENTOv = ${HillLength} × SIN(${Anglerad}) = ${VerticalDisplacement}`
    document.getElementById("potg").innerHTML = `POTENCIALg = ${VerticalDisplacement} × ${BillyMass} × ${gField} = ${PEg}`
    document.getElementById("forcen").innerHTML = `FORÇAn = ${BillyMass} × ${gField} × COS(${Anglerad}) = ${FnormalHill}`
    document.getElementById("forceg").innerHTML = `FORÇAg = ${FnormalHill}`
    document.getElementById("fricm").innerHTML = `FRICÇÃOm = ${mu} × ${FnormalHill} = ${FfrictionHill}`
    document.getElementById("xlr8").innerHTML = `XLR8 = (${Fgx} - ${FfrictionHill}) ÷ ${BillyMass} = ${AccelerationHill}`
    document.getElementById("trabm").innerHTML = `TRBALHOm = ${FfrictionHill} × ${HillLength} = ${WorkOnHill}`
    document.getElementById("cinep").innerHTML = `CINETICAp = ${PEg} - ${WorkOnHill} = ${KEBottom}`
    document.getElementById("velop").innerHTML = `VELOCIDADEp = √(2 × ${KEBottom} ÷ ${BillyMass}) = ${VelocityBottom}`
    document.getElementById("forcenc").innerHTML = `FORÇAnc = ${BillyMass} × ${gField} = ${FnormalFlat}`
    document.getElementById("fricc").innerHTML = `FRICÇÃOc = ${FnormalFlat} × ${mu} = ${FfrictionFlat}`
    document.getElementById("distt").innerHTML = `DISTANCIA = ${KEBottom} ÷ ${FfrictionFlat} = ${DistanceHorizontal}`

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
    document.getElementById("atri").value = "";
    document.getElementById("dist").value = "";
    
}