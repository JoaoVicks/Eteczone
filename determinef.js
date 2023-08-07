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