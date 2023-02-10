/***
 * Fonction qui retourne l'alcool pur ingéré en fonction du nombre
 * de verre
 * 
 * @param {int} nbVerres
 * @returns {int}
 */
function getAlcoolPur(nbVerres) {
    const uniteAlcool = 10;
    return nbVerres * uniteAlcool;
}

/***
 * Fonction qui retourne le coefficient de diffusion en fonction du sexe
 * @param {int} sexe
 * @returns {float}
 */
function getCoefDiffusion(sexe) {
    if (sexe === "homme") {
        return 0.7;
    } else {
        return 0.6;
    }
}

/**
 * Fonction qui retourne l'alcoolémie en fonction du sexe, du poids et du 
 * nombre de verres ingérés 
 * 
 * @param {string} sexe 
 * @param {int} poids 
 * @param {int} nbVerres 
 * @returns {float} 
 */
function getAlcoolemie(sexe, poids, nbVerres) {
    // /!\ division par 0, on ne veut pas provoquer la destruction de l'univers ;o) 
    if (poids > 0) {
        return (getAlcoolPur(nbVerres) / (poids * getCoefDiffusion(sexe))).toFixed(2);
    } else {
        return 0;
    }
}

/***
 * Fonction qui retourne l'amende encourue en fonction de l'alcoolémie
 * 
 * @param {float} alcoolemie
 * @returns {String}
 */
function getAmende(alcoolemie) {
    const seuil = 0.8;
    if (alcoolemie < seuil) {
        return 'Minorée : 90 € / Forfaitaire : 135 € / Majorée : 375 €';
    } else {
        return '4500 €';
    }
}

/***
 * Fonction qui retourne la sanction encourue en fonction de l'alcoolémie
 * 
 * @param {int} alcoolemie
 * @returns {String}
 */
function getSanction(alcoolemie) {
    const seuil = 0.8;
    if (alcoolemie < seuil) {
        return '6 points + suspension 3 ans';
    } else {
        return '6 points + 2 ans de prison + suspension 3 ans + stage de sensibilisation';
    }
}

/***
 * Fonction qui retourne une valeur entière récupérée via
 * widow.document.querySelector(id)
 * 
 * @param {string} id
 * @returns {integer}4
 */
function getInt(id) {
    let valeur = parseInt(window.document.querySelector(id).value)
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    }
    else {
        return valeur;
    }
}

/***
 * Fonction qui retourne un string récupéré dans un champ via son id
 * 
 * @param {string} id
 * @returns {string}
 */
function getString(id){
    return window.document.querySelector(id).value;
}