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