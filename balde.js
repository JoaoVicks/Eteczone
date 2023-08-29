function enviar(){    
    var massa = parseFloat(document.getElementById("massa").value)
    var comp = parseFloat(document.getElementById("raio").value)
    var forca = parseFloat(document.getElementById("forc").value)
    var g = 9.8
    //energia mínima
	MinVelocityTop = Math.pow((g*comp),0.5);
	EnergyTop = massa*g*2*comp + 0.5*massa*MinVelocityTop*MinVelocityTop;
	MinVelocityBottom = Math.pow((4*comp*g+MinVelocityTop*MinVelocityTop), 0.5);
	StrengthOfRopeMin = massa*((MinVelocityBottom*MinVelocityBottom/comp)+g);

    //energia máxima
	StrengthOfRope = forca;
	MaxVelocityBottom = Math.pow(((StrengthOfRope - (g*massa))*comp/massa),0.5);
	EnergyBottom = 0.5*massa*MaxVelocityBottom*MaxVelocityBottom;
 
    document.getElementById("texto1").innerHTML = `Para energia mínima, primeiro devemos descobrir a velocidade mínima: <br>√(${comp.toFixed(2)} * ${g.toFixed(2)})= ${MinVelocityTop.toFixed(2)}  <br> ${Math.pow(MinVelocityTop, 2).toFixed(2)} * ${massa.toFixed(2)} / 2 =  ${MinVelocityBottom.toFixed(2)}<br>Isso já é suficiente para encontrar a Energia mínima: <br> ${massa.toFixed(2)} * ${g.toFixed(2)} * 2 * ${comp.toFixed(2)} + 0.5 * ${massa.toFixed(2)} * ${MinVelocityTop.toFixed(2)} * ${MinVelocityTop.toFixed(2)} = <strong>${EnergyTop.toFixed(2)}</strong> <br>E também encontrar a força mínima exercida pela corda:<br> ${massa.toFixed(2)} *((${MinVelocityBottom.toFixed(2)} * ${MinVelocityBottom.toFixed(2)} / ${comp.toFixed(2)}) + ${g.toFixed(2)}) = ${StrengthOfRopeMin.toFixed(2)}`
    document.getElementById("texto3").innerHTML = `Com esses valores, já é possível encontrar a velocidade máxima: <br>√(((${StrengthOfRope.toFixed(2)} - (${g.toFixed(2)} * ${massa.toFixed(2)})) * ${comp.toFixed(2)} / ${massa.toFixed(2)})/2) = ${MaxVelocityBottom.toFixed(2)} <br>Em seguida, a Energia máxima também: <br>(${massa.toFixed(2)} * ${MaxVelocityBottom.toFixed(2)} * ${MaxVelocityBottom.toFixed(2)})/2 = <strong>${EnergyBottom.toFixed(2)}</strong>`
    document.getElementById("texto2").innerHTML = `Energia mínima = ${EnergyTop.toFixed(2)} <br>Energia Máxima = ${EnergyBottom.toFixed(2)}`
}
