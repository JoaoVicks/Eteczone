import { massa_at } from "./elements.js";
import { simbolos_tabela_periodica } from "./elements.js";
function sumir() {
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

    "B", "Al", "Ga", "In", "Tl", 'Nh',

    // Coluna 14
    "C", "Si", "Ge", "Sn", "Pb", "Fi",

    // Coluna 1
    "N", "P", "As", "Sb", "Bi", "Mc",

    // Coluna 16
    "O", "S", "Se", "Te", "Po", "Lv",

    // Coluna 17
    "F", "Cl", "Br", "I", "At", "Ts",

    // Coluna 18
    "He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"
];
const nomesElementosQuimicos = [
    "Hidrogênio", "Lítio", "Sódio", "Potássio", "Rubídio", "Césio", "Frâncio",
    "Berílio", "Magnésio", "Cálcio", "Estrôncio", "Bário", "Rádio",
    "Escândio", "Ítrio", "Lantânio", "Actínio", "Titânio", "Zircônio", "Háfnio", "Rutherfórdio",
    "Vanádio", "Nióbio", "Tântalo", "Dúbnio",
    "Cromo", "Molibdênio", "Tungstênio", "Darmstádio",
    "Manganês", "Tecnécio", "Rênio", "Bóhrio",
    "Ferro", "Rutênio", "Ósmio", "Hássio",
    "Cobalto", "Ródio", "Irídio", "Meitnério",
    "Níquel", "Paládio", "Platina", "Darmstádio",
    "Cobre", "Prata", "Ouro", "Roentgênio",
    "Zinco", "Cádmio", "Mercúrio", "Copernício",
    "Boro", "Alumínio", "Gálio", "Índio", "Tálio", "Nihônio",
    "Carbono", "Silício", "Germânio", "Estanho", "Chumbo", "Fleróvio",
    "Nitrogênio", "Fósforo", "Arsênio", "Antimônio", "Bismuto", "Moscóvio",
    "Oxigênio", "Enxofre", "Selênio", "Telúrio", "Polônio", "Livermório",
    "Flúor", "Cloro", "Bromo", "Iodo", "Astato", "Tennesino",
    "Hélio", "Neônio", "Argônio", "Criptônio", "Xenônio", "Radônio", "Oganessônio"
];
const numerosAtomicosPorColuna = [
    // Coluna 1
    1, 3, 11, 19, 37, 55, 87,

    // Coluna 2
    4, 12, 20, 38, 56, 88,

    // Coluna 3
    21, 39, 57, 89,

    // Coluna 4
    22, 40, 72, 104,

    // Coluna 5
    23, 41, 73, 105,

    // Coluna 6
    24, 42, 74, 106,

    // Coluna 7
    25, 43, 75, 107,

    // Coluna 8
    26, 44, 76, 108,

    // Coluna 9
    27, 45, 77, 109,

    // Coluna 10
    28, 46, 78, 110,

    // Coluna 11
    29, 47, 79, 111,

    // Coluna 12
    30, 48, 80, 112,

    // Coluna 13
    5, 13, 31, 49, 81, 113,

    // Coluna 14
    6, 14, 32, 50, 82, 114,

    // Coluna 15
    7, 15, 33, 51, 83, 115,

    // Coluna 16
    8, 16, 34, 52, 84, 116,

    // Coluna 17
    9, 17, 35, 53, 85, 117,

    // Coluna 18
    2, 10, 18, 36, 54, 86, 118
];
const elementos5 = [
    "H2", "Li1", "Na1", "K1", "Rb1", "Cs1", "Fr1",
    "Be1", "Mg1", "Ca1", "Sr1", "Ba1", "Ra1",
    "Sc1", "Y1", "La1", "Ac1", "Ti1", "Zr1", "Hf1", "Rf1", "V1", "Nb1", "Ta1", "Db1",
    "Cr1", "Mo1", "W1", "Sg1", "Mn1", "Tc1", "Re1", "Bh1", "Fe1", "Ru1", "Os1", "Hs1",
    "Co1", "Rh1", "Ir1", "Mt1", "Ni1", "Pd1", "Pt1", "Ds1", "Cu1", "Ag1", "Au1", "Rg1",
    "Zn1", "Cd1", "Hg3", "Cn1", // Coluna 13
    "B1", "Al1", "Ga1", "In1", "Tl1", 'Nh1',
    "C1", "Si1", "Ge1", "Sn1", "Pb1", "Fi1",
    "N2", "P1", "As1", "Sb1", "Bi1", "Mc1",
    "O2", "S1", "Se1", "Te1", "Po1", "Lv1",
    "F2", "Cl2", "Br3", "I1", "At1", "Ts1",
    "He2", "Ne2", "Ar2", "Kr2", "Xe2", "Rn2", "2"
];
const estado_fisico = [
    2, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 3, 1, // Coluna 13
    1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1,
    2, 1, 1, 1, 1, 1,
    2, 1, 1, 1, 1, 1, 2,
    2, 3, 1, 1, 1, 2,
    2, 2, 2, 2, 2, 2,
];
const lantanoides_actinoides = ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"];
const elementosNomeLantanoidesActinoides = [
    "Lantânio", "Cério", "Praseodímio", "Neodímio", "Promécio",
    "Samário", "Európio", "Gadolínio", "Térbio", "Disprósio",
    "Hólmio", "Érbio", "Túlio", "Itérbio", "Lutécio",
    "Actínio", "Tório", "Protactínio", "Urânio", "Netúnio",
    "Plutônio", "Amerício", "Cúrio", "Berquélio", "Califórnio",
    "Einstênio", "Férmio", "Mendelévio", "Nobélio", "Laurêncio"
];

