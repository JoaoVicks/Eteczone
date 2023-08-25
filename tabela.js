function mostrar(){
    let info = document.querySelector(".info");

    info.style.display = 'block';
};
function sumir(){
    let info = document.querySelector(".info");

    info.style.display = 'none';
}

const siglasElementosQuimicos = [
  // Alcalinos (Família 1A)
  "H", "Li", "Na", "K", "Rb", "Cs", "Fr",

  // Alcalino-terrosos (Família 2A)
  "Be", "Mg", "Ca", "Sr", "Ba", "Ra",

  // Metais de Transição (Blocos d e f)
  "Sc", "Y", "La", "Ac", "Ti", "Zr", "Hf", "Rf", "V", "Nb", "Ta", "Db",
  "Cr", "Mo", "W", "Sg", "Mn", "Tc", "Re", "Bh", "Fe", "Ru", "Os", "Hs",
  "Co", "Rh", "Ir", "Mt", "Ni", "Pd", "Pt", "Ds", "Cu", "Ag", "Au", "Rg",
  "Zn", "Cd", "Hg", "Cn", // Coluna 13

  "B","Al", "Ga", "In", "Tl",'Nh',
  
  // Coluna 14
 "C", "Si", "Ge", "Sn", "Pb","Fi",
  
  // Coluna 1
  "N", "P", "As", "Sb", "Bi","Mc",
  
  // Coluna 16
  "O", "S", "Se", "Te", "Po", "Lv",
  
  // Coluna 17
  "F", "Cl", "Br", "I", "At", "Ts",
  
  // Coluna 18
  "He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"
];






document.addEventListener('DOMContentLoaded', function() {
    let periodos = document.querySelectorAll('.tabela_periodic .periodo');

    siglasElementosQuimicos.forEach(function(elemento, index) {
        let divSigla = document.createElement('div');
        divSigla.classList.add("sigla");
        let p = document.createElement('p');
        p.textContent = elemento;
        divSigla.appendChild(p);
        periodos[index].appendChild(divSigla);
    });
});
