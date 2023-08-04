function enviar() {

    let F1 = document.getElementById("F1").value;
    let R2 = document.getElementById("R2").value;
    let R1 = document.getElementById("R1").value;

    if (F1 > 0 && R1 > 0 && R2 > 0) {
        let R1m = R1 / 1000;
        let R2m = R2 / 1000;
        let A1 = Math.PI * Math.pow(R1m, 2.0);
        let A2 = Math.PI * Math.pow(R2m, 2.0);
        let P1 = F1 / A1;
        let P2 = P1;
        let F2 = P2 * A2;
        let Answer = (F2).toFixed(1);

        document.getElementById("saida").style.display = "block";
        document.getElementById("entrada").style.display = "none";
        
        document.getElementById("A1").innerHTML= `A1 = π × ${R1m}² =  ${A1}`;
        document.getElementById("A2").innerHTML= `A2 = π × ${R2m}² = ${A2}`;
        document.getElementById("P1").innerHTML= `P1 = ${F1} ÷ ${A1} = ${P1}`;
        document.getElementById("P2").innerHTML= `P2 = ${P1}`;
        document.getElementById("F2").innerHTML= `F2 = ${P2} × ${A2} = ${F2}`;
    }
    else{
        alert("DIGITE TODOS OS VALORES")
    }
}

function voltar() {

    document.getElementById("entrada").style.display = "flex";
    document.getElementById("saida").style.display = "none";

    document.getElementById("F1").value = "";
    document.getElementById("R1").value = "";
    document.getElementById("R2").value = "";
    
}