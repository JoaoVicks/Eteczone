BodyName = ["SOL", "MERCURIO", "VENUS", "TERRA", "MARTE", "HYGIEA", "VESTA", "CERES", "PALLAS", "JUPTER", "SATURNO", "URANO", "NETUNO", "PLUTÃO", "HAUMEA", "MAKEMAKE", "ERIS", "LUA", "IO", "EUROPA", "GANYMEDE", "CALLISTO", "ENCELADUS", "TITAN", "TRITON"];
BodyMass = [1.989e30, 3.302e23, 4.87e24, 5.97e24, 6.42e23, 9.0e9, 2.67e20, 9.43e20, 2.1e20, 1.9e27, 5.685e26, 8.68e25, 1.02e26, 1.3e22, 4.2e21, 4.0e21, 1.7e22, 7.36e22, 8.93e22, 4.8e22, 1.48e23, 1.08e23, 1.1e20, 1.35e23, 2.14e22];
BodyRadius = [6.95e8, 2.44e6, 6.051e6, 6.38e6, 3.397e6, 2.15e5, 2.65e5, 4.71e5, 2.77e5, 7.149e7, 6.03e7, 2.56e7, 2.476e7, 1.18e6, 5.75e5, 7.5e5, 1.2e6, 1.74e6, 1.821e6, 1.56e6, 2.63e6, 2.41e6, 2.5e5, 2.575e6, 1.3526e6];

function realizar() {
    planeta()
}

function planeta() {
    
    let CP = document.getElementById("planeta").value;
    let MC = 0;
    let RC = 0;
    let AT = document.getElementById("altura").value *1000;
    let MS = document.getElementById("massa").value;
    let OrbitalRadiusMultiplier = 0;
    let OrbitalRadius = 0;

    if (CP === "nehum") {
        alert("SELECIONE UM CORPO")
    }

    if (AT <= 0 && MS <=0) {
        alert("DIGITE TODOS OS VALORES")
    }


    else if (AT > 0 && MS > 0 && CP !== "nehum") {
        
    
        for (const i in BodyMass) {
            if (CP === BodyName[i]) {
                MC = BodyMass[i];
                RC = BodyRadius[i];
                OrbitalRadius = (parseFloat(AT) + parseFloat(BodyRadius[i]));
                let AccelerationAtAltitude = (6.67e-11*MC/(Math.pow(OrbitalRadius, 2.0))).toFixed(3);
                let ForceGravity = (AccelerationAtAltitude*MS).toFixed(3);

                document.getElementById("mc").innerHTML = `MASSA DO CORPO = ${MC}`
                document.getElementById("rc").innerHTML = `RAIO DO CORPO = ${RC}`
                document.getElementById("ro").innerHTML = `RAIO DA ÓRBITA = ${AT} + ${BodyRadius[i]} = ${OrbitalRadius}`
                document.getElementById("vl").innerHTML = `ACELERAÇÃO = (${MC} × 6.67e-11) ÷ ${OrbitalRadius}² = ${AccelerationAtAltitude}`
                document.getElementById("fr").innerHTML = `FORÇA GRAVITACIONAL = ${AccelerationAtAltitude} × ${MS} = ${ForceGravity}`
                document.getElementById("sh").innerHTML = `FORÇA DO ESCUDO = ${AccelerationAtAltitude}`
        
                document.getElementById("resolucao").style.display = "block";
                document.getElementById("entrada").style.display = "none";
            }
        }
    }
        }


function sumir() {
    document.getElementById("selecionar").style.display = "none";
}

function voltar() {
    document.getElementById("entrada").style.display = "block";
    document.getElementById("resolucao").style.display = "none";

    document.getElementById("altura").value = "";
    document.getElementById("massa").value = "";
}

	