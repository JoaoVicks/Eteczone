function enviar() {

    let F1 = document.getElementById("F1").value;
    let F2 = document.getElementById("F2").value;
    let F3 = document.getElementById("F3").value;
    let A1 = document.getElementById("A1").value;
    let A2 = document.getElementById("A2").value;
    let A3 = document.getElementById("A3").value;
    let PSI = document.getElementById("PSI").value;
    let G = document.getElementById("G").value;

    if (F1 > 0 && F2 > 0 && F3 > 0 && A1 > 0 && A2 > 0 && A3 > 0 && PSI > 0 && G > 0) {
        let P1 = F1*G*A1/1000;
        let P2 = F2*G*A2/1000;
        let P3 = F3*G*A3/1000;
        let Patm = PSI*1000;
        
        let Answer = Patm+P1+P2+P3
        

        document.getElementById("saida").style.display = "block";
        document.getElementById("entrada").style.display = "none";
        
        document.getElementById("P1").innerHTML= `P1 = ${F1} × ${G} × ${A1} ÷ 1000 =  ${P1}`;
        document.getElementById("P2").innerHTML= `P2 = ${F2} × ${G} × ${A2} ÷ 1000 =  ${P2}`;
        document.getElementById("P3").innerHTML= `P3 = ${F3} × ${G} × ${A3} ÷ 1000 =  ${P3}`;
        document.getElementById("PATM").innerHTML= `PATM = ${PSI} × 1000 = ${Patm}`;
        document.getElementById("PT").innerHTML= `PT = ${Patm} + ${P1} + ${P2} + ${P3} = ${Answer}`;
    }
    else{
        alert("DIGITE TODOS OS VALORES")
    }
}

function voltar() {

    document.getElementById("entrada").style.display = "flex";
    document.getElementById("saida").style.display = "none";

    document.getElementById("F1").value = "";
    document.getElementById("F2").value = "";
    document.getElementById("F3").value = "";
    document.getElementById("A1").value = "";
    document.getElementById("A2").value = "";
    document.getElementById("A3").value = "";
    document.getElementById("PSI").value = "";
    document.getElementById("G").value = "";
    
}