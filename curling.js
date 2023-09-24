function valor(){
    var M1 = parseFloat(document.getElementById("M1").value)
    var V1 = parseFloat(document.getElementById("V1").value)
    var M2 = parseFloat(document.getElementById("M2").value)
    var V2 = parseFloat(document.getElementById("V2").value)
    var sentX = document.getElementById("eixox").value
    var sentY = document.getElementById("eixoy").value

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
}
else{
    finalangle = 360 - refangle;
}
}
else{
if (y > 0){
    finalangle = 180 - refangle;
}
else{
    finalangle = 180 + refangle;
}
}
document.getElementById("t").innerHTML = `${V.toFixed(2)}      ${finalangle.toFixed(2)}`
}