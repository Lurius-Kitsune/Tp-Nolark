function primeAnnées(){
    
}

/**
 * Affiche la prime obtenue en fonction de la distance parcourue:
 * Cependant la valeur max sera le plafond !
 * @param {Integer} dist
 * @returns {float} La prime obtenue 
 */
function primeDist(dist){
    const plafond = 900, centpKm = 0.1;
    let i, result = 0;
    result += centpKm*dist;
        if (result >= plafond){
            result = plafond;
        }
    return result;
}