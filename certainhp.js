function realizar() {
    let GravitationalField = parseFloat(document.getElementById("grav").value);
    let BallSpeed = parseFloat(document.getElementById("velo").value);
    let BallAngle = parseFloat(document.getElementById("ang").value);
    let MagicHeight = parseFloat(document.getElementById("mass").value);

    if (GravitationalField > 0 && BallSpeed > 0 && BallAngle > 0 && MagicHeight > 0) {

        let BallAngleRad = BallAngle * Math.PI / 180;
        let voy = BallSpeed * Math.sin(BallAngleRad);
        let RadicalValue = Math.pow(voy, 2.0) - 4.0 * 0.5 * GravitationalField * MagicHeight;
        let FirstTime = (voy - Math.pow(RadicalValue, 0.5)) / GravitationalField;
        let SecondTime = (voy + Math.pow(RadicalValue, 0.5)) / GravitationalField;
        let time1ms = FirstTime * 1000;
        let time2ms = SecondTime * 1000;
        let answer1 = (time1ms).toFixed(0);
        let answer2 = (time2ms).toFixed(1);

        document.getElementById("rada").innerHTML = `ANGULO EM RADIANO = ${BallAngle} × π ÷ 180 = ${BallAngleRad}`;
        document.getElementById("voy").innerHTML = `COMPONENTE V = ${BallSpeed} × SIN(${BallAngleRad}) = ${voy}`;
        document.getElementById("radival").innerHTML = `TEMPO VOO = ${voy}² - 4 × 0.5 × ${GravitationalField} × ${MagicHeight} = ${RadicalValue}`;
        document.getElementById("1time").innerHTML = `1° TEMPO = (${voy} - √(${RadicalValue})) ÷ ${GravitationalField} = ${FirstTime}`;
        document.getElementById("2time").innerHTML = `2° TEMPO = (${voy} + √(${RadicalValue})) ÷ ${GravitationalField} = ${FirstTime}`;
        document.getElementById("1timem").innerHTML = `1° TEMPOm =  ${FirstTime} × 1000 = ${answer1}`;
        document.getElementById("2timem").innerHTML = `2° TEMPOm =  ${SecondTime} × 1000 = ${answer2}`;

        document.getElementById("saida").style.display = "flex";
        document.getElementById("entrada").style.display = "none";
    }

    else{
        alert("DIGITE TODOS OS VALORES");
    }
}

function voltar() {

    document.getElementById("entrada").style.display = "flex";
    document.getElementById("saida").style.display = "none";

    document.getElementById("grav").value = "";
    document.getElementById("velo").value = "";
    document.getElementById("ang").value = "";
    document.getElementById("mass").value = "";
}