function valor(){
   

   
    document.getElementById("saida").style.display = "block";
    document.getElementById("entrada").style.display = "none";

    var M1 = parseFloat(document.getElementById("M1").value)
    var V1 = parseFloat(document.getElementById("V1").value)
    var M2 = parseFloat(document.getElementById("M2").value)
    var V2 = parseFloat(document.getElementById("V2").value)
    var sentX = document.getElementById("eixox").value
    var sentY = document.getElementById("eixoy").value
    if (M1 > 0 && V1 > 0 && M2 > 0 && V2 > 0){
    var x = Math.abs(M1*V1 / (M1+M2))
    var y = Math.abs(M2*V2 / (M1+M2))
    var V = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
   
    
    var finalangle = 0
    var refangle = Math.atan(Math.abs(y)/Math.abs(x))*180/Math.PI;
    
    if (sentX == "E"){
        x= x*-1;

        
       

    }
    else {
    x=x
    
    }

    if (sentY == "B"){
        y= y*-1
      
    }
    else {
        y=y
      
    }
    if (x > 0){
if (y > 0){
    finalangle = refangle;
    document.getElementById("VT").innerHTML = ` 
    x = ${Math.abs(M1)} * ${V1} / (${M1} + ${M2}) = ${x}
    y = ${Math.abs(M2)} * ${V2} / (${M1} + ${M2}) = ${y}
    V = √${Math.pow(x, 2)} + ${Math.pow(y, 2)} = ${V}
    angulo = tan⁻¹${Math.abs(y)} / ${Math.abs(x)} = ${finalangle}`
}
else{
    finalangle = 360 - refangle;
    document.getElementById("VT").innerHTML = ` 
        x = ${Math.abs(M1)} * ${V1} / (${M1} + ${M2}) = ${x}
        y = (${Math.abs(M2)} * ${V2} / (${M1} + ${M2})) * -1 = ${y}
        V = √${Math.pow(x, 2)} + ${Math.pow(y, 2)} = ${V}
        angulo = tan⁻¹${Math.abs(y)} / ${Math.abs(x)} = ${finalangle}`
}
}
else{
if (y > 0){
    finalangle = 180 - refangle;
    document.getElementById("VT").innerHTML = ` 
        x = (${Math.abs(M1)} * ${V1} / (${M1} + ${M2})) * -1 = ${x}
        y = ${Math.abs(M2)} * ${V2} / (${M1} + ${M2}) = ${y}
        V = √${Math.pow(x, 2)} + ${Math.pow(y, 2)} = ${V}
        angulo = tan⁻¹${Math.abs(y)} / ${Math.abs(x)} = ${finalangle}`
}
else{
    finalangle = 180 + refangle;
    document.getElementById("VT").innerHTML = ` 
        x = (${Math.abs(M1)} * ${V1} / (${M1} + ${M2})) * -1 = ${x}
        y = (${Math.abs(M2)} * ${V2} / (${M1} + ${M2})) * -1 = ${y}
        V = √${Math.pow(x, 2)} + ${Math.pow(y, 2)} = ${V}
        angulo = tan⁻¹${Math.abs(y)} / ${Math.abs(x)} = ${finalangle}`
        }
    }
}

else{
    alert ("VOCÊ DEVE PREENCHER TODOS OS CAMPOS CORRETAMENTE")
    }
 
}
let html = document.querySelector('html');
let btn = document.querySelector('#idark10');

btn.addEventListener('change',function(){
    html.classList.toggle('light-mode7');
});
