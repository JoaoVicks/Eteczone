function enviar(){
    var AngleOfForce = parseFloat(document.getElementById("angulo").value);
    var coefficientoffriction = parseFloat(document.getElementById("atrito").value);
    var ActualForce = parseFloat(document.getElementById("forca").value);
    var MassTable = parseFloat(document.getElementById("massa").value);
    var DistanceTraveledcm = parseFloat(document.getElementById("dist").value);
    var DistanceTraveled = DistanceTraveledcm/100;
    var AngleinRad = AngleOfForce * (Math.PI / 180);
    var ForceGravity = MassTable*9.8;
    var ForceTensionX = ActualForce*Math.cos(AngleinRad);
    var ForceTensionY = ActualForce*Math.sin(AngleinRad);
    var ForceY = ForceGravity-ForceTensionY;
    var ForceFriction = coefficientoffriction*ForceY;
    var ForceX = ForceTensionX-ForceFriction;
    var Acceleration = ForceX/MassTable;
    var WorkByTension = ForceTensionX*DistanceTraveled;
    var WorkByFriction = ForceFriction*DistanceTraveled;
    var WorkToKE = WorkByTension - WorkByFriction;
    var answer1 = WorkByTension;
    var answer2 = WorkByFriction;
    var answer3 = WorkToKE;
    document.getElementById('txt').innerHTML = `${answer1.toFixed(2)} <br>${answer2.toFixed(2)} <br>${answer3.toFixed(2)}`;


}