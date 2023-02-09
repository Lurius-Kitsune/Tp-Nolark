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
function getCoefDiffusion(sexe){
    if (sexe === "homme"){
        return 0.7;
    }
    else{
        return 0.6;
    }
}

function getAlcoolemie(sexe, poids, nbVerres){
    return (getAlcoolPur(nbVerres) / (poids * getCoefDiffusion(sexe))).toFixed(2);
}