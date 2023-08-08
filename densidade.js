const WireType = new Array("Copper", "Aluminum", "Lead", "Silver", "Iron", "Gold");
const WireResistivity = new Array(0.0000000172, 0.0000000282, 0.0000011, 0.0000000159, 0.00000450, 0.0000000224);
const WireDensity = new Array(8960, 2700, 11350, 10500, 7870, 19300);

function enviar() {


	let WireLength = document.getElementById("WL").value;
	let WireRadius = document.getElementById("WR").value / 100;
	let WireTipo = document.getElementById("WT").value;
	let LiveWire;

	if (WireLength > 0 && WireRadius > 0 && WireTipo != "") {

		for (let i = 0; i < WireType.length; i++) {
			if (WireTipo == WireType[i]) {
				LiveWire = i;
			}
		}

		let CSArea = Math.PI * WireRadius * WireRadius / 10000;
		let VolumeOfWire = WireLength * CSArea;
		let Masskg = WireDensity[LiveWire] * VolumeOfWire;
		let massg = Masskg * 1000;

		document.getElementById("saida").style.display = "block";
		document.getElementById("entrada").style.display = "none";

		document.getElementById("CA").innerHTML = `CA = π × ${WireRadius}² ÷ 10000 =  ${CSArea}`;
		document.getElementById("VW").innerHTML = `VW = ${WireLength} × ${CSArea} = ${VolumeOfWire}`;
		document.getElementById("MK").innerHTML = `MK = ${WireDensity[LiveWire]} × ${VolumeOfWire} = ${Masskg}`;
		document.getElementById("MG").innerHTML = `MG = ${Masskg} × 1000 = ${massg}`;
	}

	else {
		alert("DIGITE TODOS OS VALORES OU SELECIONE UM MATERIAL")
	}

}


function voltar() {

    document.getElementById("entrada").style.display = "flex";
    document.getElementById("saida").style.display = "none";

    document.getElementById("WL").value = "";
    document.getElementById("WR").value = "";
	document.getElementById("WT").value = "";
    
}
