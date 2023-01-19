const fix = 1100; // Rémunération fixé sans majoration d'anciennet

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
     * @param {Number} qte La quantité de casque vendu
     * @returns {Number} Renvoie la comission toucher à la vente total de Casque
     */
    Commission(qte) {
        let total = 0;
        let i, j;
        for (i = 1; i !== qte + 1; i++) {
            for (j = 0; j !== this.taux.length; j++) {
                if (this.qteRq[j] + 1 <= qte < this.qteRq[j + 1]) {
                    total += this.prix * this.taux[j];
                }
            }
        }
        return total;
    }
}


/**
 * 
 * @param {Number} nbAncien Le nombre d'ancienneté
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


function calc_sim() {
    let salaire = 0;
    let nbAncien = parseInt(window.document.querySelector("#num_ancien").value); // Int
    let Multi = new Casque("Multitec", 180, [0.04, 0.06, 0.1], [0, 20, 50]);
    let XSpirit = new Casque("X-Spirit", 350, [0.06], [50]);
    let s20 = new Casque("S-20", 140, [0.02], [0]);
    if (window.document.querySelector("#lst_typecasque").value === "" ||
        window.document.querySelector("#num_ancien").value === "" ||
        window.document.querySelector("#prix_casque").value === "" ||
        window.document.querySelector("#com_km").value === "") {
        alert("Veuillez remplir toute les valeurs"); // On affiche un message
    }
    else {
        if (window.document.querySelector("#lst_typecasque").value == "Multi") {
            salaire += Multi.Commission(parseInt(window.document.querySelector("#prix_casque").value));
        }
        else if (window.document.querySelector("#lst_typecasque").value == "s20") {
            salaire += s20.Commission(parseInt(window.document.querySelector("#prix_casque").value));
        }
        else {
            salaire += XSpirit.Commission(parseInt(window.document.querySelector("#prix_casque").value));
        }
        salaire += majoration(nbAncien) + fix

        window.document.querySelector("#resultat").innerHTML = "La rémunération sera de : " + salaire + " €";
    }
}

/**
 * Attend envoie :
 */
window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer").addEventListener("click", calc_sim);
});






