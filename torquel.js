function realizar() {
    let Force1 = document.getElementById("f1").value;
    let Force2 = document.getElementById("f2").value;
    let Angle1 = document.getElementById("a1").value;
    let Angle2 = document.getElementById("a2").value;
    let Radius1 = document.getElementById("p1").value;
    let Radius2 = document.getElementById("p2").value;
    let Direction1 = document.getElementById("di1").value;
    let Direction2 = document.getElementById("di2").value;
    
    if (Force1 > 0 && Force2 > 0 && Angle1 > 0 && Angle2 > 0 && Radius1 > 0 && Radius2 > 0) { 
    
        let Force1X = Force1*Math.sin(Angle1*Math.PI/180);
        let Force2X = Force2*Math.sin(Angle2*Math.PI/180);
        let Torque1 = Force1X*Radius1*Direction1/100;
        let Torque2 = Force2X*Radius2*Direction2/100;
        
        let TotalTorque = Torque1 + Torque2;
        let Answer = parseFloat(TotalTorque.toFixed(2));

        document.getElementById("saida").style.display = "block";
        document.getElementById("entrada").style.display = "none";

        document.getElementById("f1x").innerHTML = `F1X = ${Force1} × SIN(${Angle1}) = ${Force1X}`;
        document.getElementById("f2x").innerHTML = `F2X = ${Force2} × SIN(${Angle2}) = ${Force2X}`;
        document.getElementById("t1").innerHTML = `T1 = ${Force1X} × ${Radius1} × ${Direction1}÷ 100 = ${Torque1}`;
        document.getElementById("t2").innerHTML = `T2 = ${Force2X} × ${Radius2} × ${Direction2}÷ 100 = ${Torque2}`;
        document.getElementById("tt").innerHTML = `TT = ${Torque1} + ${Torque2} = ${Answer}`;
    }
    else{
        alert("DIGITE TODOS OS VALORES")
    }
}

function voltar() {

    document.getElementById("entrada").style.display = "flex";
    document.getElementById("saida").style.display = "none";

    document.getElementById("f1").value = "";
    document.getElementById("f2").value = "";
    document.getElementById("a1").value = "";
    document.getElementById("a2").value = "";
    document.getElementById("p1").value = "";
    document.getElementById("p2").value = "";
    
}

// ligh mode anda dark mode//

let html = document.querySelector('html');
let btn = document.querySelector('#idark5');

btn.addEventListener('change' , function(){
    html.classList.toggle('light-mode6');




});

function desaparecer(){
    img1= document.getElementById('img1-4');
    img2= document.getElementById('img2-4');
    

    img1.style.visibility='hidden';
    img2.style.visibility='hidden';

}
