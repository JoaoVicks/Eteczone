function enviar(){
    const C1 = 500
    const C2 = C1
    var V1 = parseFloat(document.getElementById("VelE").value)
    var V2 = parseFloat(document.getElementById("VelD").value)
    var M2 = parseFloat(document.getElementById("Massa").value)

    M1 = ((M2+C2) * V2 / V1) - C1
    resposta = M1


    document.getElementById("texto").innerHTML = `Massa Desconhecida = ((${M2}+${C2}) * ${V2} / ${V1}) - ${C1} = ${resposta} <br> <b>${resposta.toFixed(0)}</b>` 
    
    
    
    

}