document.addEventListener('DOMContentLoaded', function () {
    let elementos_lan_acti = document.querySelectorAll('.tabela_periodica2 .elementos_adcionais')

    lantanoides_actinoides.forEach(function (element_ac_lan, index2) {

        let divSigla2 = document.createElement('div');
        let nm2 = document.createElement('div');

        let p5 = document.createElement('p');
        let p6 = document.createElement('p');

        p6.textContent = elementosNomeLantanoidesActinoides[index2];
        p5.textContent = element_ac_lan;
        
        nm2.appendChild(p6)
        nm2.classList.add('nome_elemento2')

        divSigla2.classList.add('sigla2');
        divSigla2.appendChild(p5);
        elementos_lan_acti[index2].appendChild(divSigla2);
        elementos_lan_acti[index2].appendChild(nm2);
        elementos_lan_acti[index2].addEventListener('click', function(){

            mostrarConteudo2(element_ac_lan,elementosNomeLantanoidesActinoides[index2])
        })




    });





})








document.addEventListener('DOMContentLoaded', function () {
    let periodos = document.querySelectorAll('.tabela_periodic .periodo');

    siglasElementosQuimicos.forEach(function (elemento, index) {
        let divSigla = document.createElement('div');
        divSigla.classList.add("sigla");

        let divNome = document.createElement('div');
        divNome.classList.add("nome_elemento");

        let p = document.createElement('p');
        let nm = document.createElement('p');

        nm.textContent = nomesElementosQuimicos[index];
        p.textContent = elemento;

        divNome.appendChild(nm);
        divSigla.appendChild(p);
        periodos[index].appendChild(divSigla);
        periodos[index].appendChild(divNome);
        periodos[index].classList.add(elemento);
        periodos[index].addEventListener('click', function () {
            mostrarConteudo(elemento, numerosAtomicosPorColuna[index], estado_fisico[index], nomesElementosQuimicos[index],);
        });
    });
});

function mostrarConteudo2(element_ac_lan,nomeclatura2){
    let p4 = document.getElementById('nome')
p4.textContent = (nomeclatura2)
info.style.display = 'flex';




}

function mostrarConteudo(elemento, valor, fisico, nomeclatura,) {
    for (let i = 0; i < simbolos_tabela_periodica.length; i++) {
        if (elemento == simbolos_tabela_periodica[i]) {
            let massa =  massa_at[i];
            let p7= document.getElementById('massa_atomica')
            p7.textContent = (massa)
        }
        
    }
    let p1 = document.getElementById("sigla");
    let p2 = document.getElementById('nm_at');
    let p3 = document.getElementById('estado');
    let p4 = document.getElementById('nome')
    let info = document.querySelector(".info");
    let quadrado = document.querySelector('.quadradinho');
    const elementos2 = ["C", 'H', "N", "P", "O", "S", "Se", "F", "Cl", "Br", "L", "At", "He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"];
    console.log(nomeclatura)
    info.style.display = 'flex';
    p1.textContent = elemento;
    p2.textContent = valor;
    p4.textContent = nomeclatura

    if (fisico === 1) {
        p3.innerHTML = ' o corpo se encontra no estado sólido'

    }
    if (fisico === 2) {
        p3.textContent = ' o corpo se encontra no estado gasoso'

    }
    if (fisico === 3) {
        p3.textContent = ' o corpo se encontra no estado líquido'

    }
    if (elemento === "B" || elemento === "Si" || elemento === "Ge" || elemento === "As" || elemento === "Sb" || elemento === "Te" || elemento === "Po") {
        quadrado.style.backgroundColor = 'white';
    }
    else if (elementos2.includes(elemento)) {
        quadrado.style.backgroundColor = 'greenyellow';
    }
    else {
        quadrado.style.backgroundColor = '#2c2c2c';

    }
}
