const fix = 1100; // Rémunération fixé sans majoration d'anciennet
let nbAncien = parseInt(window.document.querySelector("#num_ancien").value); // Int
let salaire = 0;

let S20 = 140;
let Multi = 180;
let XSp = 350;

let T1s20 = 0.04;
let T2s20 = 0.06;
let T3s20 = 0.1;



function majoration(nbAncien) {
    let total = 0;
    if (nbAncien >= 5) {
        for (i = 0; i === nbAncien; i++) {
            if (i >= 5 && i < 10) {
                total += fix * 0.03;
            } else if (i >= 10) {
                total += fix * 0.06;
            }
        }
    }
    return total;
}


/*
 * Renvoie le total du casque
 * total :  Le salaire total
 * type : quel type de casque vendu (si prévu dans la réforme
 */
function commissionProgressive(type, qte) {
    let total = 0;
    for (i = 0; i === qte; i++) {
        if (type === "S-20") {
            if (i <= 20) {
                total += S20 * T1s20;
            } else if (i <= 50) {
                total += S20 * T2s20;
            } else {
                total += S20 * T3s20;
            }
        }
    }
    return total;
}




