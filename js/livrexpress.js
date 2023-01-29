
/**
 * Renvoie la prime obtenue en fonction du nombre d'années d'anciéneté
 * @param {Integer} years
 * @returns {Integer}
 */
function primeAnnées(years) {
    const yrsForPrime = 4, premPrime = 300, upPrime = 30;
    let result = 0;
    if (years >= yrsForPrime) {
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
function primeDist(dist) {
    const plafond = 900, centpKm = 0.01;
    let result = centpKm * dist;
    if (result >= plafond) {
        result = plafond;
    }
    return result;
}

function lostPrime(nbAccident, prime) {
    return prime / (1 + nbAccident)
}

function calculPrime() {
    let prime = 0;
    let accident = recupValeur("#accident")
    if (accident === 4) {
        window.document.querySelector("#dist").parentElement.remove();;
        window.document.querySelector("#num_ancien").parentElement.remove();
        window.document.querySelector("#prime").innerHTML =
            "Trop d'accident, la prochaine fois ces votre emploie qui feras 0 :/"
    }
    else {
        document.createElement('p').appendChild().innerHTML = "test"
        let dist = recupValeur("#dist")
        let yrs = recupValeur("#num_ancien")
        prime += primeDist(dist) + primeAnnées(yrs);
        prime = lostPrime(accident, prime);

        window.document.querySelector("#prime").innerHTML =
            "La prime sera de : " + prime + " €";
    }

}

function recupValeur(id) {
    return parseInt(window.document.querySelector(id).value);
}

window.addEventListener("load", function () {

    window.document.querySelector("#btn_calculer").addEventListener("click", function () {
        calculPrime();
    });
    window.document.querySelector("#accident").addEventListener("change", function () {

        window.document.querySelector("#o_accident").innerHTML = `${recupValeur("#accident")}`
        calculPrime();
    });
});



window.addEventListener("load", function () {
    window.document.querySelector("#num_ancien").addEventListener("keyup", calculPrime);
    window.document.querySelector("#dist").addEventListener("keyup", calculPrime);
    window.document.querySelector("#accident").addEventListener("keyup", calculPrime);
});

