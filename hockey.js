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
    ΔS = (S2-S1)/100
    ΔT = (T2-T1)/1000
    
    Vi = ΔS/ΔT
    Pi = -m*Vi       <i>=>massa em Kg</i>
    
    Vf =  ΔS/ΔT
    Pf = m*Vf        <i>=> massa em g/1000</i>
    
    ΔP = Pf - Pi = mVf + mVi
    F = ΔP / (Timpacto/1000)`
  
}
