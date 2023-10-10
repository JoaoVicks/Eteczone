function enviar(){
    const C1 = 500
    const C2 = C1
    var M1 = parseFloat(document.getElementById("M1").value)
    var M2 = parseFloat(document.getElementById("M2").value)
    var A1 = parseFloat(document.getElementById("AE").value)
    var A2 = parseFloat(document.getElementById("AD").value)

    V = ((M1+C1) * A1 + (M2+C2) * A2) / (M1+C1+M2+C2)

    document.getElementById("texto").innerHTML = `Velocidade = ((${M1} + ${C1}) * ${A1} + (${M1} + ${C1}) * ${A2}) / ${(M1+C1+M2+C2)} = <b>${V}</b>`
}