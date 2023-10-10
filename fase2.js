function enviar(){
    const C1 = 500
    const C2 = C1
    var M1 = parseFloat(document.getElementById("M1").value)
    var Ai = parseFloat(document.getElementById("Ai").value)
    var Af = parseFloat(document.getElementById("Af").value)

    Vf = (M1 + C1) * Af
    Vi = (M1 + C1) * Ai
    deltaV = Vi - Vf
    M2 = (deltaV / Af) - C2 
    resultado = M2

    document.getElementById("texto").innerHTML = `Velocidade Inicial = (${M1.toFixed(2)} + ${C1.toFixed(2)}) * ${Ai.toFixed(2)} = ${Vi.toFixed(2)}<br><br>Velocidade Final = (${M1.toFixed(2)} + ${C1.toFixed(2)}) * ${Af.toFixed(2)} = ${Vf.toFixed(2)}<br><br>Variação de Velocidade = ${Vi.toFixed(2)} - ${Vf.toFixed(2)} = ${deltaV.toFixed(2)}<br><br>Resultado = (${deltaV.toFixed(2)} / ${Af.toFixed(2)}) - ${C2.toFixed(2)} = <b>${M2.toFixed(2)}</b>`
}