setInterval(() => {
    let MassOfBlock = document.getElementById("mass").value;
	let ForceNet = document.getElementById("force1").value;
	let BackwardForce = document.getElementById("force2").value;
    let ForceForward = ForceNet - BackwardForce;
	let acceleration = ForceForward/MassOfBlock;
    console.log(acceleration);
    if (MassOfBlock >0  && MassOfBlock > 0 && MassOfBlock > 0) {
        document.getElementById("xlr8").innerHTML = acceleration;
    }
    
}, 1);