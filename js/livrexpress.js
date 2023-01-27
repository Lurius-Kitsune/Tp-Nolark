
/**
 * Renvoie la prime obtenue en fonction du nombre d'années d'anciéneté
 * @param {Integer} years
 * @returns {Integer}
 */
function primeAnnées(years){
    const yrsForPrime = 4, premPrime = 300, upPrime = 30;
    let result = 0;
    if (years >= yrsForPrime){
        result = premPrime + (years - yrsForPrime) * upPrime
    }
    return result;
}

/**
 * Affiche la prime obtenue en fonction de la distance parcourue:
 * Cependant la valeur max sera le plafond !
 * @param {Integer} dist
 * @returns {float} La prime obtenue 
 */
function primeDist(dist){
    const plafond = 900, centpKm = 0.01;
    let result = centpKm*dist;
        if (result >= plafond){
            result = plafond;
        }
    return result;
}

function lostPrime(nbAccident, prime){
    if (nbAccident === 0){
        return prime;
    }
    else if (nbAccident === 1){
        return prime/2
    }
    else if (nbAccident === 2){
        return prime/3
    }
    else if (nbAccident === 4){
        return prime/4
    }
    else{
        return 0
    }
}

function calculPrime(){
    let prime = 0;
    let dist = recupValeur("#dist")
    let yrs = recupValeur("#num_ancien")
    let accident = recupValeur("#accident")
    prime += primeDist(dist) + primeAnnées(yrs);
    prime = lostPrime(accident, prime);

    window.document.querySelector("#prime").innerHTML =
    "La prime sera de : " + prime + " €";
}

function recupValeur(id) {
    return parseInt(window.document.querySelector(id).value);
}

window.addEventListener("load", function () {

    window.document.querySelector("#btn_calculer").addEventListener("click", function () {
        calculPrime();
    });
});


window.addEventListener("load", function () {
    window.document.querySelector("#num_ancien").addEventListener("keyup", calculPrime);
    window.document.querySelector("#dist").addEventListener("keyup", calculPrime);
    window.document.querySelector("#accident").addEventListener("keyup", calculPrime);
});

