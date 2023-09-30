function enviar(){
    var T1 = parseFloat(document.getElementById("T1").value)
    var T2 = parseFloat(document.getElementById("T2").value)
    var T3 = parseFloat(document.getElementById("T3").value)
    var T4 = parseFloat(document.getElementById("T4").value)
    var D1 = parseFloat(document.getElementById("D1").value)
    var D2 = parseFloat(document.getElementById("D2").value)
    var massa = parseFloat(document.getElementById("massa").value)
    var imp = parseFloat(document.getElementById("impacto").value)
    var deltas = (D2 - D1) / 100
    var deltat1 = (T2 - T1) / 1000
    var deltat2 = (T4 - T3) / 1000
    var Vi = deltas / deltat1 
    var Vf = deltas / deltat2
    var Pi = (-massa)/1000 *  Vi 
    var Pf = (massa)/1000 * Vf 
    var deltap = Pf - Pi
    var forca = deltap / (imp / 1000)

    document.getElementById("texto1").innerHTML = `Resposta 1: Delta p = ${Math.abs(deltap).toFixed(2)}`
    document.getElementById("texto2").innerHTML = `Resposta 2: Força no disco = ${Math.abs(forca).toFixed(2)}`
    document.getElementById("pre").innerHTML = `
    ΔS = (${D2.toFixed(2)} - ${D1.toFixed(2)})/100 = ${deltas.toFixed(2)} 
    ΔT inicial = (${T2.toFixed(2)} - ${T1.toFixed(2)})/1000 = ${deltat1.toFixed(2)}
    ΔT final = (${T4.toFixed(2)} - ${T3.toFixed(2)})/1000 = ${deltat2.toFixed(2)}
     
    Vi = ${deltas.toFixed(2)} / ${deltat1} = ${Vi.toFixed(2)}
    Pi = ${0.001*-massa.toFixed(2)} * ${Vi.toFixed(2)} = ${Pi.toFixed(2)}     <i>=>massa em Kg</i>
    
    Vf =  ${deltas.toFixed(2)} / ${deltat2.toFixed(2)} = ${Vf.toFixed(2)}
    Pf = ${0.001*massa.toFixed(2)} * ${Vf.toFixed(2)} = ${Pf.toFixed(2)}      <i>=> massa em g/1000</i>
    
    ΔP = ${Pf.toFixed(2)} - ${Pi.toFixed(2)} = ${massa.toFixed(2)} * ${Vf.toFixed(2)} + ${massa.toFixed(2)} * ${Vi.toFixed(2)} = ${deltap.toFixed(2)}
    F = ${deltap.toFixed(2)} / (${imp.toFixed(2)}/1000) = ${forca.toFixed(2)}`
  


// a explicação pode ficar assim:
//Primeiro, encontramos a variação de espaço subtraindo a segunda medida pela primeira
//Em segundo lugar, encontramos a variação de tempo inicial, de quando o disco vai em direção à parede, subtraindo o segundo tempo registrado pelo primeiro
//Em seguida, encontramos a velocidade inicial a partir dos valores calculados, dividindo variação de espaço pela variação de tempo inicial
//A seguir, encontramos o Momentum inicial multiplicando a velocidade inicial pela massa negativa
//Após isso, encontramos a variação de tempo final, de depois que o disco bate na parede, subtraindo o quarto tempo registrado pelo terceiro
//Depois, encontramos a velocidade final a partir dos valores calculados, dividindo variação de espaço pela variação de tempo final
//E então, encontramos o Momentum final multiplicando a velocidade final pela massa
//Calculamos a variação de Momentum subtraindo o Momentum final pelo Momentum inicial. Essa é a primeira resposta:
//E enfim, encontramos a força aplicada ao disco, dividindo a variação de Momentum pelo tempo de impacto. Essa é a segunda resposta:
}
