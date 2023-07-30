function realizar() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let z = document.getElementById("z").value;

    if (x > 0 && y > 0 && z > 0) {
        
        FloorVector = Math.floor(Math.pow((Math.pow(x,2.0) + Math.pow(z,2.0)),0.5));
        TotalDistance = Math.floor(Math.pow((Math.pow(y,2.0) + Math.pow(FloorVector,2.0)),0.5));
        FloorAngle = Math.floor(Math.atan(z/x)*180/Math.PI);
        AirAngle = Math.floor(Math.atan(y/FloorVector)*180/Math.PI);

        document.getElementById("saida").style.display = "flex";
        document.getElementById("entrada").style.display = "none";

        document.getElementById("HC").innerHTML = `HC = √(${x}² + ${z}²) = ${FloorVector}`;
        document.getElementById("HA").innerHTML = `HA = √(${FloorVector}² + ${y}²) = ${TotalDistance}`;
        document.getElementById("AA").innerHTML = `AA = tan(${y} ÷ ${FloorVector}) × 180 ÷ π = ${AirAngle}`;
        document.getElementById("AC").innerHTML = `AC = tan(${x} ÷ ${z}) × 180 ÷ π = ${FloorAngle}`;

    }
    else{
        alert("DIGITE TODOS OS VALORES")
    }
}

function voltar() {

    document.getElementById("entrada").style.display = "flex";
    document.getElementById("saida").style.display = "none";

    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    document.getElementById("z").value = "";
    
}