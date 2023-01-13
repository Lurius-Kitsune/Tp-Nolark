const fix = 1100; // Rémunération fixé sans majoration d'anciennet
let nbAncien = parseInt(window.document.querySelector("#num_ancien").value); // Int
let salaire = 0;

let Multi = 180;
let XSp = 350;


class Casque {
    constructor(nom, prix, taux1, taux2, taux3) {
        this.nom = nom;
        this.prix = prix;
        this.taux1 = taux1;
        this.taux2 = taux2;
        this.taux3 = taux3;
    }
}

let s20 = new Casque("S-20",140 ,0.04 , 0.06, 0.1);

function majoration(nbAncien) {
    let total = 0;
    if (nbAncien >= 5) {
        for (i = 0; i !== nbAncien; i++) {
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
 * casque : quel casque vendu (Class Casque)
 */
function commissionProgressive(casque, qte) {
    let total = 0;
    for (i = 0; i !== qte; i++) {
        if (casque.nom === 'S-20') {
            if (i <= 20) {
                total += casque.prix * casque.taux1;
            } else if (i <= 50) {
                total += casque.prix * casque.taux2;
            } else {
                total += casque.prix * casque.taux3;
            }
        }
    }
    return total;
}




