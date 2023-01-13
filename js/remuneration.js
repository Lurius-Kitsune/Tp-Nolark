const fix = 1100; // Rémunération fixé sans majoration d'anciennet
let nbAncien = parseInt(window.document.querySelector("#num_ancien").value); // Int
let salaire = 0;

/***
 * 
 * @type type Classe
 */
class Casque {
    constructor(nom, prix, taux, qteRq) {
        this.nom = nom;
        this.prix = prix;
        this.taux = taux;
        this.qteRq = [...qteRq, 99999999];
    }
    
    /***
     * 
     * @param {int} qte La quantité de casque vendu
     * @returns {Number} Renvoie la comission toucher à la vente total de Casque
     */
    Commission(qte) {
        let total = 0;
        let i, j;
        for (i = 1; i !== qte + 1; i++) {
            for (j = 0; j !== this.taux.length; j++) {
                if (this.qteRq[j] + 1 <= qte < this.qteRq[j + 1]) {
                    total += this.prix + this.taux[j];
                }
            }
        }
        return total;
    }
}

let Multi = new Casque("Multitec", 180, [0.04, 0.06, 0.1], [0, 20, 50]);
let XSpirit = new Casque("X-Spirit", 350, [0.06], [50]);
let s20 = new Casque("S-20", 140, [0.02], [0]);

salaire = fix + majoration(50) + Multi.Commission(1) + s20.Commission(1) + XSpirit.Commission(1);

/**
 * 
 * @param {int} nbAncien Le nombre d'ancienneté
 * @returns {Number} Renvoie la valeur total 
 */
function majoration(nbAncien) {
    let total = 0;
    if (nbAncien >= 5) {
        if (nbAncien >= 5 && nbAncien < 10) {
            total += fix * 0.03;
        } else {
            total += fix * 0.06;
        }
    }
    return total;
}




